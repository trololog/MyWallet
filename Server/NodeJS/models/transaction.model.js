export default function buildTransaction() {
    return function makeTransaction({ 
        id, 
        type, 
        category, 
        amount, 
        concept, 
        date 
    } = {}) {
        if(!type)
            throw new Error("The transaction must have a type");
        
        if(!category)
            throw new Error("The transaction must have a category");
        
        if(isNaN(amount))
            throw new Error("The transaction amount is an invalid number");

        if(!concept)
            throw new Error("The transaction must have a concept");

        const _date;
        try {
            _date = new Date(date);
        } catch {
            throw new Error("The transaction date is invalid");
        }

        return Object.freeze({
            getId: () => id,
            
        });
    }
}