import React, { useContext,useState } from 'react';
//import * as bd from '../components/BudgetValue'
import { AppContext,initialState  } from '../context/AppContext';
import {BudgetValue as budval} from './BudgetValue';
const BudgetValue = () => {
    const [budgetValor, setBValue] = useState('');
    //const { expenses } = useContext(AppContext);
    const { expenses, Location } = useContext(AppContext);
     const totalExpenses = expenses.reduce((total, item) => {
         return (total += (item.budget));  //{totalExpenses}
     }, 0);
    //alert(initialState.InitalBudget + ""+totalExpenses);
    // const { expenses, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.unitprice * item.quantity));  {totalExpenses}
    // }, 0);
    //const ol=bd.budgetVal;
    return (
        <div className='alert alert-success'>
            <span>Remaining Budget Value: {Location}{initialState.InitalBudget}<input value={budgetValor} onChange={(event) => setBValue(event.target.value)}></input></span>
        </div>
    );
};

export default BudgetValue;
