import { SelectQueryBuilder } from 'typeorm';
import { BaseFilter } from '../share/custom-base.filter';
export default class FilterBuilderService {
    buildQuery<T>(Class: {
        new (...arg: any[]): T;
    }, entityName: string, queryBuilder: SelectQueryBuilder<T>, query?: BaseFilter): SelectQueryBuilder<T>;
}
