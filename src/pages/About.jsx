const About = () => {
	return (
		<div>
			<div className="relative h-sreen bg-cover bg-center h-96" style={{backgroundImage: "url('/Images/hero.png')"}}>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justified-center">
					<h4 className="text-4xl md:text-6xl font-bold text-white my-auto">About</h4>
				</div>
			</div>
			<div>
				<div className="Container mx-auto px-4 py-12">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex items-center justify-center">
							<img src="/Images/hero.png" alt="" />
						</div>
						<div className="flex flex-col justify-center">
							<h3 className="text-[4rem] font-bold mb-4">Who We Are</h3>
							<p className="text-gray-700 mb-4">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, magnam accusantium tenetur sint
								perferendis magni!
							</p>
							<h3 className="text-[4rem] font-bold mb-4">Our Mission</h3>
							<p className="text-gray-700 mb-4">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, magnam accusantium tenetur sint
								perferendis magni!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
