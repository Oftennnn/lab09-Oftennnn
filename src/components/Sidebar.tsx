import {
  BsBox2HeartFill,
  BsPlusCircleFill,
  BsCalendarCheckFill,
  BsEmojiSunglassesFill,
} from "react-icons/bs";
import { type SidebarProps } from "../libs/Sidebar";
import { Link } from "react-router";

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Note App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                <BsPlusCircleFill />
                <span className="d-md-inline px-2">CounterPage</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsBox2HeartFill />
                <span className="d-md-inline px-2">MY Stuffs</span>
              </a>
              <ul className="dropdown-menu p-2">
                <li>
                  <Link className="nav-link active" to={"/my/hellomynamepage"}>
                    <BsEmojiSunglassesFill />
                    <span className="d-md-inline px-2">HelloMyNamePage</span>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link active" to={"/my/todolistpage"}>
                    <BsCalendarCheckFill />
                    <span className="d-md-inline px-2">TodolistPage</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-white">
          {userName} :{type}
        </p>
      </div>
    </aside>
  );
}
