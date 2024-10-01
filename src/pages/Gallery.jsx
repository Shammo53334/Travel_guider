const images = [
	'/Images/gal1.jpg',
	'/Images/gal2.jpg',
	'/Images/gal3.png',
	'/Images/gal4.jpg',
	'/Images/gal5.webp',
	'/Images/gal6.webp',
	//joto khushi toto img needed add korte parbo
];

const Gallery = () => {
	return (
		<>
			<div className="relative h-sreen bg-cover bg-center h-96" style={{backgroundImage: "url('/Images/hero.png')"}}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justified-center">
					<h4 className="text-4xl md:text-6xl font-bold text-white my-auto">Gallery</h4>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12">
				<div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
					{images.map((image, index) => (
						<div
							key={index}
							className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
						>
							<img src={image} alt="" className="w-full h-full object-cover" />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Gallery;
