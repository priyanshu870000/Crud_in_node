import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Editform(props) {

    const [name, setName] = useState(props.name)
    const [desc, setDesc] = useState(props.desc)
    const [status, setStatus] = useState(props.status)


    const naviagte = useNavigate()
    async function editdata() {
        console.log("hello")
        const editreq = await axios.put(`http://localhost:3001/edit?name=${name}&desc=${desc}&status=${status}&id=${props.id}&email=${localStorage.getItem("email")}`)
        if (editreq.data.message === "Updated successfully") {
            document.getElementById("Project_table").style.display = "block"
            document.getElementById("EDITFORM").style.display = "none"

        }
        else{
            alert(editreq.data.message)
        }

    }

    return (
        <div id="EDITFORM">
        <form>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
            <input type="text" onChange={(e) => setStatus(e.target.value)} value={status} />
            <button onClick={editdata}>Edit</button>
        </form>
        </div>
    )
}

export default Editform;