

const DonateCart = ({donate}) => {
    const {id, image, card_bg, category, category_bg, text_bg, title, price, description} = donate || {};
    return (
        <div>
           <div className="mt-6">

            <div className="relative">
                <img className="w-full h-[200px] lg:h-screen" src={image} alt="" />
                <div>
                <button style={{backgroundColor : text_bg}} className="absolute bottom-[20px] left-7 text-white px-6 py-2 rounded-md">Donate $ {price}</button>
                </div>
            </div>

            <p className="mt-7 text-2xl lg:text-3xl font-bold">{title}</p>

            <p className="mt-7 text-justify">{description}</p>
           
           </div>
        </div>
    );
};

export default DonateCart;