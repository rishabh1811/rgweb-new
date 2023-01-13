import React from 'react';
// import Link from 'next/link'
import Link from 'next/link'



const Logo = ({limage, dimage, simage}) => {
    return (
        <Link href="/">
            <img className="light-version-logo" src={limage} alt="logo" />
            <img className="dark-version-logo" src={dimage} alt="logo" />
            <img className="sticky-logo" src={simage} alt="logo" />
        </Link>
    )
}


export default Logo;