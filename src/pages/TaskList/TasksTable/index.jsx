import React, { useEffect, useState } from "react";

import { getTasks } from "../../../api";

import { TaskItem } from "./TaskItem";

// @ts-ignore
import styles from "./styles.module.scss";

export function TasksTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((response) => setTasks(response));
  }, []);

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          // @ts-ignore
          <TaskItem key={task.id} {...task} />
        ))}
      </tbody>
    </table>
  );
}
