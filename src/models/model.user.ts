export interface User {
    id: number;
    id_team: number;
    name: string;
    email: string;
    password: string;
    isBoss: boolean;
    date_created: string;
    active: boolean;
}
