import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
        </Alert>
    )
}

const FormTwo = () => {

    const form = useRef();
    const [ result, showresult ] = useState(false);
    const [loading, setLoading] = useState(false)
    const url = "https://asia-south1-pakap-9e920.cloudfunctions.net/expressApp";

    const sendEmail = (e) => {

        e.preventDefault();
        setLoading(true)
        
        const name = e.currentTarget.name.value
        const email = e.currentTarget.email.value
        const number = e.currentTarget.phone.value
        const message = e.currentTarget.message.value
    
        const payload = {
          name,
          email,
          number,
          message,
          time: new Date().toLocaleString(), 
        }

        console.log(payload);
        
            axios({
              method: "post",
              url: `${url}/form`,
              data: payload
            })
            .then(res => {
              console.log(res)
              form.current.reset()
              showresult(true)
              setLoading(false)
            })
            .catch(err => console.log("axios error :", err))  
        
        



      };

        setTimeout(() => {
            showresult(false);
        }, 10000);


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="email" required />
        </div>
        <div className="form-group">
            <label>Phone</label>
            <input type="tel" className="form-control" name="phone" required />
        </div>
        <div className="form-group mb--40">
            <label>How can we help you?</label>
            <textarea className="form-control" name="message" rows="4"></textarea>
            
        </div>
        <div className="form-group">
            <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn"> {!loading ? "Get Free Quote" : "Wait..." } </button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
        </div>

    </form>
    )
}

export default FormTwo;