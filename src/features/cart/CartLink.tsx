import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { getNumItems, getMemoizedNumItems } from "./cartSlice";
import { useAppSelector } from "../../app/hook";

export function CartLink() {
  const numItems = useAppSelector(getMemoizedNumItems);
  return (
    <Link to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;
        {numItems ? numItems : "Cart"}
      </span>
    </Link>
  );
}
