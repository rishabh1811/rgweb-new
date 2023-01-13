import React from 'react'
import dynamic from 'next/dynamic'
export default function ContactPage(props) {
    
   
    
    const ContactDynamic = dynamic(() => import('../src/pages/Contact'), {ssr: false})

    return <ContactDynamic />
}
