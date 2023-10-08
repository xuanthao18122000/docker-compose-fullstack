import { ExceptionFilter, ArgumentsHost, BadRequestException, ForbiddenException, UnauthorizedException } from '@nestjs/common';
export declare class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: BadRequestException | ForbiddenException | UnauthorizedException, host: ArgumentsHost): void;
}
