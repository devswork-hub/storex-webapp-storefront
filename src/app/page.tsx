"use client";

import styles from "./page.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_ORDERS } from "@/integrations/get-all-orders";

export default function Home() {
  const { data, loading, error } = useQuery<any>(GET_ALL_ORDERS, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Orders Data:", data);

  return <div className={styles.page}>Pedidos</div>;
}
