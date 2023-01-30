import { IConfirmationResult, IOrder } from "./interfaces";


// ** POST THE ORDER TO API**
export const postOrder = async (newOrder: IOrder) => {
  const res = await fetch('http://localhost:3000/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  });

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  return (await res.json()) as IConfirmationResult

};
