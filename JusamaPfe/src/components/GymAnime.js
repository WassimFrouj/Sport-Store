import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './AnimeStyle.css'


function GymAnime() {
    const LineB = useRef(null);
    const textB = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        LineB.current.classList.add('lineonB')
        textB.current.classList.add('titleonB');
        },5)


        return () => {

        }
    },[])

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./gym.json')
    })
  }, [])

 
 
  
  return (
      
    <div className='headingB'>
        
    <div className = 'lineB' ref={LineB}>
    </div>
    <h1 className ='titleB' ref={textB}>GYM</h1>
    <div className="containerB" ref={container}></div>
</div>
 
    
  );
}

export default GymAnime;