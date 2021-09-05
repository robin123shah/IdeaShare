import { Modal, Button } from "react-bootstrap";
import React,{useState} from 'react';



export const AddBucket = (props) => {

    const [Bname,setname] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        
        if(!Bname){
            alert("Name cannot be blank.");
        }
        else{
            props.addbucket(Bname);
            props.BhandleClose();
            setname("")
        }
    }

    return (
        <Modal animation={false} show={props.showBModal} onHide={() => props.BhandleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>New Bucket</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <div className="mb-3">
                    <label htmlFor="Bucket" className="form-label">Enter Name</label>
                    <input type="name" value = {Bname} onChange={(e)=>setname(e.target.value)} className="form-control" id="name"></input>
                </div>
                <button type="submit" className="btn btn-sm btn-success" onClick= {submit}>Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    )
}
