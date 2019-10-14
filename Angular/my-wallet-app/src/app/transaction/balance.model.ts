import { Transaction } from './transaction.model';

export class Balance {
    private balance: number;
    private transactions: Transaction[]

    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    addTransaction(transaction: Transaction) {
        this.transactions.push(transaction);
    }
}