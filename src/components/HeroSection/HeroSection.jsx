import HeroImg from '../../../src/assets/banner.png';
import PowerIco from '../../../src/assets/power.png';
import { CiPlay1 } from "react-icons/ci";
import SmallButton from "../../SmallButton/SmallButton";
import OutlineGradientBtn from "../../OutlineGradientBtn/OutlineGradientBtn";


const HeroSection = () => {
    const playIcon = <CiPlay1></CiPlay1>
    return (
        <div className='flex w-9/12 mx-auto py-21.25 items-center mx-auto gap-15  justify-between'>
            <div className="left-side space-y-4">
                <div className='bg-[#E1E7FF] rounded-full py-2 px-4 w-fit'>
                    <span className='bg-linear-to-r from-[#4F39F6] from-100% to from-[#34269E] to-0% bg-clip-text font-bold text-transparent flex items-center gap-2'><img src={PowerIco} alt="" />New: AI-Powered Tools Available</span>
                </div>
                <h1 className='text-7xl font-extrabold text-[#101727]'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='font-normal text-[#627382] text-lg'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex gap-2">
                    <SmallButton buttontext="Explore Products"></SmallButton>
                    <OutlineGradientBtn btnIcon={playIcon} btnText="Watch Demo"></OutlineGradientBtn>
                </div>
            </div>
            <div className="rihgt-side self-center">
                
                <div className='w-[300px] max-w-[350px] h-auto'>
                    <img src={HeroImg} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;