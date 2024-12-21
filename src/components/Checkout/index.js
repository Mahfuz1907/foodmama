import React from 'react'

const Checkout = () => {
  return (
    <div classname="product_card2 card2 mt-2 ">
            <div className="card-header">
                <h5 className='text-success text-bold'>Location</h5>
                <h6 className='text-success'>Talaimari, Rajshahi</h6>
            </div><hr />
            <div classname="card-body">
                <h4 className='text-success text-bold'>Order Summary</h4>
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td className='check2'>&#2547;650</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td className='check2'>&#2547;120</td>
                    </tr>
                    <tr>
                        <td className='text-success text-bold'>Total Cost</td>
                        <td className='check2 text-success text-bold'>&#2547;770</td>
                    </tr>
                </table>
            </div><hr />

            <div className="card-footer">
                <button className='btn btn-success check3'>Checkout</button>
            </div>
        </div>
  )
}

export default Checkout;