import React from 'react';
import beefburger from '../../assets/image/beefburger.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const FoodCard = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="col-md-3">
    <div classname="product_card2 card2 mt-2 mb-2">
    
  <img classname="card-img-top img-fluid img-rounded img1" src={beefburger} alt="burger" onClick={handleShow}/>
  
  <div classname="card-body">
    <h4 classname="card-title">Beef Burger</h4>
    
  </div>

        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Beef Burger</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-5">
                <img classname="card-img-top img-fluid img-rounded img1" src={beefburger} alt="burger"/>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-8">
                        <button className='btn btn-success ms-5'>Add to Cart</button>
                        </div>
                    <div className="col-sm-4">
                    <button className='btn btn-success ms-3'>&#x9F3;200</button>
                    </div>
                    
                    </div>
                <div className="row">
                <p className='modaltext'>Made with fresh beef</p>
                </div>
                
                </div>
            </div>
        
        
        </Modal.Body>
        
      </Modal>
    </div>

    
  )
}

export default FoodCard;