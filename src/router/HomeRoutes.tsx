import { Setting } from "@/components/pages/Setting";
import { UserManagement } from "@/components/pages/UserManagement";
import Home from "@/pages";

export const HomeRoutes = [
  {
    path: "/",
    // exact: true, #react-router-dom v6ではexactは指定しない
    children: <Home />,
  },
  {
    path: "user_management",
    // exact: false,
    children: <UserManagement />,
  },
  {
    path: "/setting",
    // exact: false,
    children: <Setting />,
  },
];
