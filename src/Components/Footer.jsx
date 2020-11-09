import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear();
    return <>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">© {year} Copyright created by piyush shyam</div>
        </footer>
    </>
}

export default Footer;