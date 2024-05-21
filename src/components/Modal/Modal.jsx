import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaShoppingCart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
import AllProduct from '../AllProduct/AllProduct'

const CardModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [products, setProducts] = useState([])

  const openModal = () => {
    setModalIsOpen(true);
    let storageProducts = localStorage.getItem('cards')

    if (storageProducts) {
      setProducts(JSON.parse(storageProducts))
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const removeInCard = (id) => {
  
    let storageProducts = localStorage.getItem('cards')
    if(storageProducts){
      storageProducts = JSON.parse(storageProducts)
      let index = storageProducts.findIndex((x) => x.id === id)
      if(index !== -1){
        storageProducts.splice(index, 1);
        setProducts(storageProducts)
        localStorage.setItem('cards', JSON.stringify(storageProducts))
      }
    }
  }

  return (
    <div className='modal'>
      <Link onClick={openModal}>
        <FaShoppingCart />
      </Link>
      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Card Modal"
        ariaHideApp={false}
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
       
        <div>{
          products.map((data) => {
            return (
              <AllProduct key={data.id} openIdCardModal = {true} data={data} removeInCard = {(id) => removeInCard(id)} />
            )
          })

        }

        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
