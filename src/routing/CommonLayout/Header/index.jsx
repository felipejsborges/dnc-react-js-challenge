import React from "react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
import styles from "./styles.module.scss";

export function Header() {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <span onClick={goToHomePage}>Tarefas</span>
    </div>
  );
}
