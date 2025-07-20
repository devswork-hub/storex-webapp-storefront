import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query FindAllOrders {
    findAllOrders {
      id
      status
      total
      subTotal
      customerId
      currency
      items {
        productId
        quantity
        price {
          amount
          currency
        }
        discount {
          couponCode
          value
          type
          currency
        }
      }
      discount {
        couponCode
        value
        type
        currency
      }
      paymentSnapshot {
        method
        status
        amount
        installments {
          number
          value
          interestRate
          totalValue
          dueDate
        }
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
      notes
      active
      createdAt
      updatedAt
    }
  }
`;
