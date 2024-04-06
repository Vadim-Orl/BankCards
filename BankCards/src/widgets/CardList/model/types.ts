import { CardItem } from '../../../entities/CardInfo/model/types';

export interface Result {
    companies: CardItem[];
    limit: number;
    offset: number;
}
