import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from "react";
import { User } from "../models/model.user";
import * as SecureStore from "expo-secure-store";
import { getUserData, logoutUser } from "../service/api/userService";

interface UserContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}

export const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: () => {},
});

export default function ContextUserProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        console.log("User state updated:", user);

        const handleUserChange = async () => {
            if (user === undefined) {
                await logoutUser();
            }
        };

        handleUserChange();
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
