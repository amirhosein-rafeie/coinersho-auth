import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "@/app/types/props";

const Button = ({ isLoading, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={isLoading} {...props}>
      {isLoading ? "loading..." : props.children}
    </button>
  );
};

export default Button;
