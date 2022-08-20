import React from "react";
import * as S from "./styled";
import { Link, Outlet } from "react-router-dom";

const Company = () => {


  return (
    <footer>
      <S.Footer>
      <nav>
      <input
          type="password"
          id
          placeholder="Enter your ID"/>
          <Link to="/Database"> 
          <button type="submit" >
          <span>Log In</span>
          </button>
          </Link>
        </nav>
        <Outlet />
      </S.Footer>
    </footer>
  );
};

export default Company;

