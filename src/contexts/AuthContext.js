import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialValues = {title:"", ımgUrl:"", content:""}
const AuthContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState();
    const [info, setInfo] = useState(initialValues)
    return (
        <AuthContext.Provider value={{currentUser, info, setInfo }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
