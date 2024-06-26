

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;