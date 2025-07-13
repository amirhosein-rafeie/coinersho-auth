"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
    </div>
  );
}
