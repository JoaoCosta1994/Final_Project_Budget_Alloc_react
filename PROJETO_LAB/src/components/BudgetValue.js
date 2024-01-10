import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

var op;
const BudgetValue = (props) => {
   // const [budgetValor, setBValue] = useState(0);
   const { budget, BudgetValue, dispatch, Location } = useContext(AppContext);
    
   
    //const { budget, Location ,dispatch} = useContext(AppContext);
    // const { budget, updateBudget } = useMyContext(); 

     const updateBudgets = (newBudget) => {
        const item = {
            budget: parseFloat(newBudget),
        };
        // alert("teste comp"+newBudget);
        // alert("teste comp"+item.budget);
         dispatch({ type: 'UPDATE_BUDGET', payload: item });
       };
     const submitEvent = (valor) => {
      if(valor>20000)
      {
        alert("The Value cannor exceed the budget of "+Location+" 20000");
        document.getElementById("test").value=20000;
      }
      else{
        const newBudget = parseFloat(valor);
        if (!isNaN(newBudget)) {
           updateBudgets(newBudget); 
          } else {
            // Optionally handle invalid input here (e.g., show an error message)
          }
        }
        // if (!isNaN(op)) {
        //  const item = {
        //      budget: parseFloat(op),
        //  };
        //  dispatch({
        //     type: 'BUDGET_CHANGED',
        //     payload: item,
  
        // });
        //      alert(item.budget);
        //  }
            
     };          // (event) => setBValue(event.target.value)
   // alert(budgetValor);
   const inputStyle = {
    width: '155px',   // Set the width to 200 pixels
    height: '30px'    // Set the height to 30 pixels
  };

    return (
        <div className='padding_budgetvalue alert alert-primary '>
            <span>Budget Value: {Location} <input style={inputStyle} id="test" step={10} max={20000} type='number' class="test" onChange={(event) => submitEvent(event.target.value)}></input></span>
        </div>
    );
};

export default BudgetValue;
// // //export const budgetVal=budgetValor;
// // const BudgetValue = (props) => {
// //     const { budget, Location } = useContext(AppContext);
// //     const [budgetValor, setBValue] = useState(0);
// //     const handleBudgetChange = (event) => {
// //         budget=budgetValor;
// //       };
   
// //     return (
// //         <div className='alert alert-primary'>
// //             <span>Budget Value: {Location}<input type='number' value={budgetValor} onChange={handleBudgetChange}></input></span>
// //         </div>
// //     );
// // };

// // export default BudgetValue;


 //const { setBudgetValor } = useAppContext();
    // const { dispatch} = useContext(AppContext);
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