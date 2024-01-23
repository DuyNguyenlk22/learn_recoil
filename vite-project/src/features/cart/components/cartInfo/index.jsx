import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../cartState";
export default function CartInfo() {
  const cartItem = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);
  return (
    <>
      <h2>Cart Info:</h2>
      <div>
        <ListGroup>
          {cartItem.map((item) => {
            return (
              <ListGroup.Item key={item.id}>
                {item.product.title}: {item.quantity}
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <div>Total: {total} VND</div>
      </div>
    </>
  );
}
