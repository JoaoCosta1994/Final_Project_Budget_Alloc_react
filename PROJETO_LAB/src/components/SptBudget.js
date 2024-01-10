

// // const SptBudget = () => {
// //     const [budgetValor, setBValue] = useState('');
// //      const { expenses, Location,dispatch } = useContext(AppContext);
// //      const updateBudgets = (sptBudget) => {
// //         if(!isNaN(totalExpenses))
// //         {
// //         const item = {
// //             sptbudget: parseFloat(sptBudget),
// //         };
// //          alert("teste comp"+sptBudget);
// //         // alert("teste comp"+item.budget);
// //          dispatch({ type: 'UPDATE_SBUDGET', payload: item });
         
// //        }
// //     };
// //       totalExpenses = expenses.reduce((total, item) => {
// //         updateBudgets(total += (item.budget));
// //          return (total);  //{totalExpenses}
// //      }, 0);



    // const [initialBudget, setInitialBudget] = useState(initialState.InitalBudget);
    // const updateBudgets = (totalExpenses) => {
    //   if (!isNaN(totalExpenses)) {
    //     const item = {
    //       sptbudgets: parseFloat(totalExpenses),
    //     };
    //     alert("teste comp" + totalExpenses);
    //     dispatch({ type: 'UPDATE_SBUDGET', payload: item });
    //   }
    // };

   // const totalExpenses = expenses.reduce((total, item) => total + parseFloat(item.budget || 0), 0);
 import React, { useContext,useEffect,useState } from 'react';
 import { AppContext,initialState   } from '../context/AppContext';
// import Remainings from './Remainings';
var i=0;
const SptBudget = () => {
    // const [budgetValor, setBValue] = useState('');
     const {expenses, Location, dispatch } = useContext(AppContext);
     var totalExpenses = useState(0);
    // const [SpentBudget, setSpentBudget] = useState(initialState.SpentBudget);
   i++;
    //alert("ado "+i);
    if(i==2)
    {
        
    var totalExpenses = expenses.reduce((total, item) => {
     
             return (total += (item.budget)); 
         }, 0);
         expenses.SpentBudget = totalExpenses;
        // alert("wow: "+ initialState.SpentBudget);
         if(initialState.SpentBudget!==totalExpenses)
         { //alert(totalExpenses+"/"+initialState.SpentBudget);
         const updateBudgets = (newBudget) => {
            const item = {
                budget: parseFloat(newBudget),
            };
             //alert("teste comp");
             dispatch({ type: 'UPDATE_SBUDGET', payload: item });
           };
           updateBudgets(totalExpenses);
        }
         i=0;
    }
   
//    const totalExpenses = expenses.reduce((total, item) => {
     
//      return (total += (item.budget)); 
//  }, 0);
//  expenses.SpentBudget = totalExpenses;

//    const updateBudgets = (newBudget) => {
//     const item = {
//         budget:11,// parseFloat(newBudget),
//     };
//      alert("teste comp");
   
//      dispatch({ type: 'UPDATE_SBUDGET', payload: item });
//    };
   
//       useEffect(() => {
 
//     updateBudgets(1);
//           setSpentBudget(initialState.SpentBudget);
//         }, [expenses]); 
      
    return (
       
        <div className='alert alert-primary'>
            <p>Spent Budget: {initialState.Location}{totalExpenses}</p>
        
        {/* <p>Spent Budget: {initialState.Location}{SpentBudget}</p>
             {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: {expense.budget} ({initialState.Location}{expense.unitprice})
          </li>
        ))}
            <span>Spent so far: {Location}{totalExpenses}{SpentBudget} <br></br>{expenses.SpentBudget}</span>
            <input value={totalExpenses} onChange={(event) => setBValue(event.target.value)}></input></span> */}
        </div>
    );
};

export default SptBudget;