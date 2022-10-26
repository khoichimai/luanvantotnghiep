import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import './sign.css'
const Signin = () => {

    const [logdata,setData] = useState({
        email:"",
        password:""
    });

    console.log(logdata);

    const adddata = (e) => {
        const {name,value} = e.target;
        //console.log(e.target.value);

        setData(()=>{
            return{
            ...logdata,
            [name]:value

            }
        })
    }

  return (
    <div>
        <section>
            <div className="sign_container">
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={adddata} value={logdata.email} name="email"  id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={adddata} value={logdata.password} name="password" placeholder="At least 6 char" id="password"/>
                        </div>
                        <button className="signin_btn">Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>chưa có tài khoản?</p>
                    <button><Link to="/register">create your account</Link></button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Signin