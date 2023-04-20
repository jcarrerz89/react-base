import React, { useContext } from "react";
import LoggedUser from "./logged_user/LoggedUser";
import UnloggedUser from "./unlogged_user/UnLoggedUser";
import { UserContext } from "../../../context/UserContextProvider";

const MenuUser: React.FC = () => {
    const userContext = useContext(UserContext);

    if (userContext.user) {
        return <LoggedUser />;
    }

    return <UnloggedUser />;
};

export default MenuUser;
