import { TransactionType } from './model/transaction-type.model';
import { TransactionCategory } from './model/transaction-category.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Balance } from './model/balance.model';
import { Transaction } from './model/transaction.model';
import { environment } from '../../environments/environment';
import { Subject }  from 'rxjs';
import { Guid } from 'guid-typescript';

@Injectable()
export class TransactionService {
    private transactionType: TransactionType[] = [];
    private transactionCategories: TransactionCategory[] = [];
    private balance:Balance;
    private transactionsUpdated = new Subject<{ balance: Balance, transactionCount: number }>();

    constructor(private http: HttpClient) {
        this.balance = new Balance();
    }

    getTransactionTypes() {
        this.transactionType.push(
            {
                code: "1",
                value: "Income",
            },
            {
                code: "2",
                value: "Expense"
            });
            
        return this.transactionType;
    }

    getTransactionCategories() {
        this.transactionCategories.push(
            {
                code: "1",
                value: "Food",
                typeId: "2"
            },
            {
                code: "2",
                value: "Transport",
                typeId: "2"
            },
            {
                code: "3",
                value: "Rent",
                typeId: "2"
            },
            {
                code: "4",
                value: "Services",
                typeId: "2"
            },
            {
                code: "5",
                value: "Credit Card",
                typeId: "2"
            },
            {
                code: "6",
                value: "Loan",
                typeId: "2"
            },
            {
                code:"7",
                value: "Miscellaneous",
                typeId: "2"
            },
            {
                code:"8",
                value: "Sallary",
                typeId: "1"
            },
            {
                code:"9",
                value: "Misc.Payment",
                typeId: "1"
            }
        );

        return this.transactionCategories;
    }

    getTransactionsUpdatedListener() {
        return this.transactionsUpdated.asObservable();
    }

    saveTransaction(transaction: Transaction) {
        this.http.post<{transactionId: string}>(environment.apiUrl + '/transaction', transaction)
            .subscribe(response => {
                this.balance.addTransaction(transaction);
                this.transactionsUpdated.next({ balance: this.balance, transactionCount: this.balance.getTransactionNumber() });
            }, error => {
                console.log(error);
            });
    }

    updateTransaction(transaction: Transaction) {
        this.http.put<{transactionCount: number}>(environment.apiUrl + '/transaction', transaction)
            .subscribe(response => {
                this.balance.updateTransaction(transaction);
                this.transactionsUpdated.next({ balance: this.balance, transactionCount: response.transactionCount});
            }, error => {
                console.log(error);
            })
    }

    deleteTransaction(id : Guid) {
        this.http.delete<{transactionCount: number}>(environment.apiUrl)
            .subscribe(response => {
                this.balance.removeTransaction(id);
                this.transactionsUpdated.next({ balance: this.balance, transactionCount: response.transactionCount});
            }, error => {
                console.log(error);
            });
    }

    getTransactions() {
        this.http.get<{ transactions: Transaction[]}>(environment.apiUrl + '/transaction')
        .subscribe(response => {
            this.balance.addTransactions(response.transactions);
            this.transactionsUpdated.next({ balance: this.balance, transactionCount: this.balance.getTransactionNumber() });
        }, error => {
            console.log(error);
        });
    }
}