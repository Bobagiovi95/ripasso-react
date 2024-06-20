import { useState } from "react";
import styles from "../styles/Form.module.css";

export const Form = () => {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={handleUserInput}
            value={userInput}
          />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input:</h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
};
