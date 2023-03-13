import React, { useState } from "react";
import './Contact.css';

function Contact() {
    return (
        <div className="main-container p-5">
            <div className="container">
                <form class="row g-3">
                    <h4 className="text text-center">Join with me</h4>
                    <h6 className="text text-center">Let's Talk</h6>
                    <div class="col-md-7">
                        <label for="validationServer01" class="form-label text">First & Last name</label>
                        <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Vimukthi Gunasekara " required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="col-md-7">
                        <label for="validationServer02" class="form-label text"> Email Address</label>
                        <input type="text" class="form-control is-valid" id="validationServer02" placeholder="abcdef123@gmail.com" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">Message</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary bgBtn" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;