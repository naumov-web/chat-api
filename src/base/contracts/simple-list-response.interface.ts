import { SimpleResponseInterface } from './simple-response.interface';

export interface SimpleListResponseInterface<T> extends SimpleResponseInterface {
    count: number;

    items: T[];
}
