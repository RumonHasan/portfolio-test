import React, {useState, useEffect, useRef} from 'react';
import { useGlobalNavContext } from './NavbarContext';
import {FaTimes} from 'react-icons/fa';
import Alert from './Alert';
import { dataBaseContact } from './Firebase';

const ContactForm = () =>{ 
        // states for the contact form 
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        const [alert, setAlert] = useState({show:false, type:'', msg:''}); // alert object and set to default false 

        const { closeContactForm, isContactForm } = useGlobalNavContext(); // global nav context 

        const handleSubmit = (e) =>{
            e.preventDefault(); // to prevent default loading 
            if((name && email && message) === ''){ 
                showAlert(true, 'danger', 'Empty field'); 
            }else if(!email.includes('@')){
                showAlert(true, 'danger', 'Invalid Email')
            }else{ // Adding contact details to the firebase data storage 
                dataBaseContact.collection('contacts').add( // adding the the data to the firebase collection 
                    {// passing the data to the firestore 
                        name:name,
                        email: email,
                        message: message,
                    }
                ).then(()=>{
                    showAlert(true, 'success', 'Successful');
                    console.log(alert);
                }).then(()=>{
                    closeContactForm();
                }).catch(()=>{
                    showAlert(true, 'danger', 'Failed to Send')
                })
                setName('');
                setEmail('');
                setMessage('');
            }
        }

        // main alert function 
        const showAlert = (show = false, type = '', msg = '' ) =>{
            setAlert({show, type, msg});
        }

        // reset function
        const handleReset = ()=>{ // handlereset erases the contents of tge mistyped messages 
            setName('');
            setEmail('');
            setMessage('');
        }
    
    return(
        <React.Fragment>
            <div className={`${isContactForm ? 'form-container show' : 'form-container'}`}>
                <div className='contact-headers'>
                    <button className="contact-close-btn" onClick={closeContactForm}><FaTimes/></button>
                </div>
                    <form className='form' onSubmit={handleSubmit}>
                        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
                        <input type="text" className='input-box' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <input type="text"  className='input-box' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        <textarea className='input-box textarea' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type='submit' className='contact-btn'>Submit</button>
                        <button type='reset' className='reset-btn' onClick={handleReset}>Reset</button>
                    </form>
            </div>
        </React.Fragment>
    )
}
export default ContactForm;
