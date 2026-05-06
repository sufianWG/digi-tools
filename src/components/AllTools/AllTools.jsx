import SectionTitle from "../../SectionTitle/SectionTitle";
import Tool from "../Tool/Tool";

const AllTools = ({ProductData}) => {
    // console.log(ProductData);
    return (
        <div className="my-30">
            <div className="parent-of-all-tools w-9/12 mx-auto space-y-4">
                <SectionTitle SecTitle="Premium Digital Tools" SecDesc={
                    <>
                        Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
                    </>
                }> </SectionTitle>
                <div className="flex justify-center gap-2">
                    {/* dynamic part */}
                    <button className="btn">Products</button>
                    <button className="btn">Cart(0)</button>
                </div>
                <div className="all-tools grid grid-cols-3 gap-10">
                    {/* dynamic part */}
                    {
                        ProductData.map(product => <Tool product={product} key={product.id}></Tool> )
                    }
                </div>
                <div className="cart-section">

                </div>

            </div>

        </div>
    );
};

export default AllTools;