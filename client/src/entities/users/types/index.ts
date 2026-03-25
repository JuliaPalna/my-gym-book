export interface UserStateProps {
    id: number;
    name: string;
    registrationAt: number;
}

export type UsersStateProps = (UserStateProps | undefined)[];
