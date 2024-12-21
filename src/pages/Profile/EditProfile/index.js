import React from 'react'
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div className='page container'>
        <div className="container-fixed bg-success"><br/>
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card text-success">
                    <div className="card-header text-center">
                        <h4>EDIT YOUR PROFILE</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-label">User Name</label>
                                <input
                                 type="text"
                                 name='username' 
                                 className="form-control"  
                                 placeholder="Enter your username"
                                  />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input 
                                type="email"
                                name='email' 
                                className="form-control" 
                                placeholder="Enter your email"
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

export default EditProfile;