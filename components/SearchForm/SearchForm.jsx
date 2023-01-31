import { useState } from "react";

export default function SearchForm({ authors }) {
  const [query, setQuery] = useState("");
  const [author, setAuthor] = useState("");
  const [century, setCentury] = useState("");
  const [sortBy, setSortBy] = useState("author");

  function submitHandler(e) {
    e.preventDefault();
    console.log(new FormData(e.target));
  }

  function selectChangeHandler(e) {
    setSortBy(e.target.value);
  }

  return (
    <section>
      <form action="/quote/show" method="GET" onSubmit={submitHandler}>
        <label>Rechercher une citation</label>
        <input
          type="search"
          name="query"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <label htmlFor="author">Auteur</label>
        <select
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option />
          {getAuthorOptions(authors)}
        </select>

        <label htmlFor="century">Siècle</label>
        <select
          id="century"
          name="century"
          value={century}
          onChange={(e) => setCentury(e.target.value)}
        >
          <option />
          {getCenturyOptions()}
        </select>

        <fieldset>
          <legend>Trier par</legend>
          <label htmlFor="sort-by-author">
            <input
              type="radio"
              id="sort-by-author"
              value="author"
              name="sort"
              checked={sortBy === "author"}
              onChange={selectChangeHandler}
            />
            Auteur
          </label>
          <label htmlFor="sort-by-century">
            <input
              type="radio"
              id="sort-by-century"
              value="century"
              name="sort"
              checked={sortBy === "century"}
              onChange={selectChangeHandler}
            />
            Siècle
          </label>
        </fieldset>

        <button type="submit">Rechercher</button>
      </form>
    </section>
  );
}

function getAuthorOptions(authors) {
  return authors.map((author) => (
    <option
      key={author.id}
      value={author.id}
    >{`${author.firstName} ${author.lastName}`}</option>
  ));
}

function getCenturyOptions() {
  const centuryOptions = [];
  for (let i = 16; i < 22; i++) {
    centuryOptions.push(
      <option key={i} value={i}>
        {i}e
      </option>
    );
  }
  return centuryOptions;
}
