import { useState } from "react";
import recentOrders from "../../Utils/recentOrders.json";

const RecentOrders = () => {
  const [data, setData] = useState(recentOrders);
  return (
    <>
      <div>
        <h1
          style={{
            padding: "10px 31px",
          }}
        >
          Recent Orders
        </h1>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">Order No.</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              const { customer, orderNum, amount, status, image } = item;
              return (
                <tr>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      style={{ height: 30, width: 30, borderRadius: "50%" }}
                    />
                    {customer}
                  </td>
                  <td>{orderNum}</td>
                  <td>{amount}</td>
                  <td
                    style={
                      status === "Delivered"
                        ? {
                            backgroundColor: "#1A5248",
                            borderRadius: 50,
                            textAlign: "center",
                            padding: 0,
                          }
                        : {
                            backgroundColor: "#622E2D",
                            borderRadius: 50,
                            textAlign: "center",
                            padding: 0,
                          }
                    }
                  >
                    {status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RecentOrders;
