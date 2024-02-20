import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptycart, removeFromCart } from '../redux/slice/Cartslice'
import { Navigate } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector(state => state.cartreducer)
  const dispatch =useDispatch()
  const [price,setPrice]= useState(0)

  const totalprice=()=>{
    if(cartArray.length>0)
    {
  
      setPrice(cartArray.reduce((a,b)=>a+b.price,0))
      }
      else{
      setPrice(0)
    }
  }

  const handlecart=()=>{
    dispatch(emptycart())
    alert("thank you for shopping with us")
    Navigate('/')
  }
  useEffect(()=>{
    totalprice()
  },[cartArray] )
  return (
    <div>
      <div className="cartcontainer container-lg" style={{ marginTop: '100px' }}>
        <h1>Shopping Cart</h1>
        {
          cartArray.length > 0 ?

            <div className='row'>
              <div className="col-lg-8 d-flex">
                <div className="table shadow rounded">
                  <Table>
                    <thead>

                      <th>#</th>
                      <th>product</th>
                      <th>product image</th>
                      <th>price</th>
                      <th>action</th>
                    </thead>
                    <tbody>
                      {
                        cartArray.map((products, index) =>
                        (<tr key={index}>
                          <td>{index + 1}</td>
                          <td>{products.title}</td>
                          <td><img src={products.thumbnail} width={'100px'} height={'100px'} className='img' alt="" /></td>
                          <td>{products.price}</td>
                          <td><Button className='btn btn-light' onClick={()=>dispatch(removeFromCart(products.id))} ><i className='fa-solid fa-trash text-danger'></i></Button></td>
                        </tr>


                        ))
                      }
                    </tbody>
                  </Table>
                </div>
                <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="border mt-3 rounded shadow p-2 w-100">
              <h1 className='text-primary'>Cart Summary</h1>
              <h4>Total Products: <span>{cartArray.length}</span> </h4>
              <h4>Total: <span className='text-danger fw-bolder fs-2'></span>{price}</h4>
              <div className="d-grid">
                <button className='btn btn-success mt-5 rounded'>Check Out</button>
              </div>
            </div>
          </div>
              </div>
            </div> : <p>Cart is Empty</p>
        }

      </div>


    </div>
  )
}

export default Cart