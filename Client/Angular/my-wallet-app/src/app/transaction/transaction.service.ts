import { TransactionType } from './model/transaction-type.model';
import { TransactionCategory } from './model/transaction-category.model';

export class TransactionService {
    private transactionType: TransactionType[] = [];
    private transactionCategories: TransactionCategory[] = [];

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
}