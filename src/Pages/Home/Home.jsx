
import Banner from "../../Components/Banner/Banner";
import Donations from "../../Components/Donations/Donations";
import { useEffect, useState } from "react";

const Home = () => {

    const [bannerLoad, setBannerLoad] = useState([]);
    
    useEffect(() => {
        fetch('/donation.json')
        .then(res => res.json())
        .then(data => setBannerLoad(data))
    },[])


    return (
        <div>
           <Banner bannerLoad = {bannerLoad} setBannerLoad = {setBannerLoad}></Banner>
            <div className="mt-16">
            <Donations donations = {bannerLoad}></Donations>
            </div>
        </div>
    );
};

export default Home;