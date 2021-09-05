import { Modal, Button } from "react-bootstrap";
import React,{useState} from 'react';



export const AddHighlight = (props) => {

    const [name,setname] = useState("");
    const [highlight,sethigh] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        
        if(!name || !highlight){
            alert("Name or Highlight cannot be blank.");
        }
        else{
            props.addhigh(name,highlight);
            props.handleClose();
            setname("")
            sethigh("")
        }
    }

    return (
        <Modal animation={false} show={props.showModal} onHide={() => props.handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>New Highlight</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">Enter Name</label>
                    <input type="name" value = {name} onChange={(e)=>setname(e.target.value)} className="form-control" id="name"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Highlight..</label>
                    <textarea className="form-control" value = {highlight} onChange={(e)=>sethigh(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-success" onClick= {submit}>Submit</button>
                
                </form>
            </Modal.Body>

        </Modal>
    )
}
