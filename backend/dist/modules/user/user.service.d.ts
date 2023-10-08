import { User } from 'src/database/entities';
import { Repository } from 'typeorm';
import FilterBuilderService from 'src/common/filter-builder/filter-builder.service';
import { ListUserDto } from './dto/user.dto';
import { FindAllResponse } from 'src/common/types/common.type';
export declare class UserService {
    private userRepo;
    private _filterBuilder;
    constructor(userRepo: Repository<User>, _filterBuilder: FilterBuilderService);
    getAll(query: ListUserDto): Promise<FindAllResponse<User>>;
    getOne(id: number): Promise<User | any>;
    create(body: any): Promise<User>;
    hashPassword(password: string): any;
    update(id: number, body: any): Promise<User>;
    findUserByPk(id: number): Promise<User>;
}
