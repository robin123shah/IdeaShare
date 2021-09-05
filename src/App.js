
import './App.css';
import Header from './MyComponents/Header';
import { AddHighlight } from './MyComponents/AddHighlight';
import { Highlights } from './MyComponents/Highlights';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddBucket } from './MyComponents/AddBucket';
import { Edit } from './MyComponents/Edit';


function App() {
  let inithigh;
  let initbucket;
  let h;
  const Current = {
    sid:0,
    name:"",
    Highlight:""
  }


  if (localStorage.getItem("high") === null) {
    inithigh = [];
  }
  else {
    inithigh = JSON.parse(localStorage.getItem("high"));
  }

  if (localStorage.getItem("bucket") === null) {
    initbucket = [];
  }
  else {
    initbucket = JSON.parse(localStorage.getItem("bucket"));
  }



  const onDelete = (h) => {
    console.log("I am ondelete", h);

    sethigh(high.filter((e) => {
      return e !== h;
    }));
    localStorage.setItem("high", JSON.stringify(high));
  };
 

    const onEdit = (h) => {
    console.log("I am onEdit", h);
    handleEShow();
    sethigh(high.filter((e) => {
      return e !== h;
    }));
    localStorage.setItem("high", JSON.stringify(high));
  };


  const [showEdit,setEShow] = useState(false);
  const handleEShow = () => setEShow(true);
  const handleEClose = () => setEShow(false);

  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showBModal, setBShow] = useState(false);
  const BhandleShow = () => setBShow(true);
  const BhandleClose = () => setBShow(false);


  const addhigh = (name, highlight) => {
    console.log("I am adding a highlight", name, highlight);
    let sno;
    if (high.length === 0) {
      sno = 0;
    }
    else {
      sno = high[high.length - 1].sno + 1;
    }
    const myhigh = {
      sno: sno,
      name: name,
      highlight: highlight
    };
    sethigh([...high, myhigh]);
    console.log(myhigh);
  }
  const [high, sethigh] = useState(inithigh);
  useEffect(() => {
    localStorage.setItem("high", JSON.stringify(high));
  }, [high])

  const addbucket = (Bname) => {
    console.log("I am adding a new bucket", Bname);
    let Bsno;
    if (bucket.length === 0) {
      Bsno = 0;
    }
    else {
      Bsno = bucket[bucket.length - 1].Bsno + 1;
    }
    const mybucket = {
      Bsno: Bsno,
      Bname: Bname
    };
    setbucket([...bucket, mybucket]);
    console.log(mybucket);
  }
  const [bucket, setbucket] = useState(initbucket);
  useEffect(() => {
    localStorage.setItem("bucket", JSON.stringify(bucket));
  }, [bucket])


  return (
    <>
      <Header bucket={bucket} handleShow={handleShow} BhandleShow={BhandleShow} />
      <Highlights high={high} onDelete={onDelete} onEdit={onEdit} />
      <Footer />
      <AddHighlight handleClose={handleClose} showModal={showModal} addhigh={addhigh} />
      <AddBucket BhandleClose={BhandleClose} showBModal={showBModal} addbucket={addbucket} />
      <Edit h= {h} handleEClose={handleEClose} showEdit={showEdit} addhigh={addhigh}/>
    </>
  );
}

export default App;
