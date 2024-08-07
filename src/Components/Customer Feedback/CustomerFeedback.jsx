import { useState } from "react";
import customerFeedback from "../../Utils/customersFeedback.json";

const CustomerFeedback = () => {
  const [data, setData] = useState(customerFeedback);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <h1>Customer's Feedback</h1>

      {data.map((item) => {
        const { name, rating, comments, image } = item;
        return (
          <>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img
                src={image}
                alt=""
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: "50%",
                }}
              />
              {name}
            </h3>
            <div>
              {Array(5)
                .fill(1)
                .map((item, index) => {
                  if (index < rating) {
                    return (
                      <span style={{ color: "#F9DD24", fontSize: 25 }}>
                        &#9733;
                      </span>
                    );
                  }
                  return <span style={{ fontSize: 25 }}>&#9733;</span>;
                })}
            </div>
            <p style={{ paddingBottom: 5, borderBottom: "1px solid #2d2e37" }}>
              {comments}
            </p>
          </>
        );
      })}
    </div>
  );
};
export default CustomerFeedback;
