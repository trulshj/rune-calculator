import React, { useState } from "react";
import { calculateRange } from "../lib/runes";
import styles from "../styles/Calculator.module.css";

export default function Calculator() {
  const [runes, setRunes] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [desiredLevel, setDesiredLevel] = useState(1);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.id, e.currentTarget.value);
    let value = Number(e.currentTarget.value);

    if (e.currentTarget.id === "currentLevel") {
      setCurrentLevel(value);
      setRunes(calculateRange(value, desiredLevel));
    } else {
      setDesiredLevel(value);
      setRunes(calculateRange(currentLevel, value));
    }
  }

  return (
    <div className={styles.container}>
      <div>
        I am currently level{" "}
        <input
          type="number"
          name="currentLevel"
          id="currentLevel"
          defaultValue={1}
          onChange={handleChange}
          min={1}
          max={713}
          size={2}
        />
      </div>
      <div>
        I want to be level{" "}
        <input
          type="number"
          name="desiredLevel"
          id="desiredLevel"
          defaultValue={1}
          onChange={handleChange}
          min={1}
          max={713}
          size={2}
        />
      </div>
      <div>I will need {runes.toLocaleString()} runes to reach that level</div>
    </div>
  );
}
