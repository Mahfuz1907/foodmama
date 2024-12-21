import React from 'react';
import achar from '../../assets/image/achar.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ItemCard3 = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="col-md-3 mb-5">
    <div classname="product_card2 card2 mt-2 ">
    
  <img classname="card-img-top img-fluid img-rounded img1" src={achar} alt="burger" onClick={handleShow}/>
  
  <div classname="card-body">
    <h4 classname="card-title">Beef Achar Gosht</h4>
    
  </div>

        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Beef Achar Gosht</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-md-5">
                <img classname="card-img-top img-fluid img-rounded img1" src={achar} alt="burger"/>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-8">
                        <button className='btn btn-success ms-5'>Add to Cart</button>
                        </div>
                    <div className="col-sm-4">
                    <button className='btn btn-success ms-3'>&#x9F3;300</button>
                    </div>
                    
                    </div>
                <div className="row">
                <p className='modaltext'>Masala Beef Achar Gosht Pakistani Style</p>
                </div>
                
                </div>
            </div>
        
        
        </Modal.Body>
        
      </Modal>
    </div>

    
  )
}

export default ItemCard3;