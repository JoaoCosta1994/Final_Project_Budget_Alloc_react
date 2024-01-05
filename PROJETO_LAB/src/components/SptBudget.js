import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const SptBudget = () => {
    const [budgetValor, setBValue] = useState('');
     const { expenses, Location } = useContext(AppContext);
     const totalExpenses = expenses.reduce((total, item) => {
         return (total += (item.budget));  //{totalExpenses}
     }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{totalExpenses}</span>
            {/* <input value={totalExpenses} onChange={(event) => setBValue(event.target.value)}></input></span> */}
        </div>
    );
};

export default SptBudget;