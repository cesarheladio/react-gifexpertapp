import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['one punch', 'samuri x', 'dragon Ball']
    const [categories, setCategories] = useState(['dragon Ball'])
    // const handleadd = () =>{
    //     setCategories(cats=> [...cats,'hola'])
    //     //setCategories([...categories, 'hola'])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories ={setCategories}/>
            <hr/>
           
            <ol>
                {
                    categories.map( category=>
                        <GifGrid
                        key={category}
                         category ={category}/>)
                }
            </ol>
        </>
    )
}
