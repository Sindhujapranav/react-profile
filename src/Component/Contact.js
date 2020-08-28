import React from 'react';
import './Contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className="contacts">
        <h5>Contacts</h5>
        <h2>Contact Me @</h2>
        <div className="row">
          <div>
            <span><ion-icon name="call-outline"></ion-icon></span>
            <br />
            <p>Phone No:94865317102</p>
          </div>

          <div>
            <span><ion-icon name="logo-whatsapp"></ion-icon></span>
            <br />
            <p>Whatsapp me at 8870767102</p>
          </div>

          <div>
            <span><ion-icon name="mail-open-sharp"></ion-icon></span>
            <br />
            <p>Email:chitranivas19@gmail.com</p>
          </div>

          <div>
            <a href="https://m.facebook.com/dhujasin.rajarajan">
              <span><ion-icon name="logo-facebook"></ion-icon></span></a>
            <br />
            <p>SindhujaRajaRajan</p>
          </div>

          <div>
            <a href="https://github.com/Sindhujapranav">
              <span><ion-icon name="logo-github"></ion-icon></span>
              <br />
              <p>Sindhujapranav</p>
            </a>
          </div>
        </div>


      </div>
    );
  };
}
export default Contact;
