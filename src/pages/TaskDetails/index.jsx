import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTask } from "../../api";

import { GoBackButton } from "../../components/GoBackButton";
import { DetailItem } from "./DetailItem";

// @ts-ignore
import styles from "./styles.module.scss";

export function TaskDetails() {
  const { id } = useParams();

  const [task, setTask] = useState({});

  useEffect(() => {
    getTask(id).then((response) => setTask(response));
  }, []);

  return (
    <div className={styles.container}>
      <GoBackButton />

      <div className={styles.content}>
        <DetailItem
          label="Título"
          value={
            // @ts-ignore
            task.title
          }
          type="text"
        />

        <DetailItem
          label="Descrição"
          value={
            // @ts-ignore
            task.description
          }
          type="text"
        />

        <DetailItem
          label="Concluído"
          value={
            // @ts-ignore
            task.completed
          }
          type="checkbox"
        />
      </div>
    </div>
  );
}
