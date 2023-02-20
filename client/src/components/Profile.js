import React, { useState } from "react";
import Nav from "./../components/Nav";
import { Link } from "react-router-dom";
import {useMutation} from "@apollo/client"
import {ADD_USER} from "./../utils/Mutation"




function Profile() {
    const [addUser, {error, data}] = useMutation(ADD_USER)
    const [userdata, setUserdata] = useState({username: "", email: "", password: ""

    })
    let handleSubmit = async function (event) {
        event.preventDefault()
        const response = await addUser({
            variables: userdata

        })
        console.log(response)
if(response.data != undefined && response.data.addUser != undefined && response.data.addUser.email != undefined){
    alert("Account Created")
}
    }

    let handleInput = function (event) {
        let target = event.target
        let name = target.name
        let value = target.value

        setUserdata({...userdata, [name]:value})
       



    }
    return(


        <div>
        <Nav/>
        

        <div className="accContainer">        
            <form onSubmit={handleSubmit}>
            <div className="group">
                    <h1>Profile</h1>
                </div>
                <div className="group">
                    <input type="text" placeholder="Enter Username" onChange={handleInput} name = "username" />
                </div>


                <div className="group">
                    <input type="text" placeholder="Enter Email" onChange={handleInput} name = "email" />
                </div>
                <div className="group">
                    <input type="text" placeholder="Enter Password" onChange={handleInput} name = "password" />                    
                </div>
                <div className="group">
                    <button className="button">Save</button>
                </div>
               

            </form>
        </div>

            
        </div>
    )
}



export default Profile