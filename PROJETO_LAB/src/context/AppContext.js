import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    let new_budget=[];
    
    switch (action.type) {
        
        case 'UPDATE_BUDGET':
            
        // state.SpentBudget<=state.InitalBudget && 
            if(state.SpentBudget<=action.payload.budget)
            state.InitalBudget=action.payload.budget;
            else
            alert("You cannot reduce the budget value lower than spending");
            //alert(state.InitalBudget+"<state<teste inside context>action> "+action.payload.budget);
            //action.payload;
            action.type = "DONE";

            return {
                ...state,
            };
        case 'UPDATE_SBUDGET':
            //alert(state.SpentBudget+"<1state<teste inside context>action> "+action.payload.sptbudgets);
         state.SpentBudget=action.payload.budget;
        //alert(state.SpentBudget+"<1state<teste inside context>action> "+action.payload.sptbudget);
        //action.payload;
        //alert("Call");
        action.type = "DONE";
        return {
            ...state,
        };
        case 'ADD_BUDGET':
            let updatedqty = false;
            
            state.expenses.map((expense)=>{
            
                if(expense.name === action.payload.name) {
                    if((state.SpentBudget+(action.payload.budget))<=state.InitalBudget)
                    {
                    expense.budget = expense.budget + action.payload.budget;
                    }
                    else
                    alert("The value cannot exceed remainig fund of:"+state.Location+" "+(state.InitalBudget-state.SpentBudget));
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

            case 'RED_BUDGET':
                state.expenses.map((expense)=>{
                  
                    if(expense.name === action.payload.name) {
                        expense.budget = expense.budget - action.payload.budget;
                    }
                    expense.budget = expense.budget < 0 ? 0: expense.budget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
                case 'MORE_TEN':
                state.expenses.map((expense)=>{
                    // alert("Remain:"+(state.InitalBudget-state.SpentBudget));
                
                    if(expense.name === action.payload.name) {
                        if((state.SpentBudget+(10))<=state.InitalBudget)
                        {
                        expense.budget = expense.budget +10;
                        }
                        else
                        alert("The value cannot exceed remainig fund of:"+state.Location+" "+(state.InitalBudget-state.SpentBudget));
                    } 
                
                    expense.budget = expense.budget < 0 ? 0: expense.budget;
                    new_expenses.push(expense);
               
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
                case 'LESS_TEN':
                state.expenses.map((expense)=>{
                  
                    if(expense.name === action.payload.name) {
                        expense.budget = expense.budget - 10;
                    }
                    expense.budget = expense.budget < 0 ? 0: expense.budget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.budget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
    case 'CHG_LOCATION':
            action.type = "DONE";
           
            state.Location = action.payload.location;
            
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads MUDAR Quantity para budget
export const initialState = {
    expenses: [
        { id: "IT Department", name: 'IT Department', budget: 0, unitprice: 500 },
        { id: "Finance Department", name: 'Finance Department', budget: 0, unitprice: 300 },
        { id: "Human Resources Department", name: 'Human Resources Department', budget: 0, unitprice: 400 },
        { id: "Sales Department", name: 'Sales Department', budget: 0, unitprice: 600 },
        { id: "Marketing Department", name: 'Marketing Department', budget: 0, unitprice: 200 },
    ],
    Location: '£',
    InitalBudget:0,
    SpentBudget:0
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
state.BudgetValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                budget:state.budget,
                expenses: state.expenses,
                BudgetValue: state.BudgetValue,
                dispatch,
                Location: state.Location,
                RemBudget: state.CartValue
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};