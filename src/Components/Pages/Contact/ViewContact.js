import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const ViewContact = () => {
    const navigate = useNavigate();
    const {contactId} = useParams();
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        age: 0,
        modifiedOn:""
    });

    const { firstName, lastName, age,modifiedOn } = contact;
   
    useEffect(()=>{
        console.log("Welcome to View page of Contact "+contactId);
        loadContact();
    },[]);

    let loadContact = async () => {
        let result = await axios.get(`http://localhost:8081/contact/${contactId}`);
        if(result.status === 200){
            setContact(result.data);
        }
        //console.log(result);
    }


    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h1>Contact Details</h1>
                
                    <div className="mb-3">
                        <label  className="form-label">First Name</label>
                        <label  className="form-label">{firstName}</label>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Last Name</label>
                        <label  className="form-label">{lastName}</label>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Age</label>
                        <label  className="form-label">{age}</label>
                    </div>
                    
            </div>
        </div>
    )
}

export default ViewContact;
