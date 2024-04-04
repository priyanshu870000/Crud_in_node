import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


function AddDetail() {
const [name,setname]=useState("")
const [desc,setDesc]=useState("")
const [status,setStatus]=useState("")
const navigate=useNavigate()

 async function add(e){
    e.preventDefault()
             const addDetail =await axios.post(`http://localhost:3001/add?Name=${name}&Desc=${desc}&status=${status}&email=${localStorage.getItem('email')}`)
             console.log(addDetail.data.message)
             if(addDetail.data.message==='added successfully'){
                setname("")
                setDesc("")
                setStatus("")
                navigate('/home')
             }
             else{
                alert(addDetail.data.message)
             }
 }

    return (
        <form>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter your Project name"/>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter your Project description"/>
            <input type="text" value={status} onChange={(e)=>setStatus(e.target.value)} placeholder="Enter your Project Status"/>
            <button onClick={add} >ADD</button>
        </form>
        

    )
}

export default AddDetail;