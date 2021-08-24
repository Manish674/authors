import styles from "./app.module.css";
import { useState } from "react";
import AuthorCard from "./AuthorCard";

const App = () => {
  const [author, setAuthor] = useState("");
  const [authorList, setAuthorList] = useState([]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://openlibrary.org/search/authors.json?q=${author}`
    );

    const data = await response.json().then(({ docs }) => setAuthorList(docs));
  };
  console.log(authorList);
  return (
    <div className={styles.container}>
      <form className={styles.styledForm} onSubmit={(e) => handleOnSubmit(e)}>
        <input
          value={author}
          className={styles.input}
          placeholder="Enter a name of matching authors"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </form>
      <div className={styles.wrapper}>
        {authorList.map(({ name, top_work, birth_date, work_count }) => (
          <AuthorCard
            name={name}
            top_work={top_work}
            birth_date={birth_date}
            work_count={work_count}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
