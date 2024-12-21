import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';

const SignIn = () => {

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
                        <h4>SIGN IN FORM</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-label">User Name</label>
                                <input
                                 type="text" 
                                 className="form-control" 
                                 id="email" 
                                 placeholder="Enter your username"
                                 required />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="password"
                                placeholder="Enter your password"
                                required />
                            </div>
                            <a href='f' className='sign2'><h6>Forgot Password?</h6></a>
                            <div className="row mb-3">
                            <button type="submit" className="btn btn-success col me-3">Sign In</button>
                            <button className="btn btn-success col"><Link to='/' className='sign'>Cancel</Link></button>
                            </div>
                            
                            
                            
                            
                        </form>
                       <p></p>
                        <p>Don't have an account? <button className='btn btn-success'><Link to='/reg' className='sign'>Sign Up</Link></button></p>
                        
                        
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div><br/><br/><br/>
    </div>
    </div>
  )
}

export default SignIn;