import React from "react";

const List = ({ result }) => {
  const btnColor = {
    Delivered: { color: "blue", background: "rgb(156, 186, 231)" },
    Completed: { color: "green", background: "rgb(156, 231, 175)" },
    Prepared: { color: "orange", background: "rgb(231, 192, 156)" },
  };
  return (
    <table>
      <tr>
        {" "}
        <th>order id</th>
        <th>customer</th>
        <th>address</th>
        <th> product</th>
        <th> date order</th>
        <th> status</th>
      </tr>{" "}
      {result.map(
        ({
          order_id,
          customer,
          country,
          address,
          product_title,
          product_description,
          date,
          status,
        }) => {
          return (
            <tr key={order_id}>
              <td>{order_id}</td>
              <td>{customer}</td>
              <td>
                {country}
                <br />
                {address}
              </td>
              <td>
                {product_title}
                <br />
                {product_description}
              </td>
              <td>{date}</td>

              <td
                style={{
                  color: btnColor[status]?.color,
                  backgroundColor: btnColor[status]?.background,
                  textAlign: "center",
                  borderRadius: "13%",
                  width: "2vw",
                }}
              >
                {status}
              </td>
            </tr>
          );
        }
      )}
    </table>
  );
};

export default List;
