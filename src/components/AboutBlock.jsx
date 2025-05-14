const AboutBlock = () => {
    return (
        <div className="bg-clifton-navy-primary font-white" style={{ width: '100%'}}>
            <h1> This Page </h1>
            <p className="inter-d" style={{width: '95%'}}>
                This is a page to try out some React elements, based on the Road to React book. This code has been adapted to present data served from a Spring Boot application.
                It includes local state storage, an axios request, useEffects, separate components, error handling and others.
            </p>
            <p className="left-align inter-d">
                The games search on the page pulls in data from a CockroachDB datase. All games are stored in state, with the delete button removing the selected game from the
                local state store. On reload of the page, they return.
            </p>
            <p className="left-align inter-d">
                The games themselves are served from a Spring Boot API, and pulled using axios.
            </p>            
        </div>
    );
};

export default AboutBlock;