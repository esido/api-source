"use client";
import React from "react";
import "./Sidebar.css";
import Link from "next/link";
import { IconName } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link
            className={pathname === "/dashboard/users" ? "link active" : "link"}
            href={"/dashboard/users"}
          >
            <FaRegUser />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/dashboard/products" ? "link active" : "link"
            }
            href={"/dashboard/products"}
          >
            <MdOutlineProductionQuantityLimits />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/dashboard/comments" ? "link active" : "link"
            }
            href={"/dashboard/comments"}
          >
            <FaComment />
            <span>Comments</span>
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/dashboard/news" ? "link active" : "link"}
            href={"/dashboard/news"}
          >
            <FaRegNewspaper />
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/dashboard/weather" ? "link active" : "link"
            }
            href={"/dashboard/weather"}
          >
            <TiWeatherCloudy />
            <span>Weather</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
