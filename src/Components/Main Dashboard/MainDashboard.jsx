import Activity from "../Activity/Activity";
import Category from "../Category/Category";
import CustomerFeedback from "../Customer Feedback/CustomerFeedback";
import DashboardHeader from "../Dashboard/Header";
import NetProfit from "../Net Profit/NetProfit";
import RecentOrders from "../Recent Orders/RecentOrders";
import {
  ContentMainContainer,
  Header,
  LeftSideBarContainer,
  LeftSideBardIcon,
  LeftSideBarLowerIcon,
  LeftSideBarMainIcon,
  MainContainer,
} from "./mainDashboardStyling";

const MainDashBoard = () => {
  return (
    <>
      <MainContainer>
        <LeftSideBarContainer>
          <div>
            <LeftSideBardIcon
              src="/src/assets/icon/main-menu.png"
              alt=""
              style={{ paddingTop: 45, height: 30, width: 30 }}
            />
          </div>
          <LeftSideBarLowerIcon>
            <LeftSideBarMainIcon>
              <LeftSideBardIcon src="/src/assets/icon/home.png" alt="" />
              <LeftSideBardIcon src="/src/assets/icon/growth.png" alt="" />
              <LeftSideBardIcon src="/src/assets/icon/event.png" alt="" />
              <LeftSideBardIcon src="/src/assets/icon/wallet.png" alt="" />
              <LeftSideBardIcon src="/src/assets/icon/cart.png" alt="" />
            </LeftSideBarMainIcon>

            <div>
              <LeftSideBardIcon src="/src/assets/icon/logout.png" alt="" />
            </div>
          </LeftSideBarLowerIcon>
        </LeftSideBarContainer>
        <ContentMainContainer>
          <Header>
            <div style={{ paddingLeft: 30, position: "relative" }}>
              <input
                type="search"
                name=""
                id=""
                style={{
                  height: 37,
                  width: 300,
                  backgroundColor: "#292B2F",
                  borderRadius: 5,
                }}
              />

              <LeftSideBardIcon
                src="/src/assets/icon/search.png"
                alt=""
                style={{ position: "absolute", left: "15%", bottom: "20%" }}
              />
            </div>
            <div style={{ display: "flex", gap: 25, paddingRight: 20 }}>
              <LeftSideBardIcon
                src="/src/assets/icon/mail.png"
                alt=""
                style={{
                  padding: 10,
                  backgroundColor: "#454749",
                  borderRadius: "50%",
                }}
              />
              <LeftSideBardIcon
                src="/src/assets/icon/settings.png"
                alt=""
                style={{
                  padding: 10,
                  backgroundColor: "#454749",
                  borderRadius: "50%",
                }}
              />
              <LeftSideBardIcon
                src="/src/assets/icon/notifications.png"
                alt=""
                style={{
                  padding: 10,
                  backgroundColor: "#454749",
                  borderRadius: "50%",
                }}
              />
              <LeftSideBardIcon
                src="https://randomuser.me/api/portraits/women/5.jpg"
                alt=""
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                }}
              />
            </div>
          </Header>
          <h1 style={{ paddingLeft: 25 }}>Dashboard</h1>
          <div
            style={{
              flex: 9,
              display: "flex",
              gap: 30,
              flexWrap: "wrap",
              paddingLeft: 25,
            }}
          >
            <div style={{ flexBasis: "60%" }}>
              <DashboardHeader />
            </div>
            <div
              style={{
                flexBasis: "33%",
                padding: 10,
                backgroundColor: "#1f2029",
                borderRadius: 10,
              }}
            >
              <NetProfit />
            </div>
            <div
              style={{
                flexBasis: "60%",
                backgroundColor: "#1f2029",
                borderRadius: 10,
              }}
            >
              <Activity />
            </div>
            <div
              style={{
                flexBasis: "35%",
                backgroundColor: "#1f2029",
                borderRadius: 10,
              }}
            >
              <Category />
            </div>
            <div
              style={{
                flexBasis: "60%",
                backgroundColor: "#1f2029",
                borderRadius: 10,
                height: "54%",
              }}
            >
              <RecentOrders />
            </div>
            <div
              style={{
                flexBasis: "35%",
                backgroundColor: "#1f2029",
                borderRadius: 10,
              }}
            >
              <CustomerFeedback />
            </div>
          </div>
        </ContentMainContainer>
      </MainContainer>
    </>
  );
};
export default MainDashBoard;
