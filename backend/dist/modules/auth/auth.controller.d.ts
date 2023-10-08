/// <reference types="express" />
import { AuthService } from './auth.service';
import { User } from 'src/database/entities';
import { SignInDto, SignUpDto, UpdateProfileDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: SignInDto): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    signUp(body: SignUpDto): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    signOut(user: User): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    getProfile(user: User): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    updateProfile(body: UpdateProfileDto, user: User): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
}
