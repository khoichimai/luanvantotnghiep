import React,{useState} from 'react'
import './sign.css'
import {Link} from 'react-router-dom'
const Signup = () => {

    const [updatedata,setUpdatedata] = useState({
        fname:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    });
   console.log(updatedata);

    const adddata = (e) => {
        const{name,value} = e.target;
        //console.log(e.target.value);

        setUpdatedata(() => {
            return {
                ...updatedata,
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
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">họ và tên</label>
                            <input type="text" onChange={adddata} value={updatedata.fname} name="fname"  id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email"> Your Email</label>
                            <input type="email" onChange={adddata} 
                            value={updatedata.email} name="email"  id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="phone">số điện thoại</label>
                            <input type="number" onChange={adddata} 
                            value={updatedata.phone} name="phone"  id="phone" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={adddata} 
                            value={updatedata.password} name="password" placeholder="At least 6 char" id="password"/>
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordag">Password again</label>
                            <input type="password" onChange={adddata} 
                            value={updatedata.cpassword} name="cpassword"  id="passwordag" />
                        </div>
                        <button type="submit" className="signin_btn">Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>đã có tài khoản?</p>
                    <button><Link to="/login">Sign in</Link></button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Signup