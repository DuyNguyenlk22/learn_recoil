import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState } from "../../productState";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { addToCart, cartState } from "../../cartState";

export default function ProductList() {
  const productList = useRecoilValue(productListState);
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddToCart = (item) => {
    const newCart = addToCart(cart, item);
    setCart(newCart);
  };

  return (
    <>
      <h2>Prodcut List:</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.title}</td>
                <td>
                  <Button
                    variant='primary'
                    onClick={() => {
                      handleAddToCart(item);
                    }}>
                    Add
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
