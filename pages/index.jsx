import Link from "next/link";
import Layout from "../components/layout";
import SearchForm from "../components/SearchForm/SearchForm";
import Author from "../models/author";

export default function HomePage({ authors }) {
  return (
    <Layout>
      <section>
        <article>
          <h1>Citation du jour</h1>
        </article>
      </section>

      <SearchForm authors={authors} />

      <nav>
        <ul>
          <li>
            <Link href="/quote/new" role="button" className="outline">Ajouter une citation</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export async function getServerSideProps() {
  let authors = await Author.findAll({
    order: [['lastName', 'ASC'], ['firstName', 'ASC']]
  });
  authors = authors.map(author => author.toJSON());
  return {
    props: { authors }
  }
}
