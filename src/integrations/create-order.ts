import { gql } from "@apollo/client";
import gqlClient from "./graphql-client";

export const CREATE_ORDER = gql`
  mutation CreateOrder {
    createOrder(
      input: {
        status: "PENDING"
        customerId: "123"
        paymentId: "abc"
        notes: "Entrega rápida, por favor"
        currency: "BRL"
        items: [
          {
            productId: "prod-1"
            quantity: 2
            price: { amount: 150.0, currency: "BRL" }
            seller: "Loja A"
            title: "Teclado Mecânico"
            shippingId: "ship-1"
          }
        ]
        paymentSnapshot: {
          method: "credit_card"
          status: "pending"
          amount: 300.0
        }
        shippingSnapshot: {
          status: "NOT_REQUESTED"
          carrier: "Correios"
          service: "PAC"
        }
        billingAddress: {
          street: "Rua A, 123"
          city: "São Paulo"
          state: "SP"
          zipCode: "01234-567"
        }
      }
    ) {
      id
      status
      customerId
      paymentId
      notes
      currency
      subTotal
      total
      items {
        productId
        quantity
        price {
          amount
          currency
        }
        seller
        title
      }
      paymentSnapshot {
        method
        status
        amount
      }
      shippingSnapshot {
        status
        carrier
        service
      }
      billingAddress {
        street
        city
        state
        zipCode
      }
    }
  }
`;

export async function createOrder(payload: any) {
  try {
    const client = gqlClient;
    await client.mutate({
      mutation: CREATE_ORDER,
      variables: {
        ...payload,
      },
      refetchQueries: [
        {
          query: CREATE_ORDER,
        },
      ],
    });
  } catch (error) {
    return "Error add Post" + error;
  }
}
