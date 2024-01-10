import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import * as Components from './components';
// import BudgetValue from './components/BudgetValue';
// import ExpenseList from './components/ExpenseList';
// import DepSelected from './components/DepSelected';
// import Location from './components/Location';
// import RemBudget from './components/RemBudget';
// import SptBudget from './components/SptBudget';

const App=() =>{
  return (
    <AppProvider>
    <div className="container">
      <h1 className="mt-3">Budget Allocation App</h1>
      <div className="row mt-3">
        <div className="col-sm test">
          <Components.BudgetValue/>
        </div>
        <div className="col-sm">
          <Components.RemBudget/>
        </div>
        <div className="col-sm">
          <Components.SptBudget/>
        </div>
        <div className="col-sm">
          <Components.Location/>
        </div>
       {/* <div className="col-sm">
          <Components.MyComponent/>
        </div>  */}
      </div>
      <h3 className="mt-3">Budget Allocation in each department </h3>
      <div className="row mt-3">
        <div className="col-sm">
          <Components.ExpenseList/>
        </div>
      </div>
      <h3 className="mt-3">Add Budget to Departments</h3>
      <div className="row mt-3">
      <div className="col-sm">
        <Components.DepSelected/>

      </div>
      </div>
      </div>
  
    </AppProvider>
  );
}

export default App;
