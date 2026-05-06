const SectionTitle = ({SecTitle, SecDesc}) => {
    return (
        <div>
             <h1 className="text-[#101727] font-extrabold text-5xl text-center">{SecTitle}</h1>   
             <p className="text-[#627382] text-base font-normal text-center">{SecDesc}</p>
        </div>
    );
};

export default SectionTitle;