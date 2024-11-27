import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { User } from "../models/model.user";
import { getUserData } from "../service/api/userService";

interface UserContextType {
    user: User | undefined;
    setUser: any;
    loading: boolean;
}

export const UserContext = createContext<UserContextType>({
    user: undefined,
    setUser: () => {},
    loading: false,
});

export default function ContextUserProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserData();
                setUser(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}
