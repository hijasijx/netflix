import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Header, Profiles } from "../components";
import * as ROUTES from "../constans/routes";
import logo from "../logo.svg";
import loadingImage from "../loading.gif";

export function SelectProfileContainer() {
  const [isLoadingUserId, setIsLoadingUserId] = useState(null);
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      name: "IJX",
      image: require("../assets/images/users/2.png"),
    },
    {
      id: 2,
      name: "abhi",
      image: require("../assets/images/users/1.png"),
    },
    {
      id: 3,
      name: "gazeem",
      image: require("../assets/images/users/3.png"),
    },
    {
      id: 4,
      name: "nishmal",
      image: require("../assets/images/users/4.png"),
    },
    {
      id: 5,
      name: "gachu",
      image: require("../assets/images/users/5.png"),
    },
    {
      id: 6,
      name: "hamza",
      image: require("../assets/images/users/2.png"),
    },
  ];
  const handleUserClick = (userId, userImage, userName) => {
    setIsLoadingUserId(userId);

    setTimeout(() => {
      setIsLoadingUserId(null);
      navigate(ROUTES.Browse, { state: { userImage, userName } });
    }, 1000);
  };

  const renderUser = () =>
    users.map((user) => (
      <Profiles.User
        key={user.id}
        onClick={() => handleUserClick(user.id, user.image, user.name)}
      >
        {isLoadingUserId === user.id ? (
          <img src={loadingImage} alt="Loading" />
        ) : (
          <Profiles.Picture src={user.image} />
        )}
        <Profiles.Name>{user.name}</Profiles.Name>
      </Profiles.User>
    ));

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.Home} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>{renderUser()}</Profiles.List>
      </Profiles>
    </>
  );
}
