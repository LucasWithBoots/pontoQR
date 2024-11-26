export interface ModelInputText {
    title: string;
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    isSecure: boolean;
}
