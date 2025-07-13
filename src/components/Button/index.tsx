import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={styles.button} {...props} />;
};

export default Button;
