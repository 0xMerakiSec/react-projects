import { useState } from "react";
import UserContext from "./UserContext";
import PropTypes from "prop-types";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.any,
};
export default UserProvider;
