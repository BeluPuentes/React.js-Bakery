import React, { useEffect, useState} from "react";

const Teams = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = (event) => {
	  console.log(event)

      if (window.visualViewport.width <=768){
		  setIsMobile (true)
	  } else{
		setIsMobile (false)
	  }
    };

	checkMobile()
	window.addEventListener('resize', checkMobile)

	return ()=>{
		window.removeEventListener('rezise',checkMobile)
	}

   
  }, []);

  return (
    <div className="titulo">
      <h1>Sobre el equipo</h1>
	  <hr/>
	  {
		  isMobile
		  ? <h4>Estamos en Mobile</h4>
		  : <h4>Estamos en Desktop</h4>
	  }
    </div>
  );
};

export default Teams;
