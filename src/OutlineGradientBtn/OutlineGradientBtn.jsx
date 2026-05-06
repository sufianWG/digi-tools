const OutlineGradientBtn = ({btnIcon = null, btnText = ""}) => {
    return (
        <div className="cursor-pointer inline-block items-center font-medium rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-[1px]">
            <button className="btn cursor-pointer bg-white text-base py-1 px-3 rounded-full text-black flex gap-2"> {btnIcon} {btnText}</button>
        </div>
    );
};

export default OutlineGradientBtn;