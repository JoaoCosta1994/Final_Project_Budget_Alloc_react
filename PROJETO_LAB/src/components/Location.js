import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch}=useContext(AppContext);

    const changeLocation=(val)=>{
        dispatch({
            type:'CHG_LOCATION',
            payload:val,

        })
    }

    return(
        <div className="padding40 alert alert-secondary"> Location
                         <select name="Location" id="Location" onChange={event=>changeLocation(event.target.val)}>
                 <option value="£">Uk(£)</option>
                 <option value="^">India(^)</option>
                 <option value="€">Uk(€)</option>
                 <option value="CAD">Canada(CAD)</option>
             </select> 
        </div>
        /* <span>Spent Budget Value: {Location}<input value={budgetValor} onChange={(event) => setBValue(event.target.value)}></input></span> */
    );
};

export default Location;