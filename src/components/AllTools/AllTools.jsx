import { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Tool from "../Tool/Tool";

const AllTools = ({ProductData}) => {
    // console.log(ProductData);
    const [activeBtn, setActiveBtn]  = useState("tools");

    return (
        <div className="my-30">
            <div className="parent-of-all-tools w-9/12 mx-auto space-y-4">
                <SectionTitle SecTitle="Premium Digital Tools" SecDesc={
                    <>
                        Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
                    </>
                }> </SectionTitle>
                <div className="flex justify-center gap-2 rounded-full w-fit shadow bg-white mx-auto">
                    {/* dynamic part */}
                    <button onClick={()=> setActiveBtn("tools")} className={activeBtn == "tools" ? "btn btn-primary text-base font-medium text-white rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]" :"btn text-base font-medium text-black rounded-full"}>Products</button>
                    <button onClick={()=> setActiveBtn("cart")} className={activeBtn == "cart" ? "btn btn-primary text-base font-medium text-white rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]" :"btn text-base font-medium text-black rounded-full"}>Cart(0)</button>
                </div>

                {
                    activeBtn == "tools" ? <div className="all-tools grid grid-cols-3 gap-10">
                    {/* dynamic part */}
                    {
                        ProductData.map(product => <Tool product={product} key={product.id}></Tool> )
                    }
                </div> : <div className="cart-section">
                    <h1>It's cart section</h1>
                </div>
                }
                
                

            </div>

        </div>
    );
};

export default AllTools;