import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='footerWrap'></div>
            <div className='footerContainer'>
                <footer>
                    <div class="custom-shape-divider-top-1673951145">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <ul>
                        <li><Link className='footerLink' to="/">Home</Link></li>
                        <li><Link className='footerLink' to="/about">About</Link></li>
                        <li><Link className='footerLink' to="/signin">Sign in</Link></li>
                        <li><Link className='footerLink' to="/signup">Sign up</Link></li>
                    </ul>
                    <h5 className='copyright'>Copyright© {currentYear} Business Card App By Eden Maimon</h5>
                </footer>
            </div>
            <Outlet />
        </>
    )
}
