const CountDown = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className="count-down-parent py-15 w-9/12 mx-auto grid grid-cols-3 gap-2 items-center">
                <div className="active-user text-center">
                    <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                    <span className='text-2xl text-[#FFFFFF] opacity-80 font-medium'>Active Users</span>
                </div>
                <div className="premium-tools border-l border-r border-white text-center">
                    <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                    <span className='text-2xl text-[#FFFFFF] opacity-80 font-medium'>Premium Tools</span>    
                </div>
                <div className="text-center">
                    <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                    <span className='text-2xl text-[#FFFFFF] opacity-80 font-medium'>Rating</span>
                </div>
            </div>
        </div>
    );
};

export default CountDown;