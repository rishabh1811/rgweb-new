import dynamic from 'next/dynamic'
import React from 'react'


export default function PortfolioPage(props) {
    
    const Portfolio = dynamic(import("../src/pages/ProjectGridTwo") , {ssr : false})

    return (
        <>
           <Portfolio /> 
        </>
    )
}

