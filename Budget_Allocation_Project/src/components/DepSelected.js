import React, { useContext, useState } from 'react';
import { AppContext,initialState } from '../context/AppContext';

const DepSelected = (props) => {
    const { dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [action, setAction] = useState('');
    const dep = ["IT", "HR", "MR"];
    
    const submitEvent = () => {

        const item = {
            name: name,
            budget: parseFloat(budget),
        };
     

        if(action === "Reduce") {
            dispatch({
                type: 'RED_BUDGET',
                payload: item,
            });
        } else {
                dispatch({
                    type: 'ADD_BUDGET',
                    payload: item,
                });
            }
    };

    return (
        <div>
            {/* {initialState.expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - Quantity: {expense.quantity}, Unit Price: {initialState.Location}{expense.unitprice}
          </li>
        ))} */}
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department: </label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        {initialState.expenses.map((expense) => (
                          <option value={expense.id} name={expense.id}> {expense.name}</option>      

                        ))}
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                  <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>  
                  <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px',fontSize:'20px'}}> {initialState.Location}</span>
                   
                    <input
                        required='required'
                        type='text'
                        id='cost'
                        
                        value={budget}
                        style={{size: 10}}
                        onChange={(event) =>{ 
                          const userInput = event.target.value;
                          const sanitizedInput = userInput.replace(/[^0-9]/g, ''); 
                          setBudget(sanitizedInput)}}>
                        </input>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default DepSelected;




// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const ItemSelected = (props) => {
//     const { dispatch} = useContext(AppContext);

//     const [name, setName] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [action, setAction] = useState('');
    

//     const submitEvent = () => {

//         const item = {
//             name: name,
//             quantity: parseInt(quantity),
//         };

//         if(action === "Reduce") {
//             dispatch({
//                 type: 'RED_QUANTITY',
//                 payload: item,
//             });
//         } else {
//                 dispatch({
//                     type: 'ADD_QUANTITY',
//                     payload: item,
//                 });
//             }
//     };

//     return (
//         <div>
//             <div className='row'>

//             <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
//                     <div className="input-group-prepend">
//                 <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
//                         <option defaultValue>Choose...</option>
//                         <option value="Shirt" name="Shirt"> Shirt</option>
//                 <option value="Dress" name="Dress">Dress</option>
//                 <option value="Jeans" name="Jeans">Jeans</option>
//                 <option value="Dinner set" name="Dinner set">Dinner set</option>
//                 <option value="Bags" name="Bags">Bags</option>
//                   </select>

//                     <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
//                 <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
//                 </div>
//                   <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
//                   <option defaultValue value="Add" name="Add">Add</option>
//                 <option value="Reduce" name="Reduce">Reduce</option>
//                   </select>  
//                   <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px'}}></span>

//                     <input
//                         required='required'
//                         type='number'
//                         id='cost'
//                         value={quantity}
//                         style={{size: 10}}
//                         onChange={(event) => setQuantity(event.target.value)}>
//                         </input>

//                     <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
//                         Save
//                     </button>
//                 </div>
//                 </div>

//         </div>
//     );
// };

// export default ItemSelected;
