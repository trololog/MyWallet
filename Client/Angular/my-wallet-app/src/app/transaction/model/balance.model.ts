import { Transaction } from './transaction.model';
import { Guid } from 'guid-typescript';

export class Balance {
    private total: number;
    private transactions: Transaction[]

    constructor() {
        this.total = 0;
        this.transactions = [];
    }

    addTransaction(transaction: Transaction) {
        this.total = 0;
        this.transactions.push(transaction);
        this.calculateTotal();
    }

    addTransactions(transactions: Transaction[]) {
        this.total = 0;
        this.transactions.push(...transactions);
        this.calculateTotal();
    }

    removeTransaction(id: string) {
        const index = this.transactions.findIndex(t=> t.id === id);

        this.transactions.splice(index,1);
        this.calculateTotal();
    }

    updateTransaction(transaction: Transaction) {
        let t = this.transactions.find(t => t.id === transaction.id);
        t = { ... transaction };
        this.calculateTotal();
    }

    calculateTotal() {
        this.transactions.forEach(t=> {
            this.total += t.amount;
        });
    }

    getTransactions() {
        return this.transactions;
    }

    getTransactionNumber() {
        return this.transactions.length;
    }

    getTotal() {
        return this.total;
    }
}