import React from "react";
import { useNavigate } from "react-router-dom";

import { Info } from "@mui/icons-material";

// @ts-ignore
import styles from "./styles.module.scss";

export function TaskItem({ id, title, completed }) {
  const navigate = useNavigate();

  function handleGoToTaskDetails(id) {
    navigate(`/tasks/${id}`);
  }

  return (
    <tr className={styles.container}>
      <td>{title}</td>

      <td>
        <input type="checkbox" checked={completed} />
      </td>

      <td>
        <button
          className={styles.buttonIcon}
          onClick={() => handleGoToTaskDetails(id)}
        >
          <Info />
        </button>
      </td>
    </tr>
  );
}
