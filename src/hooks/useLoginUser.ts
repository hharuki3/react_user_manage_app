import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";

// contextの値を取得するためのカスタムフック
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
