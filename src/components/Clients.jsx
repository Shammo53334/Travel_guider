const testimonials = [
	{
		name: 'John Doe',
		image: '/Images/me2.png',
		text: 'This travel agency provided excellent Service and helpred us plan the perfect vacation',
		location: 'New York,USA',
	},
	{
		name: 'Jane Smith',
		image: '/Images/me.png',
		text: 'This travel agency provided excellent Service and helpred us plan the perfect vacation',
		location: 'Sydney,Australia',
	},
	{
		name: 'Allison John',
		image: '/Images/me2.png',
		text: 'This travel agency provided excellent Service and helpred us plan the perfect vacation',
		location: 'London,UK',
	},
];

const Clients = () => {
	return (
		<>
			<div className="py-12 bg-gray-100 w-[90%] m-auto">
				<div className="container mx-auto px-4">
					<h3 className="text-[4rem] font-bold text-center mb-8">Our Clients</h3>
				</div>

				<div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
					{testimonials.map((client, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md text-center cursor-pointer
                        transform transition duration-300 hover:scale-110 pt-5"
						>
							<img src={client.image} alt="" className="w-[10rem] h-auto  rounded-full mx-auto mb-4" />
							<div className="p-4">
								<h4 className="text-4xl font-bold mb-2">{client.name}</h4>
								<p className="text-gray-600">{client.location}</p>
								<p className="text-gray-600 italic">{client.text}</p>
							</div>
						</div>
					))}
					{/* Closing the map parentheses properly */}
				</div>
			</div>
		</>
	);
};

export default Clients;
