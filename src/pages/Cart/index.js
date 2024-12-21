import React from 'react';
import kabuli from '../../assets/image/kabuli.png'
import kacchi from '../../assets/image/kacchi.png'
import { MdDelete } from "react-icons/md";
import Checkout from '../../components/Checkout';
import CartBanner from '../../components/CartBanner';

const Cart = () => {
  return (
    <div className='section container page'>
     <div className="row">
        <div className="col-md-3">
            <CartBanner />
        </div>
        <div className="col-md-6 rest1">
        <h2 className='hd md-0'>Your Cart</h2>
        <p>There are <span className='text-success text-bold'>2</span> items in your cart</p>
        <div className="row">
            <div className="col-md-12 pe-5">
                <div className="table-responsive">
                <table className="table">
<thead>
<tr>
    <th scope="col">Product</th>
    <th scope="col">Unit price</th>
    <th scope="col">Quantity</th>
    <th scope="col">Subtotal</th>
    <th scope="col">Remove</th>
</tr>
</thead>
<tbody>

    <tr>
        <td>
           
                <div className="d-flex align-items-center cartImageWrapper">
                    <div className="imgWrapper">
                        <img src={kabuli} alt='kabuli' className="w-100" />
                    </div>
                    <div className="info px-3">
                        <h6>Kabuli Pulao</h6>
                    </div>
                </div>
            
        </td>
        <td>&#2547;350</td>
        <td><input type="number" /></td>
        <td>&#2547;350</td>
        <td className='delete'><MdDelete /></td>
    </tr>
    <tr>
        <td>
           
                <div className="d-flex align-items-center cartImageWrapper">
                    <div className="imgWrapper">
                        <img src={kacchi} alt='kabuli' className="w-100" />
                    </div>
                    <div className="info px-3">
                        <h6>Mutton Kacchi</h6>
                    </div>
                </div>
            
        </td>
        <td>&#2547;300</td>
        <td><input type="number" /></td>
        <td>&#2547;600</td>
        <td className='delete'><MdDelete /></td>
    </tr>

</tbody>
</table>



                </div>
            </div>

            
            
        </div>
        </div>
        <div className="col-md-3 rest1">
            <Checkout />
        </div>
     </div>

    
</div>
  )
}

export default Cart;