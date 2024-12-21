import React from 'react'
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <div className='page container'>
        <div className="container-fixed bg-success"><br/>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card text-success">
                    <div className="card-header text-center">
                        <h4>Change Your Password</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="old_password" className="form-label">Old Password</label>
                                <input
                                 type="password"
                                 name='old_password' 
                                 className="form-control"  
                                 placeholder="Enter your old password"
                                  />
                            </div>
                            <div className="mb-3">
                                <label for="new_password1" className="form-label">New Password</label>
                                <input 
                                type="password"
                                name='new_password1' 
                                className="form-control"  
                                placeholder="Enter your new password"
                                 />
                            </div>
                            <div className="mb-3">
                                <label for="new_password2" className="form-label">Confirm New Password</label>
                                <input 
                                type="password"
                                name='new_password2' 
                                className="form-control"  
                                placeholder="Confirm your new password"
                                 />
                            </div>
                           
                            <div className="row mb-3">
                            <button type="submit" className="btn btn-success col me-3">Submit</button>
                            <button className="btn btn-success col"><Link to='/profile' className='sign'>Cancel</Link></button>
                            </div>
                            
                            
                            
                            
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div><br/><br/><br/>
    </div>
    </div>
  )
}

export default ChangePassword;