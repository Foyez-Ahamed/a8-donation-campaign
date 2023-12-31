import { Link } from "react-router-dom";

const DonationCart = ({donationDetail}) => {
    const {id,image, card_bg, category, category_bg, text_bg, title, price} = donationDetail || {};
    return (
        <div>

        <div style={{backgroundColor : card_bg}} className="relative flex flex-row rounded-xl shadow-md">

         <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
         <img className="h-full object-cover"
         src={image}
        alt="image"
        />
        </div>

       <div className="p-6">
         
       <h2 style={{backgroundColor : category_bg, color : text_bg}} className="w-[75px] text-center py-[1px] rounded-md font-medium">{category}</h2>

       <h3 className="md:text-[12px] lg:text-[20px] font-bold mt-2">{title}</h3>

       <p style={{color : text_bg}} className="lg:text-[18px]  lg:font-medium mt-2">${price}</p>

       <Link to={`/donate/${id}`}>
       <button style={{backgroundColor : text_bg}} className="mt-2 px-4 text-white font-medium py-2 rounded-lg">View Details</button>
       </Link>

       </div>
       </div>
            
        </div>
    );
};

export default DonationCart;