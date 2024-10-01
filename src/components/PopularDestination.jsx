const destinations = [
	{
		image: '/Images/gal1.jpg',
		title: 'Paris,France',
		description: 'The city of Light draws millions of visitors every day.',
	},
	{
		image: '/Images/gal2.jpg',
		title: 'Paris,France',
		description: 'The city of Light draws millions of visitors every day.',
	},
	{
		image: '/Images/gal3.png',
		title: 'Paris,France',
		description: 'The city of Light draws millions of visitors every day.',
	},
	{
		image: '/Images/gal4.jpg',
		title: 'Paris,France',
		description: 'The city of Light draws millions of visitors every day.',
	},
];

const PopularDestination = () => {
	return (
		<>
			<div className="py-12 bg-gray-100 w-[90%] m-auto">
				<div className="container mx-auto px-4">
					<h3 className="text-[4rem] font-bold text-center mb-8">Popular Destinations</h3>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{destinations.map((city, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
							<img
								src={city.image}
								alt=""
								className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
							/>
							<div className="p-4">
								<h4 className="text-4xl font-bold mb-2">{city.title}</h4>
								<p className="text-gray-600">{city.description}</p>
							</div>
						</div>
					))}
					{/* Closing the map parentheses properly */}
				</div>
			</div>
		</>
	);
};

export default PopularDestination;
