import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
				{/* Brand Info */}
				<div>
					<h2 className="text-2xl font-bold">Travel Guider</h2>
					<p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, ad!</p>
				</div>

				{/* Quick Links */}
				<div>
					<h2 className="text-xl font-semibold">Quick Links</h2>
					<div className="mt-4 flex flex-col space-y-2">
						<Link to="/">Home</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/about">About</Link>
					</div>
				</div>

				{/* Social Links and Subscribe */}
				<div>
					<h3 className="text-xl font-semibold">Follow Us</h3>
					<div className="flex space-x-4 mt-4">
						<FaFacebookF />
						<FaInstagram />
						<FaTwitter />
						<FaYoutube />
					</div>
					<form action="" className="mt-4">
						<input type="email" placeholder="Enter Your Email" className="p-2 rounded-l-full text-black" />
						<button className="bg-blue-500 p-2 rounded-r-full text-white">Subscribe</button>
					</form>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center mt-8 pt-5">
				<p>All Rights Reserved By Kazi Shafiul Azam</p>
				<div className="mt-2">
					<Link to="/privacy-policy" className="mr-4">
						Privacy Policy
					</Link>
					<Link to="/terms-of-service">Terms Of Service</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
