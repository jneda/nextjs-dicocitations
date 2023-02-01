import { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import SearchForm from '../components/SearchForm/SearchForm'
import Author from '../models/author'
import Quote from '../models/quote'

import styles from "./index.module.css";

export default function HomePage({ authors, quote }) {

  return (
    <Layout>
      <section>
        <article>
          <p className={styles["quote-text"]}>{quote.text}</p>
          <p className={styles["quote-author"]}>{`${quote.author.firstName} ${quote.author.lastName}`}</p>
        </article>
      </section>

      <SearchForm authors={authors} />

      <nav>
        <ul>
          <li>
            <Link href="/quote/new" role="button" className="outline">
              Ajouter une citation
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export async function getServerSideProps() {
  let authors = await Author.findAll({
    order: [
      ['lastName', 'ASC'],
      ['firstName', 'ASC'],
    ],
  })
  authors = authors.map((author) => author.toJSON())

  let quotes = await Quote.findAll({ include: Author });
  quotes = quotes.map((quote) => quote.toJSON())
  const quote = getRandomQuote(quotes);

  return {
    props: { authors, quote },
  }
}

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
