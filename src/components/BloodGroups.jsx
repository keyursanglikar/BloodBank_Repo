// import React, { useState } from "react";
// import './BloodGroups.css';

// const BloodBank =()=>{

//     //All blood Groups
//     const bloodGroups={
//         "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
//     "O+": ["O+", "A+", "B+", "AB+"],
//     "A-": ["A-", "A+", "AB-", "AB+"],
//     "A+": ["A+", "AB+"],
//     "B-": ["B-", "B+", "AB-", "AB+"],
//     "B+": ["B+", "AB+"],
//     "AB-": ["AB-", "AB+"],
//     "AB+": ["AB+"],
//     };


// //State to hold the Selected blood group and compaitible groups
// const[selectedGroup,setSelectedGroup]=useState(null);
// const [compaitibleGroups, setCompatibleGroups]= useState([]);

// //function to handle blood group click
// const handlesBloodGroupClick=(group)=>{
//     setSelectedGroup(group);
//     setCompatibleGroups(bloodGroups[group]);
// };

// return (
   


//     <div className="blood-bank-container">
//         <h3 className="blood-bank-header">Select Blood Group</h3>
//         <div className="blood-group-buttons">
//             {Object.keys(bloodGroups).map((group)=>(
//                 <button
//                 key={group}
//                 onClick={()=>handlesBloodGroupClick(group)}
//                     className="blood-group-button"
//                     >{group}
//                     </button>
//             )
//             )}
//         </div>

//         {/*Display selected blood group and its compatible groups*/}
//         {selectedGroup && (
//             <div className="blood-group-selected">
//             <h4>
//                 Selected Blood Group: <span>{selectedGroup}</span>
//             </h4>
//             <p>Compatible Blood Groups:</p>
//             <div className="compatible-groups-container">
//                 {compaitibleGroups.map((group, index)=>(
//                     <span key={index} className="compatible-group">
//                         {group}
//                     </span>
//                 ))}
//             </div>
//             </div>
//         )}
//     </div>
// );
// };
// export default BloodBank;



import React, { useState } from "react";
import './BloodGroups.css'; // Ensure your CSS file is correctly linked

const BloodBank = () => {
    // All blood groups and their compatible groups
    const bloodGroups = {
        "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
        "O+": ["O+", "A+", "B+", "AB+"],
        "A-": ["A-", "A+", "AB-", "AB+"],
        "A+": ["A+", "AB+"],
        "B-": ["B-", "B+", "AB-", "AB+"],
        "B+": ["B+", "AB+"],
        "AB-": ["AB-", "AB+"],
        "AB+": ["AB+"],
    };

    // State to hold the selected blood group and compatible groups
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [compatibleGroups, setCompatibleGroups] = useState([]);

    // Function to handle blood group click
    const handleBloodGroupClick = (group) => {
        setSelectedGroup(group);
        setCompatibleGroups(bloodGroups[group]);
    };

    return (
        <div className="blood-bank-container">
            <h3 className="blood-bank-header">Select Blood Group</h3>
            <div className="blood-group-buttons">
                {Object.keys(bloodGroups).map((group) => (
                    <button
                        key={group}
                        onClick={() => handleBloodGroupClick(group)}
                        className="blood-group-button"
                    >
                        {group}
                    </button>
                ))}
            </div>

            {/* Display selected blood group and its compatible groups */}
            {selectedGroup && (
                <div className="blood-group-selected">
                    <h4>
                        Selected Blood Group: <span>{selectedGroup}</span>
                    </h4>
                   

                    {/* Additional Info on Blood Donation */}
                    <div className="donation-info">
                       
                        <div className="donation-group">
                            <h5>You Can Give Blood To:</h5>
                            <span>{compatibleGroups.join(', ')}</span>
                        </div>
                        <div className="donation-group">
                            <h5>You Can Take Blood From:</h5>
                            <span>
                                {Object.keys(bloodGroups).filter(g => bloodGroups[g].includes(selectedGroup)).join(', ')}
                            </span>
                        </div>

                        
                    </div>
                      

                  
                    
                </div>
                
            )}
        </div>
    );
};

export default BloodBank;
