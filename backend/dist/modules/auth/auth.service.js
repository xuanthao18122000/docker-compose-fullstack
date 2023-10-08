"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../database/entities");
const typeorm_2 = require("typeorm");
const error_payload_dto_1 = require("../../common/response/error-payload.dto");
const status_code_config_1 = require("../../configs/status-code.config");
const jwt_1 = require("@nestjs/jwt");
const auth_utils_1 = require("../../common/utils/auth.utils");
let AuthService = class AuthService {
    constructor(userRepo, jwtService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }
    async signIn(body) {
        const { email, password } = body;
        const user = await this.userRepo.findOneBy({ email });
        if (!user) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.NOT_FOUND, status_code_config_1.default['USER_NOT_FOUND'].code, status_code_config_1.default['USER_NOT_FOUND'].type);
        }
        if (user.status !== entities_1.User.STATUS_USER.ACTIVE) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.FORBIDDEN, status_code_config_1.default['USER_INACTIVE'].code, status_code_config_1.default['USER_INACTIVE'].type);
        }
        const isAuth = (0, auth_utils_1.comparePasswords)(password, user.password);
        if (!isAuth) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.NOT_FOUND, status_code_config_1.default['WRONG_PASSWORD'].code, status_code_config_1.default['WRONG_PASSWORD'].type);
        }
        const jwt = await this.signToken(user.id, user.email);
        user.token = jwt.token;
        const updatedUser = await this.userRepo.save(user);
        return {
            user: updatedUser.serialize(),
            token: jwt.token,
            expiresIn: jwt.expiresIn,
        };
    }
    async signUp(body) {
        const { email, password, fullName, phoneNumber, gender } = body;
        const userExisted = await this.userRepo.findOneBy({ email });
        if (userExisted) {
            throw new error_payload_dto_1.ErrorException(common_1.HttpStatus.CONFLICT, status_code_config_1.default['USER_EXISTED'].code, status_code_config_1.default['USER_EXISTED'].type);
        }
        const user = this.userRepo.create({
            email,
            password: (0, auth_utils_1.hashPassword)(password),
            status: entities_1.User.STATUS_USER.ACTIVE,
            fullName,
            phoneNumber,
            gender,
        });
        return await this.userRepo.save(user);
    }
    async signOut(user) {
        user.token = null;
        return await this.userRepo.save(user);
    }
    async updateProfile(body, user) {
        const { fullName, phoneNumber, gender } = body;
        if (fullName)
            user.fullName = fullName;
        if (phoneNumber)
            user.phoneNumber = phoneNumber;
        if (gender)
            user.gender = gender;
        return await this.userRepo.save(user);
    }
    async signToken(id, email) {
        const payload = {
            id: id,
            email,
        };
        const token = await this.jwtService.signAsync(payload, {
            expiresIn: process.env.JWT_EXPIRES_IN,
            secret: process.env.JWT_SECRET,
        });
        return {
            token,
            expiresIn: process.env.JWT_EXPIRES_IN,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map