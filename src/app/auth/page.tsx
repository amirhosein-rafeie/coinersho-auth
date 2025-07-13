"use client";
import Input from "@/components/Input";
import styles from "./page.module.scss";
import { ChangeEvent, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 11) {
      setPhoneNumber(e.target.value);
    }
  };

  const validateForm = () => {
    if (!phoneNumber) {
      setError("This field is required.");
      return false;
    }

    if (!/^۰?۹[۰-۹]{9}$|^09\d{9}$/.test(phoneNumber)) {
      setError("The phone number format is incorrect.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
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
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>
          Coiner<span className={styles.span}>Sho</span>
        </h3>

        <Input
          type="number"
          placeholder="Phone Number"
          error={error}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <Button isLoading={isLoading} onClick={handleLogin}>
          LOGIN
        </Button>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}
