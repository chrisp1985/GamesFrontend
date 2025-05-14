const AboutBlock = () => {
    return (
    <>
    <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
                <div className="hero-content">
                <h1
                    className="mb-5 text-4xl font-bold leading-[1.208]! text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl dark:text-white"
                >
                    Games Search Database <br />
                    N64 | PS4 | Switch
                </h1>
                <p className="mb-8 w-full text-base text-body-color dark:text-dark-6">
                    This is a page to try out some React elements, based on the Road to React book. This code has been adapted to present data served from a 
                    Spring Boot application. It includes local state storage, an axios request, useEffects, separate components, error handling and others.
                </p>
                <br />
                <p className="mb-8 w-full text-base text-body-color dark:text-dark-6">
                    The games search on the page pulls in data from a CockroachDB datase. All games are stored in state, with the delete button removing the selected game from the
                    local state store. On reload of the page, they return.
                </p>    
                <br />
                <p className="mb-8 w-full text-base text-body-color dark:text-dark-6">
                    The games themselves are served from a Spring Boot API, and pulled using axios.
                </p>                              
                </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
                <div className="lg:ml-auto lg:text-right">
                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                        <img
                        src="/src/assets/PXL_20250514_193429296.jpg"
                        alt="hero"
                        className="max-w-full lg:ml-auto opacity-50"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    </>
    );
};

export default AboutBlock;