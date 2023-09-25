import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCart from "./DonateCart/DonateCart";


const Donate = () => {

    const [donate, setDonate] = useState([]);

    const donations = useLoaderData();
    
    const {id} = useParams();


    useEffect(() => {
        const findDonate = donations.find(donationId => donationId.id === id);
        setDonate(findDonate);
    },[id, donations])

    return (
        <div>
            <div>
                {
                    <DonateCart donate = {donate}></DonateCart>
                }
            </div>
        </div>
    );
};

export default Donate;