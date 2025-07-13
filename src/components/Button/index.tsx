import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

const Button = ({
  isLoading,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { isLoading: boolean }) => {
  return (
    <button className={styles.button} disabled={isLoading} {...props}>
      {isLoading ? "در حال ورود..." : props.children}
    </button>
  );
};

export default Button;
