import { TransactionType } from './transaction-type.model';
import { TransactionCategory } from './transaction-category.model';

export interface Transaction {
    type: TransactionType,
    category: TransactionCategory
    amount: number,
    concept: string,
    date: Date
}