import React from 'react';
import dessert from '../../assets/image/dessert.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const DessertCard = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="col-md-3">
    <div classname="product_card2 card2 mt-2 mb-2">
    
  <img classname="card-img-top img-fluid img-rounded img1" src={dessert} alt="burger" onClick={handleShow}/>
  
  <div classname="card-body">
    <h4 classname="card-title">Ice Cream</h4>
    
  </div>

        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ice Cream</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-5">
                <img classname="card-img-top img-fluid img-rounded img1" src={dessert} alt="burger"/>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-8">
                        <button className='btn btn-success ms-5'>Add to Cart</button>
                        </div>
                    <div className="col-sm-4">
                    <button className='btn btn-success ms-3'>&#x9F3;150</button>
                    </div>
                    
                    </div>
                <div className="row">
                <p className='modaltext'>Pure Cold Vanilla Ice Cream</p>
                </div>
                
                </div>
            </div>
        
        
        </Modal.Body>
        
      </Modal>
    </div>

    
  )
}

export default DessertCard;