import { Login } from "@/components/pages/Login";
import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <Routes>
            {HomeRoutes.map((props) => (
              <Route key={props.path} path={props.path} element={props.children}/>
            ))}
          </Routes>
        }
      />
      </Routes>

    // </BrowserRouter>
  );
});
