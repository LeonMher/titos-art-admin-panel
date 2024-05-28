import { lazy } from "react";

import { Button } from "../components/shared/button/Button";
import { Input } from "../components/shared/input/Input";
import { useGetSelf } from "../api/useSelf";
// import MyButton from 'remoteApp/Button'

const MyButton = lazy(() => import("remoteApp/Button"));

const Dashboard = () => {
  const { data, isLoading } = useGetSelf();
  console.log(data, " data");
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isLoading ? <div className="loader"></div> : data.intro}
      <MyButton />
      <Button type="primary" size="large" onClick={() => console.log("click")}>
        asads
      </Button>
      <Input />
    </div>
  );
};

export default Dashboard;
