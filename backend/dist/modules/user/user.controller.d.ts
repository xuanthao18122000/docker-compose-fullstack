/// <reference types="express" />
import { UserService } from './user.service';
import { CreateUserDto, ListUserDto, UpdateUserDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(query: ListUserDto): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    getOneUser(id: number): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    createUser(body: CreateUserDto): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
    updateUser(id: number, body: UpdateUserDto): Promise<import("express").Response<any, Record<string, any>> | {
        code: number;
        success: boolean;
        data: any;
        msg: string;
    }>;
}
