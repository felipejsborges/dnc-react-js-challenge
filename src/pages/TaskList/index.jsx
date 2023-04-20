import React from "react";

import { TasksTable } from "./TasksTable";

// @ts-ignore
import styles from "./styles.module.scss";

export function TaskList() {
  return (
    <div className={styles.container}>
      <span className={styles.introMessage}>
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </span>
      <TasksTable />
    </div>
  );
}
