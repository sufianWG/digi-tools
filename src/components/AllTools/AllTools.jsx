import { useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Tool from "../Tool/Tool";

const AllTools = ({ ProductData, cartItem, setCartItem }) => {
    // console.log(ProductData);
    // console.log(cartItem);

    const [activeBtn, setActiveBtn] = useState("tools");
    const total = cartItem.reduce((sum, cart) => sum + cart.price, 0);
    const removeFromCart = (id) => {
        const filteredCart = cartItem.filter( targetItem=> targetItem.id !== id);
        setCartItem(filteredCart);
    }

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
                    <button onClick={() => setActiveBtn("tools")} className={activeBtn == "tools" ? "btn btn-primary text-base font-medium text-white rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]" : "btn text-base font-medium text-black rounded-full"}>Products</button>
                    <button onClick={() => setActiveBtn("cart")} className={activeBtn == "cart" ? "btn btn-primary text-base font-medium text-white rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]" : "btn text-base font-medium text-black rounded-full"}>Cart({cartItem.length})</button>
                </div>

                {
                    activeBtn == "tools" ? <div className="all-tools grid grid-cols-3 gap-10">
                        {/* dynamic part */}
                        {
                            ProductData.map(product => <Tool product={product} key={product.id} cartItem={cartItem} setCartItem={setCartItem}></Tool>)
                        }
                    </div> : <div className="cart-section">
                        <div className="w-9/12 mx-auto p-10 flex flex-col h-full space-y-6 shadow">
                            <h1 className="text-2xl font-bold">Your Cart</h1>
                            <div className="cart-items-parent">
                                {
                                    cartItem.map(ci => {
                                        return (
                                            <div key={ci.id} className="ci-parent flex justify-between p-6">
                                                <div className="left-side flex gap-4">
                                                    <div className="w-10 h-10 rounded-full p-2 bg-white shadow">
                                                        <img src={ci.icon} alt="" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-xl font-medium text-black">{ci.name}</h2>
                                                        <p className="text-[#627382] text-base font-medium">${ci.price}</p>
                                                    </div>
                                                </div>
                                                <div className="right-side">
                                                    <button onClick={()=> removeFromCart(ci.id)} className="btn">Remove</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cart-total-amount">
                                <h1>${total}</h1>
                            </div>
                            <button className="btn btn-primary text-base font-medium w-full text-white rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]">Proceed to Checkout</button>
                        </div>
                    </div>
                }



            </div>

        </div>
    );
};

export default AllTools;