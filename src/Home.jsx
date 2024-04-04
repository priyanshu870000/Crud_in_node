import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Editform from "./Editform";

function Home(){

const[data,setData]=useState([])
const [Editcmt,setEditCmt]=useState("")
const navigate=useNavigate()

useEffect(()=>{
    getdata()
})

async function getdata(){
    const mydata=await axios.get(`http://localhost:3001/showdata?email=${localStorage.getItem('email')}`)
    setData(mydata.data.message)

}


async function deletedata(Id){
    const deldata=await axios.delete(`http://localhost:3001/delete?email=${localStorage.getItem('email')}&id=${Id}`)
    console.log(deldata)
    if(deldata.data.message==='Deleted successfully'){
        alert("Deleted successfully")
    }
    else{
        alert(deldata.data.message)
    }
}


async function editdata(id, name,desc,status){
    document.getElementById("Project_table").style.display="none"
    setEditCmt(()=>{
        return <Editform id={id} name={name} desc={desc} status={status}/>
    })
}

function click(){
    navigate('/AddDetail')
}
  return(
    <div className="tablectn">
        <div id="Project_table">
<table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Desc</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
   {data.map((elem)=>{
     return(
        <tr>
        <td> {elem.id}</td>
        <td> {elem.project_name}</td>
        <td>{elem.project_desc} </td>
        <td> {elem.project_status}</td>
        <td className="Action"><button onClick={()=>editdata(elem.id,elem.project_name,elem.project_desc,elem.project_status)}>EDIT</button> <button onClick={()=>deletedata(elem.id)}>DELETE</button> </td>
    </tr>

     )
   })}
    
</table>

<button onClick={click}>ADD Project</button>
</div>
{Editcmt}
</div>
  )
}

export default Home;