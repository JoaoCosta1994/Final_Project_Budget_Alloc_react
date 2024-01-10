import React, { useContext, useEffect, useState } from 'react';
//import * as bd from '../components/BudgetValue'
import { AppContext,initialState  } from '../context/AppContext';

const RemBudget = () => {
    //const { initialState, Location } = useContext(AppContext);
    const { dispatch } = useContext(AppContext); 
    const [expenses, setExpenses] = useState(initialState.expenses); // Track expenses separately
    const [initialBudget, setInitialBudget] = useState(initialState.InitalBudget);

    useEffect(() => {
        // Update expenses if they change in the context
        setExpenses(initialState.expenses);
        
        // Update InitialBudget if it changes in the context
        setInitialBudget(initialState.InitalBudget);
      }, [initialState.expenses, initialState.InitalBudget]);
    
    //const { expenses } = useContext(AppContext);
    
    //  const totalExpenses = expenses.reduce((total, item) => {
    //      return (total += (item.budget));  //{totalExpenses}
    //  }, 0);
    //alert(initialState.InitalBudget + ""+totalExpenses);
    // const { expenses, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {<BudgetValue>{BudgetValue.budgetValor}</BudgetValue>
    //     return (total += (item.unitprice * item.quantity));  {totalExpenses}
    // }, 0);
    //const ol=bd.budgetVal;
    return (
        <div className='alert alert-success'>
             {/* <h2>Tracked Expenses</h2>
      <p>Initial Budget: {initialState.Location}{initialBudget}</p>
      <p>Spent Budget: {initialState.Location}{initialState.SpentBudget}</p>  */}
      <p>Remaining Budget: {initialState.Location}{initialBudget-initialState.SpentBudget} </p>
      {/* <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: {expense.budget} ({initialState.Location}{expense.unitprice})
          </li>
        ))}
      </ul> */}
            {/* <span>Remaining Budget Value: {Location}{initialState.InitalBudget}<input value={budgetValor} onChange={(event) => setBValue(event.target.value)}></input></span> */}
        </div>
    );
};

export default RemBudget;
