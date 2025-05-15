const GamesSearch = () => {
    return (
    <>
    <div className="bg-red-50">
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap items-center">
                <div className="w-full px-4 lg:w-6/12">
                    <div className="lg:ml-auto lg:text-right">
                        <div className="relative z-10 inline-block pt-11 lg:pt-0">
                            <img
                            src="/src/assets/N64-Console-Set.png"
                            alt="hero"
                            className="max-w-full lg:ml-auto opacity-50 z-0"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden px-4 lg:block lg:w-1/12"></div>
                <div className="w-full px-4 lg:w-5/12">
                    <div className="hero-content">
                    <h1 className="mb-5 text-4xl font-bold leading-tight text-black sm:text-[42px] lg:text-[40px] xl:text-5xl">
                        Games Dashboard
                    </h1>
                    <p className="mb-8 max-w-[480px] text-base text-body-color">
                        With TailGrids, business and students thrive together. Business
                        can perfectly match their staffing to changing demand throughout
                        the dayed.
                    </p>
                    <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    </>
    );
};

export default GamesSearch;