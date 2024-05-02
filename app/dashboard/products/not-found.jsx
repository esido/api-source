import React from "react";
import Link from "next/link";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-dound-container">
      <div className="not-found-content">
        <h1 className="not-found-status">404</h1>
        <p>
          Sorry,we couldn't find this page. You can find plenty of other things
          on our <Link href={"/"}>homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
