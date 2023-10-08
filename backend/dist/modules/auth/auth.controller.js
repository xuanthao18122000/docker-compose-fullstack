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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const send_response_1 = require("../../common/response/send-response");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const entities_1 = require("../../database/entities");
const auth_dto_1 = require("./dto/auth.dto");
const public_decorator_1 = require("../../common/decorators/public.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(body) {
        const data = await this.authService.signIn(body);
        return send_response_1.SendResponse.success(data, 'Sign in user successful!');
    }
    async signUp(body) {
        const user = await this.authService.signUp(body);
        return send_response_1.SendResponse.success(user.serialize(), 'Sign up user successful!');
    }
    async signOut(user) {
        this.authService.signOut(user);
        return send_response_1.SendResponse.success([], 'Sign out user successful!');
    }
    async getProfile(user) {
        return send_response_1.SendResponse.success(user.serialize(), 'Get profile user successful!');
    }
    async updateProfile(body, user) {
        const updatedUser = await this.authService.updateProfile(body, user);
        return send_response_1.SendResponse.success(updatedUser.serialize(), 'Update profile user successful!');
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('sign-out'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UpdateProfileDto, entities_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('2. Auth'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map