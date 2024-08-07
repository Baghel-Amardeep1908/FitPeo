import { useEffect, useState } from "react";
import item from "../../Utils/dashboardHeader.json";
import {
  CardContainer,
  CardContainerBottom,
  MainContainerDashboard,
} from "./headerStyling";

const DashboardHeader = () => {
  const [data, setData] = useState(item);

  console.log(data);
  return (
    <>
      <MainContainerDashboard>
        {data.map((item, index) => {
          const { name, icon, count, growth } = item;
          return (
            <div key={index}>
              <CardContainer>
                <img src={icon} alt="" style={{ width: 30, height: 30 }} />
                <p>{name}</p>
                <CardContainerBottom>
                  <h1>{count}</h1>
                  <h3
                    style={
                      growth < 0 ? { color: "#E74E56" } : { color: "#11C08E" }
                    }
                  >
                    {growth > 0 ? (
                      <h3>&#9652;{growth}</h3>
                    ) : (
                      <h3>&#9662;{growth}</h3>
                    )}
                  </h3>
                </CardContainerBottom>
              </CardContainer>
            </div>
          );
        })}
      </MainContainerDashboard>
    </>
  );
};
export default DashboardHeader;
