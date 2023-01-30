import Layout from "../components/layout";
import Link from "next/link";
import Author from "../models/author";

export default function HomePage({ authors }) {
  return (
    <Layout>
      <section>
        <form action="/quote/show" method="GET">
          <label>
            Rechercher une citation
          </label>
          <input type="search" name="query" id="query" />
          <fieldset>
            <legend>Trier par</legend>
            <label for="author">
              <input type="radio" id="author" name="sort" value="author" checked />
              Auteur
            </label>
            <label for="century">
              <input type="radio" id="century" name="sort" value="century" />
              Siècle
            </label>
          </fieldset>
          <button type="submit">Rechercher</button>
        </form>
      </section>
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

export async function getServerSideProps(context) {
  let authors = await Author.findAll();
  authors = authors.map(author => author.toJSON());
  return {
    props: { authors }
  }
}
