import { User } from 'src/database/entities';
import { Repository } from 'typeorm';
import { SignInDto, SignUpDto, UpdateProfileDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    signIn(body: SignInDto): Promise<{
        user: {
            id: number;
            email: string;
            fullName: string;
            phoneNumber: string;
            gender: number;
            status: number;
            createdAt: Date;
            updatedAt: Date;
        };
        token: string;
        expiresIn: string;
    }>;
    signUp(body: SignUpDto): Promise<User>;
    signOut(user: User): Promise<User>;
    updateProfile(body: UpdateProfileDto, user: User): Promise<User>;
    signToken(id: number, email: string): Promise<{
        token: string;
        expiresIn: string;
    }>;
}
