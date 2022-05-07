import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    origin: number;
    destiny: number;
    time: number;
    plan: string;
}

type TransactionInput = Omit<Transaction, 'id'>

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void> 
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const[transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {...transactionInput,} )
        const {transaction} = response.data

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={ {transactions, createTransaction} }>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionsContext)
    return context
}