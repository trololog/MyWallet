import { Transaction } from './transaction.model';

export class Balance {
    private total: number;
    private transactions: Transaction[]

    constructor() {
        this.total = 0;
        this.transactions = [];
    }

    addTransaction(transaction: Transaction) {
        this.transactions.push(transaction);
        this.transactions.forEach(t=> {
            this.total += t.amount;
        });
    }

    getTransactions() {
        return this.transactions;
    }

    getTotal() {
        return this.total;
    }
}