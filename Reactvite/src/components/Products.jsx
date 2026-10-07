import React, {useEffect } from 'react'


function Products(){

    
        const[data, setData] = React.useState([]);

        useEffect(()=>{
       async function getData(){
            try{
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setData(data);

            }catch(error){
                console.log("Error:", error);
                throw error;
            }
            finally{
                console.log("all done")
            }

        }
        getData();

    },[]);

    return (
        <div>
         <h1>Products</h1>
        {JSON.stringify(data)}
        {/*<h2>{data}</h2>*/}
        </div>
       
    ) 
    }

export default Products