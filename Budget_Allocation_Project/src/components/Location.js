import React, { useContext,useState } from 'react';

import { AppContext,initialState } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const Location = () => {
    const [locat, setloc] = useState(initialState.Location);
    const {dispatch,Location}=useContext(AppContext);
    var selecteditm="Currency "+initialState.Location;
    const handleSelect=(eventKey,event)=>{
        setloc(event.target.textContent)
         selecteditm= selecteditm  ;
       
        const item = {
            
            location: eventKey,
        };
        dispatch({
            type:'CHG_LOCATION',
            payload:item,

        })
      
    }

    // const changeLocation=(val)=>{
       
    //    )
    // //     var selectElement = document.getElementById("Location");
    // //     var selectedOption=selectElement.options[selectElement.selectedIndex].textContent;
    // //     selectElement.options[selectElement.selectedIndex].textContent="Currency ("+selectedOption+")";
    // //     // var selectedText = "Currency ("+selectedOption.textContent; var selectedOption
    // //    alert("Currency ("+selectedOption+")");
    // var selectElement = document.getElementById("Location");
    // var selectedOption=selectElement.options[selectElement.selectedIndex].textContent;
    // selectedOption="wowa"+selectedOption;
    // alert(selectedOption);
    // document.getElementById('Location').setAttribute('data-text', selectedOption);
    // }
    
 const dropdownItemStyle = {
    backgroundColor: 'transparent', // Initial background color
    transition: 'background-color 0.3s', // Smooth transition on hover
    '&:hover': {
      backgroundColor: 'red', // Change background color on hover
    },
  };

//   const buttonStyle = {
//     backgroundColor: 'blue',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: 'red',
//   };


    return(
        <div className="padding40 alert alert-secondary">
              <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" name="Location" id="Location">
      Currency ({locat})
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item className="myButton" eventKey="£" style={dropdownItemStyle}>£ Pound  </Dropdown.Item>
        <Dropdown.Item className="myButton" eventKey="₹">₹ Ruppee </Dropdown.Item>
        <Dropdown.Item className="myButton" eventKey="€">€ Euro   </Dropdown.Item>
        <Dropdown.Item className="myButton" eventKey="$">$ Dollar </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

{/* 
        <div className="padding40 alert alert-secondary"> Location
                         <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
                 <option value="£">£ Pound  </option>
                 <option value="^">₹ Ruppee </option>
                 <option value="€">€ Euro   </option>
                 <option value="$">$ Dollar </option>
             </select> 
             
        


        </div> */}
        </div>
        /* <span>Spent Budget Value: {Location}<input value={budgetValor} onChange={(event) => setBValue(event.target.value)}></input></span> */
    );
};

export default Location;