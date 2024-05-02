import Sidebar from "@/components/sidebar/Sidebar";
import style from "./dashboard.module.css";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className={style.dashboard}>
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
