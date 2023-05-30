import React, { useEffect, useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constans/routes";
import Logo from "../logo.svg";


export function HeaderContainer({ children }) {

  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={Logo} to={ROUTES.Home} alt="netflix" />
        <Header.ButtonLink to={ROUTES.Sign_in}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
