const OutlineGradientBtn = ({btnIcon = null, btnText = ""}) => {
    return (
        <div className="cursor-pointer inline-block items-center font-medium rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-[2px]">
            <button className="btn cursor-pointer bg-white text-base p-1 rounded-full text-black flex gap-2"> {btnIcon} {btnText}</button>
        </div>
    );
};

export default OutlineGradientBtn;