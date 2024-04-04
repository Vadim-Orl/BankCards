import { CardItem } from '../../../entities/CardItem/model/types';

export interface Result {
    companies: CardItem[];
    limit: number;
    offset: number;
}
