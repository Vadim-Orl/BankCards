import { CardI } from '../../../entities';

export interface Result {
    companies: CardI[];
    limit: number;
    offset: number;
}
