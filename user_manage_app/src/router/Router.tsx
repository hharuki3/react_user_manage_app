import { Login } from "@/components/pages/Login";
import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
