import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    description: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void> 
    removeTransaction: (transactionId: number) => void
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps): JSX.Element{
    const[transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {...transactionInput,  createdAt: new Date()})
        const {transaction} = response.data

        setTransactions([...transactions, transaction])
    }

    const removeTransaction = (transId: number) => {
          const removeTran = [...transactions]
          const indTran = removeTran.findIndex(transaction => transaction.id === transId)
          if(indTran >= 0){
            removeTran.splice(indTran, 1)
            setTransactions(removeTran)
          } else {
            return Error
          }
      };
    

    return (
        <TransactionsContext.Provider value={ {transactions, removeTransaction, createTransaction} }>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionsContext)
    return context
}