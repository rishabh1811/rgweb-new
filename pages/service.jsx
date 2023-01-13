import React from 'react'
import dynamic from 'next/dynamic'
// import ServiceOne from '../src/pages/ServiceOne'


export default function ServicePage(props) {
    
const MyDynamicPage = dynamic(import('../src/pages/ServiceOne'), { ssr: false })

    return <MyDynamicPage /> 
    
}
