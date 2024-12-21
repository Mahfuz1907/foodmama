import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

const SignUp = () => {

    const context = useContext(MyContext);
    
        useEffect(()=>{
            context.setIsHeaderFooterShow(false);
            return()=>{
              context.setIsHeaderFooterShow(true);
            };
      });


  return (
    <div className='container-fixed'>
        <div className="container-fixed bg-success"><br/>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card text-success">
                    <div className="card-header text-center"> 
                        <h4>SIGN UP FORM</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="name" className="form-label">User Name</label>
                                <input 
                                type="text"
                                name='username' 
                                className="form-control"  
                                placeholder="Enter your username"
                                required 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input 
                                type="email"
                                name='email' 
                                className="form-control"  
                                placeholder="Enter your email"
                                required 
                                />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input 
                                type="password"
                                name='password' 
                                className="form-control"  
                                placeholder="Enter your password"
                                required 
                                />
                            </div>
                            
                            <button type="submit" className="btn btn-success w-100 mb-3">Sign Up</button>
                        </form>
                        <p>Already have an account? <button className='btn btn-success'><Link to='/log' className='sign'>Sign In</Link></button></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div><br/><br/><br/>
    </div>
    </div>
  )
}

export default SignUp;