import { useEffect, useState } from 'react';
import './Modal.css';
const Modal=()=>{

    const [showModal, setShowModal]= useState (true)

    const closeModal =() => {
        setShowModal(false)
    }

    const stopProp =(e) =>{
        e.stopPropagation()
    }

    useEffect(()=>{
        const timer= setTimeout(()=>{
            closeModal()
        },5000)

        return ()=>{
            window.clearTimeout(timer)
        }

    },[])


    return (
        <>
            {
                showModal &&
                <div className="modal-container" onClick={closeModal}>
                <div className="modal-m" onClick={stopProp}>
                    <h2>Bienvenidos a Bakery!!!</h2> 
                    <p>No se podra resistir </p>
                    <hr/>
                    <button onClick={closeModal}k>Click para cerrarme</button>
    
                </div>
    
            </div>
            }
        
        </>



       
    )

}
export default Modal