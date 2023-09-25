import swal from "sweetalert";


const DonateCart = ({donate}) => {
    const {id, image, text_bg, title, price, description} = donate || {};

    const handleDonate = () => {

        const addToDonate = [];

        const donations = JSON.parse(localStorage.getItem('donation'));


        if(!donations) {
            addToDonate.push(donate);
            localStorage.setItem('donation', JSON.stringify(addToDonate));
            swal("Good job!", "Donation added successfully!", "success");

        } else {
            addToDonate.push(...donations, donate)
            localStorage.setItem('donation', JSON.stringify(addToDonate));
            swal("Good job!", "Donation added successfully!", "success");
        }
    }



    return (
        <div>
           <div className="mt-6">

            <div className="relative">
                <img className="w-full h-[200px] lg:h-screen object-cover" src={image}alt="" />
                <div>
                <button onClick={handleDonate} style={{backgroundColor : text_bg}} className="absolute bottom-[20px] left-7 text-white px-6 py-2 rounded-md">Donate $ {price}</button>
                </div>
            </div>

            <p className="mt-7 text-2xl lg:text-3xl font-bold">{title}</p>

            <p className="mt-7 text-justify">{description}</p>
           
           </div>
        </div>
    );
};

export default DonateCart;