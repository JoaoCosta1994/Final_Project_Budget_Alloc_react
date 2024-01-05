import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const budgetValor=0;
//export const budgetVal=budgetValor;
const BudgetValue = (props) => {
    //const { setBudgetValor } = useAppContext();
    // const { dispatch} = useContext(AppContext);
    const [budgetValor, setBValue] = useState(0);
   // const [action, setAction] = useState('');
   //alert(parseInt(budgetValor));
//    const budget = {
//     //name: name,
//     budget: parseFloat(budgetValor),
// }   ;

//            dispatch({
//                type: 'BUDGET_CHANGED',
//                payload: budget,
//    });

    // const { expenses, Location } = useContext(AppContext);
    //  const totalExpenses = expenses.reduce((total, item) => {
    //      return (total += (item.unitprice * item.quantity)); // {totalExpenses}
    //  }, 0);
      
// outra tentativa de  metodo
//const { InitalBudget, Location } = useContext(AppContext);
//const { expenses, Location } = useContext(AppContext);
alert(props.name);
    return (
        <div className='alert alert-primary'>
            <span>Budget Value: {Location}<input type='number' value={budgetValor} onChange={(event) => setBValue(event.target.value)}></input></span>
        </div>
    );
};

export default BudgetValue;
