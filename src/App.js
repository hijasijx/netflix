import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Browse, Signin, Signup, Profile } from "./pages";
import * as ROUTES from "./constans/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.Sign_in}
          element={user ? <Navigate to={ROUTES.Browse} /> : <Signin />}
        />
        <Route path={ROUTES.Sign_up} element={<Signup />} />
        <Route
          path={ROUTES.Browse}
          element={user ? <Browse /> : <Navigate to={ROUTES.Sign_in} />}
        />
        <Route path={ROUTES.Profile} element={<Profile />} />
        <Route path={ROUTES.Home} element={<Home />} />
      </Routes>
    </Router>
  );
}
