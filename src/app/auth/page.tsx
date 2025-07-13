"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleLogin = () => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=1&nat=us")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data?.results[0]));
          router.push("/dashboard");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>ورود به کوینرشو</h3>
        <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
        <Button isLoading={isLoading} onClick={handleLogin}>
          ورود
        </Button>
      </div>
    </div>
  );
}
