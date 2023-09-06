import { createContext } from "react";

const UserContext = createContext({
    loggedIn: false,
    name: 'Default User'
})

export default UserContext