import swal from "sweetalert";


const DonateCart = ({donate}) => {
    const {image, text_bg, title, price, description} = donate || {};


    const handleDonate = () => {

        const addToDonate = [];

        const donations = JSON.parse(localStorage.getItem('donation'));


        if(!donations) {
            addToDonate.push(donate);
            localStorage.setItem('donation', JSON.stringify(addToDonate));
            swal("Thanks for donate!", "Donation added successfully!", "success");

        } else {
            addToDonate.push(...donations, donate)
            localStorage.setItem('donation', JSON.stringify(addToDonate));
            swal("Thanks for donate!", "Donation added successfully!", "success");
        }
    }



    return (
        <div>
           <div className="mt-6 relative">

                <div>
                <img className="w-full md:h-[400px] h-[200px] lg:h-screen object-cover" src={image}alt="" />
                </div>

                <div className="bg-[#00000080] w-full h-[80px] opacity-90  absolute bottom-[62%] md:bottom-[34%] lg:bottom-[26%]">
                <button onClick={handleDonate} style={{backgroundColor : text_bg}} className="absolute bottom-[20px] left-7 text-white px-6 py-2 rounded-md">Donate $ {price}</button>
                </div>
                
                <p className="mt-7 text-2xl lg:text-3xl font-bold">{title}</p>

                <p className="mt-7 text-justify">{description}</p>

           </div>
        </div>
    );
};

export default DonateCart;