import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";



const Donation = () => {

    const [donationDetails, setDonationDetails] = useState([]);

    const [showAll, setShowAll] = useState(false);

    useEffect(() =>{
        const donations = JSON.parse(localStorage.getItem('donation'));

        if(donations){
            setDonationDetails(donations)
        }
    } ,[])
   
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
                {
                    showAll ? donationDetails.map((donationDetail, index) => <DonationCart key={index} donationDetail = {donationDetail}></DonationCart>) : 

                    donationDetails.slice(0,4).map((donationDetail, index) => <DonationCart key={index} donationDetail = {donationDetail}></DonationCart>)

                }
            </div>

             {donationDetails.length > 4 && <div   className="mt-8 text-center">
                <button onClick={() => setShowAll(!showAll)} className="bg-[#009444] px-5 py-2 rounded-lg text-white font-bold">{showAll ? 'Show Less' : 'Show All'}</button>
                </div>}
        </div>
    );
};

export default Donation;