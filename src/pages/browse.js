import React, { useState, useEffect } from "react";
import { useContent } from "../hooks";
import { HeaderContainer } from "../containers/header";
import axios from "axios";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  return <BrowseContainer />;
}
