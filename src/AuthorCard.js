import { useState } from "react";
import styles from "./app.module.css";

const AuthorCard = ({ name, birth_date, work_count, top_work }) => {
  const [display, setDisplay] = useState(false);
  return (
    <div
      className={styles.dropdownContainer}
      onClick={() => setDisplay(!display)}
    >
      <h3>{name}</h3>
      <div
        className={styles.information}
        style={{ display: `${display ? "block" : "none"}` }}
      >
        Author details
        <ul className={styles.infolist}>
          <li>Birth Date: {birth_date}</li>
          <li>Top Work: {top_work}</li>
          <li>Total Books: {work_count}</li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorCard;
