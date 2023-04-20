import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

// @ts-ignore
import styles from "./styles.module.scss";

export function CommonLayout() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
