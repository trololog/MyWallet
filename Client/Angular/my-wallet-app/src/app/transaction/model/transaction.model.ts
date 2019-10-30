import { TransactionType } from './transaction-type.model';
import { TransactionCategory } from './transaction-category.model';
import { Guid } from 'guid-typescript';

export interface Transaction {
    id: Guid,
    type: TransactionType,
    categoryDescription: string,
    amount: number,
    concept: string,
    date: Date
}