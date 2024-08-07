import { useState } from "react";
import item from "../../Utils/category.json";

const Category = () => {
  const [data, setData] = useState(item);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 30, padding: 20 }}
    >
      {data.map((item, index) => {
        const { name, icon, detail } = item;
        return (
          <div
            key={index}
            style={{ display: "flex", gap: 15, alignItems: "center" }}
          >
            <img src={icon} alt="" style={{ height: 50, width: 50 }} />
            <h5 style={{ flex: 1 }}>{name}</h5>
            <img
              src={detail}
              alt=""
              style={{
                height: 25,
                width: 25,
                borderRadius: "50%",
                backgroundColor: "#454749",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Category;
