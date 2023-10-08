import { HealthCheckService, HttpHealthIndicator, TypeOrmHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private healthCheckService;
    private http;
    private db;
    constructor(healthCheckService: HealthCheckService, http: HttpHealthIndicator, db: TypeOrmHealthIndicator);
    checkHealth(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
