import { TransactionType } from './transaction-type.model';
import { TransactionCategory } from './transaction-category.model';

export interface Transaction {
    type: TransactionType,
    categoryDescription: string,
    amount: number,
    concept: string,
    date: Date
}