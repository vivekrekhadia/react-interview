import React from 'react'
import Company from './Company'
import './Home.css'

const Home = () => {
    return (
        <div className='Home-container'>
           <h1 style={{fontSize:'42px'}}>Home</h1> 
           <Company />
        </div>
    )
}

export default Home