import React from "react";
import styles from "./Input.module.scss";
import { InputProps } from "@/app/types/props";

const Input = (props: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
