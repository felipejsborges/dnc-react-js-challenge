import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

// @ts-ignore
import styles from "./styles.module.scss";

export function GoBackButton() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  return (
    <button className={styles.container} onClick={handleGoBack}>
      <ArrowBack />
    </button>
  );
}
