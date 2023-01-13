import React from 'react'
import dynamic from 'next/dynamic'
export default function ErrorPage(props) {
    
   
    
    const ErrorDynamic = dynamic(() => import('../src/pages/404'), {ssr: false})

    return <ErrorDynamic />
}
