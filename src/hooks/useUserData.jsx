import { useContext } from "react";
import { UserData } from "../context/UserData";
function useUserData() {
  const context = useContext(UserData);

  if (!context) {
    throw new Error("useUserData must be used within UserDataProvider");
  }

  const { user, setUser } = context;

  return { user, setUser };
}

export default useUserData;
