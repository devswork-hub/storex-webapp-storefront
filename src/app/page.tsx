"use client";

import styles from "./page.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_ORDERS } from "@/integrations/get-all-orders";
import { createOrder } from "@/integrations/create-order";
import { SplitText } from "gsap/all";

export default function Home() {
  const { data, loading, error } = useQuery<any>(GET_ALL_ORDERS, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Orders Data:", data);

  async function handleSubmit() {
    try {
      await createOrder({});
    } catch (err) {
      console.log("error submit ", err);
    }
  }

  // LIB pra ficar de olho
  // https://skiper-ui.com/docs/components/expanded-tabs

  return (
    <div className={styles.page}>
      <SplitText>Text animado, da lib de animacoes de texto</SplitText>
      Pedidos <button onClick={handleSubmit}>Criar pedido</button>
    </div>
  );
}
