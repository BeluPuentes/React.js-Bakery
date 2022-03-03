import React from 'react'; 

const Titulo=(props)=>{
    let {texto,subtitulo}=props
    
    return(
        <div>
            <h1>{texto}</h1> 
            <h2>{subtitulo}</h2>
        </div>
        
    )
}
export default Titulo 