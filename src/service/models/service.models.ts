export interface userCreationModel {
    name: string;
    email: string;
    password: string;
    isBoss: boolean;
}

export interface userLoginModel {
    email: string;
    password: string;
}
