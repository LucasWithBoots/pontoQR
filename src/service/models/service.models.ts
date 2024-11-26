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

export interface teamModel {
    id: string;
    name: string;
    date_created: string;
    active: boolean;
}
