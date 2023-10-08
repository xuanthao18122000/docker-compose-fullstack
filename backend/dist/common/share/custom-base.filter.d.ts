import { SORT_ENUM } from '../enums';
import { IQueryBuilder } from '../interfaces';
export declare class BaseFilter {
    page: number | string;
    perPage: number;
    filter: IQueryBuilder;
    sort: SORT_ENUM;
}
