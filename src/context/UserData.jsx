import { useState, createContext } from "react";
export const UserData = createContext();
const UserDataProvider = (props) => {
  const [user, setUser] = useState("");
  return (
    <UserData.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </UserData.Provider>
  );
};
export default UserDataProvider;
