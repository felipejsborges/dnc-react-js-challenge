import React from "react";

// @ts-ignore
import styles from "./styles.module.scss";

export function DetailItem({ label, value, type }) {
  const id = `input${label}`;

  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}:</label>
      <input type={type} id={id} checked={value} value={value} />
    </div>
  );
}
