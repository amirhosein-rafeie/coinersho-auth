"use client";

import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.replace("/auth");
    } else {
      setIsChecking(false);
    }
  }, []);

  if (isChecking) return null;
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Welcome to the dashboard</h1>
    </div>
  );
};

export default Dashboard;
