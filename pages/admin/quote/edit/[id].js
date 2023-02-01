import { useState } from 'react'
import Layout from '../../../../components/layout'
import Link from 'next/link'
import { toast, Toaster } from 'react-hot-toast'
import Author from '../../../../models/author'
import Quote from '../../../../models/quote'

export default function EditQuote({ quote }) {
  const [lastName, setLastname] = useState(quote.author.lastName)
  const [firstName, setFirstName] = useState(quote.author.firstName)
  const [text, setText] = useState(quote.text)
  const [century, setCentury] = useState(quote.author.century)

  async function onSubmitHandler(e) {
    e.preventDefault()

    const postData = {
      id: quote.id,
      lastName: lastName,
      firstName: firstName,
      text: text,
      century: century,
    }
    
    console.log(JSON.stringify(postData));

    const response = await fetch('/api/quote/edit', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(postData),
    })

    console.log(await response.json())
    toast.success('Citation modifiée !')
  }

  return (
    <Layout>
      <Toaster />
      <section>
        <form action="" method="POST" onSubmit={onSubmitHandler}>
          <fieldset>
            <legend>Auteur</legend>
            <div class="grid">
              <label htmlFor="last-name">
                Nom
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="first-name">
                Prénom
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            </div>
          </fieldset>
          <label htmlFor="text">
            Texte
            <textarea
              name="text"
              id="text"
              onChange={(e) => setText(e.target.value)}
              required
            >
              {text}
            </textarea>
          </label>
          <label htmlFor="century">
            Siècle
            <select
              id="century"
              name="century"
              value={century}
              onChange={(e) => setCentury(e.target.value)}
              required
            >
              <option value="" selected></option>
              {getCenturyOptions()}
            </select>
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </section>
      <nav>
        <ul>
          <li>
            <Link href="/" role="button" className="outline">
              &larr; Accueil
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export async function getStaticPaths() {
  const quotes = await Quote.findAll()
  const quoteIds = quotes
    .map((quote) => quote.toJSON())
    .map((quote) => ({
      params: {
        id: quote.id.toString(),
      },
    }))

  return {
    paths: quoteIds,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let quote = await Quote.findByPk(params.id, {
    include: Author,
  })
  quote = quote.toJSON()

  return {
    props: { quote },
  }
}

function getCenturyOptions() {
  const centuries = []
  for (let i = 16; i < 22; i++) {
    centuries.push(i)
  }

  return centuries.map((century) => (
    <option key={century} value={century}>
      {`${century}`}e
    </option>
  ))
}
