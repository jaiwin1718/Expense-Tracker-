
import { useState } from 'react';
import './App.css';

import Expenses from './component/expenses/expenses';
import NewExpense from './component/expenses/new_expenses';
//import ExpenseItem from './Expense_item com/expenseitem';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'AIRPODES',
    amount: 94.12,
    date: new Date(2021, 4, 14),
  },
  { id: 'e2', title: 'LAPTOP', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'MOBILE',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenes]=useState(DUMMY_DATA)
  const onAddExpense=(newValue)=>{
    console.log(newValue)
    setExpenes((prev)=>[newValue,...prev])
  }
  
  return (
    <div className="App">
      <h1>WELCOME TO EXPENESE TRACKER</h1>
      <NewExpense onAddExpense={onAddExpense} />
     <Expenses expenses={expenses}/>
      </div>
  );
}

export default App;
