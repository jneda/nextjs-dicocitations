import Layout from "../../components/layout";
import Link from "next/link";

export default function NewQuote() {
  const centuries = [];
  for (let i = 16; i < 22; i++) {
    centuries.push(i);
  }

  const centuryOptions = centuries.map(century => (
    <option key={century} value="century">
      {`${century}`}<sub>e</sub>
    </option>
  ))

  return (
    <Layout>
      <section>
        <form action="" method="POST">
          <fieldset>
            <legend>Auteur</legend>
            <div class="grid">
              <label for="last-name">
                Nom
                <input type="text" name="last-name" id="last-name" required />
              </label>
              <label for="first-name">
                Prénom
                <input type="text" name="first-name" id="first-name" />
              </label>
            </div>
          </fieldset>
          <label for="text">
            Texte
            <textarea name="text" id="text" required>
            </textarea>
          </label>
          <label for="century">
            Siècle
            <select id="century" required>
              <option value="" selected>Parcourir</option>
              {centuryOptions}
            </select>
          </label>
          <button type="submit">Ajouter</button>
        </form>
      </section>
      <nav>
        <ul>
          <li>
            <Link href="/" role="button" className="outline">&larr; Accueil</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}