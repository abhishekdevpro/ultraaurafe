import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SidebarLayout = ({ children }) => {
  const { pathname: activeTab } = useRouter();
  return (
    <div className="container m-0">
      <div className="row">
        <aside className="col px-4" style={{ backgroundColor: "#FF7D4D" }}>
          <div className="bg">
            <ul className="fs-6 mt-3">
              {[
                { path: "/", label: "Home", icon: "home" },
                {
                  path: "/create-course",
                  label: "Create Course",
                  icon: "briefcase",
                },
                {
                  path: "/dashboard-form",
                  label: "Trainer Profile",
                  icon: "user",
                },
                { path: "/sign-in", label: "Logout", icon: "sign-out" },
              ].map(({ path, label, icon }) => (
                <li
                  key={path}
                  className={`mb-3 ${activeTab === path ? "text-white" : ""}`}
                >
                  <Link
                    href={path}
                    className={`d-flex align-items-center text-decoration-none ${
                      activeTab === path ? "text-white" : "text-primary"
                    }`}
                  >
                    <i
                      className={`fi fi-rr-${icon} me-3 fs-4 py-2 text-white`}
                    ></i>
                    <span className="text-white">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
