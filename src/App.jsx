// import React from 'react';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Contact from './components/Contact';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/gallery" element={<Gallery />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
export default App;
