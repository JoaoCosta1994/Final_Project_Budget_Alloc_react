import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remainings = (props) => {
    // const [budgetValor, setBValue] = useState('');
    // const { expenses, Location } = useContext(AppContext);
    //  const totalExpenses = expenses.reduce((total, item) => {
    //      return (total += (item.budget));  //{totalExpenses}
    //  }, 0);
    const { budget, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.budget));  //{totalExpenses}
    // }, 0);
    const totalExpenses = budget;
    return (
      <span>{totalExpenses}</span>
    );
};

export default Remainings;