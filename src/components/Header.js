import React, { useCallback, useEffect, useState } from 'react'

const Header = () => {
  const [clientPosition,setClientPosition]=useState(0);
  const [opacity,setOpacity]=useState(1);



  const detectClientPosition=useCallback(e=>{

      const htmlElement=document.documentElement;
      const percentageOfScreenHeightScroll=htmlElement.scrollTop/htmlElement.scrollHeight
      setClientPosition(percentageOfScreenHeightScroll)


  },[clientPosition])

  useEffect(()=>{
    detectClientPosition();
    // const htmlElement=document.documentElement;
    // const percentageOfScreenHeightScroll=htmlElement.scrollTop/htmlElement.scrollHeight
    // setClientPosition(percentageOfScreenHeightScroll)
    window.addEventListener("scroll",detectClientPosition)


    const headerElement=document.querySelector(".header")

    const observer=new IntersectionObserver(entries=>{

    
     
        setOpacity(entries[0].intersectionRatio
          )
    })
    observer.observe(headerElement);

    return()=>{
      window.removeEventListener("scroll",  detectClientPosition);
    }
  },[ detectClientPosition])


  function scaleIndex(){
    if(opacity>0.4){
      return opacity
    }else{
      return 0.4
    }
  }

  return (
    <header   className='header'  style={{opacity:opacity,transform:`scale(${scaleIndex()})`}}>
        <div className='header__container'>
        <span className='header__name'>CHEN</span>
        <span className='header__lastName'>Weiling</span>
        </div>
    </header>
  )
}

export default Header