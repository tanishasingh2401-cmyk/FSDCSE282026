import React, { useState } from 'react'
import Cat from '../images/Cat.png'

function StateHandling() {
    const[count,setCount] = useState(100);
    const[red,setRed] = useState(0);
    const[green,setGreen] = useState(0);
    const[blue,setBlue] = useState(0);
    const[catHeight,setCatHeight] = useState(100);
    const[catWidth,setCatWidth] = useState(100);
    const[catAngle, setCatAngle] = useState(30);
    function changeBgcolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);

    }

    function enhanceHeight(){
        setCatHeight(catHeight+10);
    }

    function enhanceWidth(){
        setCatWidth(catWidth+10);
    }

    function imageRotate(){
        setCatAngle(catAngle+30);
    }
    
  return (
    <div>

        <h2>Change Background Color</h2>
        <div style={{background:`rgb(${red},${green},${blue})`,
                    border:'2px solid black',
                    height:'300px',width:'300px', 
                    marginLeft:'450px',display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'}}>
                        
                    <img src={Cat} height={catHeight} width={100} style={{transform:`rotate(${catAngle}deg)`}}></img>

        </div>

        <h2>
            Color code:{red},{green},{blue}
            <h2>
                Height:{catHeight}
            </h2>
        </h2>
        
        <div>
            <button onClick={changeBgcolor}>Change Bgcolor</button>
            <button onClick={enhanceHeight}>Enhance Height</button>
            <button onClick={enhanceWidth}>Enhance Width</button>
            <button onClick={imageRotate}>ImageRotate</button>
        </div>
    </div >
    
    
  )
}

export default StateHandling