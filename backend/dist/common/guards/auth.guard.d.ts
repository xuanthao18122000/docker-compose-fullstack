import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private reflector;
    private userRepo;
    constructor(jwtService: JwtService, reflector: Reflector, userRepo: Repository<User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
