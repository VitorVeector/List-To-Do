import { GlobalStyle } from "./styles/global";

import { Header } from "./Components/Header";
import { DataTable } from "./Components/DataTable";

import {useState} from 'react'

import Modal from 'react-modal'
import { TransactionsProvider } from "./hooks/useTransaction";
import {NewModal} from "./Components/NewModal"


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
     <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <DataTable/>
      <NewModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
      </TransactionsProvider>
    </>
  );  
}


