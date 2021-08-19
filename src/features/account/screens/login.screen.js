import React, { useContext, useState } from "react";

import { AccountBackground } from "../components/account.styles";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
};
