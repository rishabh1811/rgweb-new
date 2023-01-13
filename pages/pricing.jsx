import dynamic from 'next/dynamic'
import React from 'react'


export default function PortfolioPage(props) {
    
   const PricingDynamic = dynamic(() => import('../src/pages/PricingTable'), {ssr: false})

  return <PricingDynamic />
}