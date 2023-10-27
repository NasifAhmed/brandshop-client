const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[800px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/TP7D2Jb/nissan-altima.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Car Mania</h1>
                    <p className="py-6">
                        Your one stop solution to buy the car you want.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
