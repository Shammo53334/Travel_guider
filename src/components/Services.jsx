import {FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell} from 'react-icons/fa';

const services = [
	{
		icon: <FaPlane className="text-[4rem] text-blue-500" />,
		heading: 'Flight Booking',
		detail: 'We provide easy and quick flight booking services to make your travel hassle-free.',
	},
	{
		icon: <FaUmbrellaBeach className="text-[4rem] text-blue-500" />,
		heading: 'Beach tours',
		detail: 'Relax and unwind with our beach holiday packages at top destinations.',
	},
	{
		icon: <FaHotel className="text-[4rem] text-blue-500" />,
		heading: 'Hotel Booking',
		detail: 'Get the best deals on hotel bookings for your comfortable stay.',
	},
	{
		icon: <FaConciergeBell className="text-[4rem] text-blue-500" />,
		heading: 'Concierge Services',
		detail: 'Our concierge services ensure that your travel experience is luxurious.',
	},
];

const Services = () => {
	return (
		<>
			<div className="py-12 bg-gray-100 w-[90%] m-auto">
				<div className="container mx-auto px-4">
					<h3 className="text-[4rem] font-bold text-center mb-8">Our Services</h3>
				</div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer
                        transform transition duration-300 hover:scale-110"
						>
							<div className="p-4">{service.icon}</div>
							<div className="p-4">
								<h4 className="text-4xl font-bold mb-2">{service.heading}</h4>
								<p className="text-gray-600">{service.detail}</p>
							</div>
						</div>
					))}
					{/* Closing the map parentheses properly */}
				</div>
			</div>
		</>
	);
};

export default Services;
