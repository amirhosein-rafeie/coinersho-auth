import React from "react";
import styles from "./Input.module.scss";
import { InputProps } from "@/app/types/props";

const Input = (props: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input {...props} />
      {!!props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Input;
