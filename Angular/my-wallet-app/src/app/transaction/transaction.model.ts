import { TransactionType } from './transaction-type.model';

export interface Transaction {
    type: TransactionType,
    amount: number,
    concept: string
}