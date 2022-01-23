import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

const EditContact = () => {
    const navigate = useNavigate();
    const {contactId} = useParams();
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        age: 0
    });

    const { firstName, lastName, age } = contact;
    const onInputChange = (e) => {
        //console.log(e.target.value);
        setContact({
            ...contact, [e.target.name]: e.target.value
        });
        //console.log(contact);
    };

    useEffect(()=>{
        console.log("Welcome to Edit page of Contact "+contactId);
        loadContact();
    },[]);

    let loadContact = async () => {
        let result = await axios.get(`http://localhost:8081/contact/${contactId}`);
        if(result.status === 200){
            setContact(result.data);
        }
        //console.log(result);
    }

    let saveContact = async (e) => {
        e.preventDefault();
        let result = await axios.put("http://localhost:8081/contact/create", contact);
        //console.log(result)
        if(result.data.status){
            navigate('/');
        }else{

        }
        
    }

    return (
        <div className='container'>
            <div className='w-75 mx-auto shadow p-5'>
                <h1>Update Contact</h1>
                <form onSubmit={e => saveContact(e)}>
                    <div className="mb-3">
                        <label  className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" value={firstName}
                            onChange={e => onInputChange(e)} placeholder="Enter First Name" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" value={lastName}
                            onChange={e => onInputChange(e)} placeholder="Enter Last Name" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Age</label>
                        <input type="number" className="form-control" id="age" name="age" min={0} value={age}
                            onChange={e => onInputChange(e)} placeholder="Enter First age" />
                    </div>
                    <button className="btn btn-primary btn-block">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact;
