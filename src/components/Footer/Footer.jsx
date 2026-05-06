import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import FooterLogo from '../../../src/assets/DigiTools-Light.png';
import { RiTwitterXLine } from 'react-icons/ri';
const Footer = () => {
    return (

        <footer className='bg-[#101727]'>
            <div className='top-footer w-9/12 mx-auto'>
                <div className='parent-top-items grid grid-cols-7 pt-30 pb-20 gap-10'>
                    <div className="company-info col-span-2">
                        <img src={FooterLogo} alt="Company Logo" />
                        <p className='text-base text-[#FFFFFF] opacity-80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="products">
                        <h1 className='text-[#FFFFFF] font-bold'>Product</h1>
                        <ul className='list-none text-[#FFFFFF] opacity-80'>
                            <a href=""><li>Features</li></a>
                            <a href=""><li>Pricing</li></a>
                            <a href=""><li>Templates</li></a>
                            <a href=""><li>Integrations</li></a>
                            
                        </ul>
                    </div>
                    <div className="company">
                        <h1 className='text-[#FFFFFF] font-bold'>Company</h1>
                        <ul className='list-none text-[#FFFFFF] opacity-80'>
                            <a href=""><li>About</li></a>
                            <a href=""><li>Blog</li></a>
                            <a href=""><li>Careers</li></a>
                            <a href=""><li>Press</li></a>
                        </ul>
                    </div>
                    <div className="resources">
                        <h1 className='text-[#FFFFFF] font-bold'>Resources</h1>  
                        <ul className='list-none text-[#FFFFFF] opacity-80'>
                            <a href=""><li>Documentation</li></a>
                            <a href=""><li>Help Center</li></a>
                            <a href=""><li>Community</li></a>
                            <a href=""><li>Contact</li></a>
                        </ul> 
                    </div>
                    <div className="social-links col-span-2">
                        <h1 className='text-[#FFFFFF] font-bold'>Social Links</h1>
                        <ul className='list-none flex gap-2'>
                            <li className='w-7 h-7 rounded-full bg-[#FFFFFF] p-1.5 text-black flex items-center'> <a href=""><FaInstagram></FaInstagram></a> </li>
                            <li className='w-7 h-7 rounded-full bg-[#FFFFFF] p-1.5 text-black flex items-center'> <a href=""><FaFacebookSquare></FaFacebookSquare></a> </li>
                            <li className='w-7 h-7 rounded-full bg-[#FFFFFF] p-1.5 text-black flex items-center'> <a href=""><RiTwitterXLine></RiTwitterXLine></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-footer w-9/12 mx-auto border-t border-[FFFFFF]'>
                
                <div className="parent-bottom-items flex justify-between space-y-7.5">
                    <div className="copy-right text-[#FFFFFF] opacity-60">© 2026 Digitools. All rights reserved.</div>
                    <div className="footer-links">
                        <ul className='list-none text-[#FFFFFF] opacity-60 flex gap-2'>
                            <a href=""><li>Privacy Policy</li></a>
                            <a href=""><li>Termos of Service</li></a>
                            <a href=""><li>Cookies</li></a>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;