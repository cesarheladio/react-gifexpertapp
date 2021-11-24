import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  
 
    const { data:images, loading} = useFetchGifs( category )    
    return (
        <>
            <h3 className ="animate__animated animate__bounce">{category}</h3>
          { loading && <p> cargando </p>}
        <div className="card-grid">
           
                { images.map(i=>(
                <GifGridItem 
                key={i.id}
                {...i}/>)
                )}
               
           
        </div>
        </>
    )
}
