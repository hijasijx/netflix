import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  SearchIcon,
  SearchInput,
  Search,
  PlayButton,
} from "./styles/header";

export default function Header({ bg = true, children, ...restprops }) {
  return bg ? <Background {...restprops}>{children}</Background> : children;
}
Header.Feature = function HeaderFeature({ children, ...restprops }) {
  return <Feature {...restprops}>{children}</Feature>;
};
Header.Text = function HeaderText({ children, ...restprops }) {
  return <Text {...restprops}>{children}</Text>;
};
Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restprops
}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restprops}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onClick={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
};
Header.Dropdown = function HeaderDropdown({ children, ...restprops }) {
  return <Dropdown {...restprops}>{children}</Dropdown>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restprops }) {
  return <PlayButton {...restprops}>{children}</PlayButton>;
};
Header.Link = function HeaderLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>;
};
Header.Profile = function HeaderProfile({ children, ...restprops }) {
  return <Profile {...restprops}>{children}</Profile>;
};
Header.Picture = function HeaderPicture({ children, ...restprops }) {
  return <Picture {...restprops} />;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restprops
}) {
  return <FeatureCallOut {...restprops}>{children}</FeatureCallOut>;
};
Header.Frame = function HeaderFrame({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};
Header.Group = function HeaderGroup({ children, ...restprops }) {
  return <Group {...restprops}>{children}</Group>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restprops }) {
  return <ButtonLink {...restprops}>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restprops }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restprops} />
    </ReactRouterLink>
  );
};
