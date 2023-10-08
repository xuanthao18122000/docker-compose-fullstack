import { BaseEntity } from './';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    token: string;
    gender: number;
    address: string;
    avatar: string;
    status: number;
    static STATUS_USER: {
        ACTIVE: number;
        INACTIVE: number;
        LOCKED: number;
    };
    static GENDER_USER: {
        MALE: number;
        FEMALE: number;
    };
    serialize(): {
        id: number;
        email: string;
        fullName: string;
        phoneNumber: string;
        gender: number;
        status: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
