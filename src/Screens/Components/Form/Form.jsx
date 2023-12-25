import React from 'react'
import './Form.css'

function Form() {
    return (
        <>
            <div className="form-wrapper">
                <h3>Register for Free</h3>
                <p>XXX is the Marketplace where it is fun to buy and sell, are you in?</p>
                <div className="form-inputs-row">
                    <div className="input-wrapper">
                        <p className="label">Name</p>
                        <input type="text" />
                    </div>
                    <div className="input-wrapper">
                        <p className="label">Email</p>
                        <input type="email" />
                    </div>
                </div>
                <div className="form-inputs-row">
                    <div className="input-wrapper">
                        <p className="label">Password</p>
                        <input type="password" />
                    </div>
                    <div className="input-wrapper">
                        <p className="label">Retype Password</p>
                        <input type="password" />
                    </div>
                </div>
                <div className="action-wrapper">
                    <button>
                        Register
                    </button>
                </div>
            </div>
        </>
    )
}

export default Form