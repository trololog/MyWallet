import { TransactionType } from './transaction-type.model';

export class TransactionService {
    private transactionType: TransactionType[] = [];

    getTransactionTypes() {
        this.transactionType.push(
            {
                code: "1",
                value: "Income",
            },
            {
                code: "2",
                value: "Outcome"
            });
            
        return this.transactionType;
    }
}