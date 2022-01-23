import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link,NavLink } from 'react-router-dom';

const Home = () => {

    const [contact, setContact] = useState([]);

    useEffect(() => {
        console.log("Welcome to Home Page");
        loadContact();
    }, []);

    let loadContact = async () => {
        
        let result = await axios.get("http://localhost:8081/contact")
            .then((response)=>{
                return response;
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
            console.log(result)
        if (result && result.data.status) {
            setContact(result.data.response);
        } else {

        }
        //setContact(result.data.response);
    }

    let deleteContact = async (id) => {

       let result = await axios.post(`http://localhost:8081/contact/delete/${id}`)
            .then((response)=>{
                return response;
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            });
        if (result.status === 200 && result.data.status) {
            console.log("contact details deleted successfully");
            loadContact();
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1>Home Page </h1>
                </div>
                <div className='col-lg-6 text-right'>
                    <NavLink className='btn btn-outline-primary mt-2' 
                    exact to="/contact/new">Add Contact</NavLink>
                </div>
            </div>
            
            <table className="table border shadow table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((user, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{(user.firstName) ? user.firstName : "-"}</td>
                                <td>{(user.lastName) ? user.lastName : "-"}</td>
                                <td>{(user.createdOn) ? user.modifiedOn : "-"}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`/contact/view/${user.contactId}`}><i className="fa fa-eye"></i></Link>
                                    <Link className="btn btn-primary mr-2" to={`/contact/edit/${user.contactId}`}><i className="fa fa-edit"></i></Link>
                                    <button className="btn btn-danger mr-2" onClick={() => deleteContact(user.contactId)}><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home