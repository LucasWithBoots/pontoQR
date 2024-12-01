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

export interface qrCodeModel {
    id_creator: string;
    id_team: string;
    title: string;
    description: string;
}

export interface QrCodeResponse {
    id: number;
    id_creator: number;
    id_team: number;
    payload: string;
    title: string;
    description: string;
    date_created: string;
    active: boolean;
}
