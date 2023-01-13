import React from 'react';
import Link from 'next/link'


const FooterTwo = () => {

    return (
        <footer className="footer-area footer-dark">
            <div className="container">
                <div className="footer-bottom">
                <div className="row">
                    <div className="col-md-6">
                    <div className="footer-copyright">
                        <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="footer-bottom-link">
                        <ul className="list-unstyled">
                            <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
                            <li><Link href={"/terms-use"}>Terms of Use</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo;