import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";


const Donations = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('/donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
    
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    donations.map(donation => <DonationsCard key={donation.id} donation = {donation}></DonationsCard>)
                }
            </div>
            
        </div>
    );
    }
export default Donations;