import { createContext, useContext, useState } from "react";
import Toast from "../components/toast";

type ToasterContextType = {
    showToast: (
        message: string,
        situation: "success" | "error" | "warning" | "none",
    ) => void;
};

export const ToasterContext = createContext<ToasterContextType | undefined>(
    undefined,
);

export default function ToastProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [toastState, setToastState] = useState({
        visible: false,
        message: "",
        situation: "none" as "success" | "error" | "warning" | "none",
    });

    const showToast = (
        message: string,
        situation: "success" | "error" | "warning" | "none",
    ) => {
        setToastState({ visible: true, message, situation });
    };

    const hideToast = () => {
        setToastState((prev) => ({ ...prev, visible: false }));
    };

    return (
        <ToasterContext.Provider value={{ showToast }}>
            {children}
            <Toast
                message={toastState.message}
                situation={toastState.situation}
                visible={toastState.visible}
                onClose={hideToast}
            />
        </ToasterContext.Provider>
    );
}

export const useToaster = () => {
    const context = useContext(ToasterContext);
    if (!context) {
        throw new Error("useToaster must be used within a ToastProvider");
    }
    return context;
};
