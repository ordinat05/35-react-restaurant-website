import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';


function Footer() {
	const now = new Date();
	return (
		<div className='footer'>
			🍀 This Component Footer.jsx
			<div className='socialMedia'>
				<p> &copy; {now.getFullYear()} www.burger55.com </p>
				<FaInstagram /> <BsTwitter />  <BsFacebook />
			</div>
		</div>
	)
}

export default Footer
