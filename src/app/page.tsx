"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleLogin = () => {
    console.log(phoneNumber);
  };

  return (
    <div className={styles.container}>
      <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
      <Button onClick={handleLogin}>ورود</Button>
    </div>
  );
}
