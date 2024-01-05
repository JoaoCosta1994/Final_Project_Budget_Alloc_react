import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { IoAddCircleOutline } from "react-icons/io5";
import * as icon from "react-icons/io5";

const ExpenseItem = (props) => {
    //const {dispatch,Location} =useContext(AppContext);
    
    // const handleDeleteItem=()=>{
    //     const item={
    //         name:props.name,
    //     };
    //     dispatch({
    //         type:'DELETE_ITEM',
    //         payload:item,
    //     });
    // };
    // const handleMoreTen=()=>{
    //     const item={
    //         name:props.name,
    //     };
    //     dispatch({
    //         type:'MORE_TEN',
    //         payload:item,
    //     });
    // };
    // const handleLessTen=()=>{
    //     const item={
    //         name:props.name,
    //     };
    //     dispatch({
    //         type:'LESS_TEN',
    //         payload:item,
    //     });
    // };
    alert(props.name);
    return(
                <tr>
                    <th>{props.name}</th>
                    <th>{Location}{parseFloat(props.budget)}</th>
                    {/* <th><icon.IoAddCircle size="2.2em" color="green" onClick={handleMoreTen} ></icon.IoAddCircle></th> */}
                    {/* <th><icon.IoRemoveCircle size="2.2em" color="red" onClick={handleLessTen} ></icon.IoRemoveCircle></th> */}
                    {/* <th><FaTimesCircle size="2.2em" color="red" onClick={handleDeleteItem} ></FaTimesCircle></th> */}
                    {/* <th>{Location}{parseInt(props.unitprice)}</th> */}
                    {/* <th>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</th> */}
                </tr>
            

    );
};

export default ExpenseItem;
