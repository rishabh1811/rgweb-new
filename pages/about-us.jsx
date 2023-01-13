import React from 'react'
import dynamic from 'next/dynamic'
export default function AboutPage(props) {
    
   
    
    const AboutDynamic = dynamic(() => import('../src/pages/AboutUs'), {ssr: false})

    return <AboutDynamic />
}
