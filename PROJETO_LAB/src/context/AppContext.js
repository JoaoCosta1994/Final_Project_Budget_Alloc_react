import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    let new_budget=[];
    
    switch (action.type) {
        
        case 'BUDGET_CHANGED':
            
            alert("teste "+state.InitalBudget);
            alert("teste "+action.payload.budget);
            alert("teste "+action.type);
            state.InitalBudget=action.payload.budget;
            //action.payload;
            action.type = "DONE";

            return {
                ...state,
            };
        case 'ADD_BUDGET':
            let updatedqty = false;
            
            state.expenses.map((expense)=>{
            
                if(expense.name === action.payload.name) {
                   
                    expense.budget = expense.budget + action.payload.budget;
                  
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
                  
                    if(expense.name === action.payload.name) {
                        expense.budget = expense.budget +10;
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
            state.Location = action.payload;
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
    InitalBudget:200
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice*item.quantity));
    }, 0);
state.BudgetValue = totalExpenses;

    return (
        <AppContext.Provider
            value={{
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