// import React, { useState } from "react";
// import Nav from "./../components/Nav";
// import {useQuery} from "@apollo/client"
// import { GET_ME } from "../utils/Queries";


// const logo = require('./../../src/imgs/avatar1.gif');




// function Profile() {
//     const user = useQuery(GET_ME)
//     const [userdata, setUserdata] = useState({username: "", password: "", favplayer: "", favteam: ""})
//     let handleSubmit = async function (event) {
//         event.preventDefault()
//         // const response = await addUser({
//         //     variables: userdata

//         // })
        
// }
    

//     let handleInput = function (event) {
//         let target = event.target
//         let name = target.name
//         let value = target.value

//         setUserdata({...userdata, [name]:value})
//         function saveprofile() {
//             console.log(target, name, value)
            
//         }
//         saveprofile()



//     }
    
//     return(


//         <div>
//         <Nav/>
        

//         <div className="accContainer">        
//             <form onSubmit={handleSubmit}>
//             <div className="group">
//                     <h1>Profile</h1>        
//                     <div className="profilepic">    
  
//                    <img className="aboutImg" src={logo} alt="avatar" />
//                    </div>        
//                 </div>
//                 <div className="group">
//                     <input type="text" placeholder="Enter Username" onChange={handleInput} name = "username" />
//                 </div>


//                 <div className="group">
//                     <input type="text" placeholder="Enter Email" onChange={handleInput} name = "email" />
//                 </div>
//                 <div className="group">
//                     <input type="text" placeholder="Enter Password" onChange={handleInput} name = "password" />                    
//                 </div>
//                 <div className="group">
//                     <button className="button" onClick={handleInput}>Save</button>
                    
//                 </div>
               

//             </form>
//         </div>

            
//         </div>
//     )
// }



// export default Profile