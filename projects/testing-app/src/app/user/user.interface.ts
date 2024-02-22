import { User } from "@auth0/auth0-angular";

export interface MyUser {
    email?: string;
    email_verified?: boolean;
    name?: string;
    nickname?: string;
    picture?: string;
    sub?: string;
    updated_at?: string
}