const Tool = ({ product }) => {
    // console.log(product);
    return (
        <div className="card max-w-95 w-fit bg-base-100 shadow rounded-xl">
            <div className="card-body h-full flex flex-col">
                <div className="w-10 h-10 rounded-full p-2 bg-white shadow">
                    <img src={product.icon} alt="" />
                </div>
                <span className={
                    `badge badge-xs 
                    ${product.tag == "Best Seller" ? "badge-success" : 
                        product.tag == "New" ? "badge-accent" : 
                        product.tag == "Popular" ? "badge-primary" : 
                        product.tag == "Premium" ? "badge-neutral" : ""} absolute right-2 top-2`
                    }>
                    {product.tag}
                    </span>
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold">{product.name}</h2> 
                    <p className="text-[#627382] text-base font-medium">{product.description}</p>
                    <h3 className="text-xl">$<span>{product.price}</span>
                    <span className="text-[#627382] text-base font-medium">/{product.period == "monthly" ? "Mo" : product.period == "yearly" ? "Yr" : product.period == "one-time" ? "one-time" : ""}</span>
                    </h3>
                </div>
                <ul className="mt-1 flex flex-col gap-2 text-xs">
                    {
                        product.features.map(feature => <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> <span>{feature}</span> </li>)
                    }
                    
                    
                </ul>
                <div className="mt-auto">
                    <button className="btn btn-primary text-base font-medium text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to from-[#9514FA]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;