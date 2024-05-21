import React from 'react'
import './AllProduct.css'
import { FaShoppingCart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
const AllProduct = ({ data, ...props }) => {
    const buy = () => {
        let allProducts = localStorage.getItem('cards')
        if (allProducts) {
            allProducts = JSON.parse(allProducts)
        } else {
            allProducts = []
        }
        let index = allProducts.findIndex((x) => x.id === data.id)
        if (index === -1) {
            allProducts.push({
                ...data,
                count: 1
            })
        } else {
            allProducts[index].count++
        }
        localStorage.setItem('cards', JSON.stringify(allProducts))
    }
    
    const removeInCard =  () => {
        props.removeInCard(data.id)
    }

    
    return (
        <div className='All'>
            <img className='img' src={data.image} />

            <div>
                <h3>{data.title}</h3>
                <h5>{data.category}</h5>
                <h4>Amd {data.price}</h4>

                <button className='btn' onClick={buy}>BUY</button>
                <CiSquareMinus />
                <CiSquarePlus />
                {props.openIdCardModal ? (
                    <>
                    <button className='btn' onClick={removeInCard}> DELETE</button>
                    
                  
                    <button></button>
                    <p>{data.count}</p>
                    </>
               
                ) : null}
            </div>


        </div>
    )
}

export default AllProduct