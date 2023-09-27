import Banner from "../../Components/Banner/Banner";
import Donations from "../../Components/Donations/Donations";
import { useEffect, useState } from "react";

const Home = () => {

    const [loadData, setLoadData] = useState([]);
    
    useEffect(() => {
        fetch('/donation.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    },[])


    return (
        <div>
           
            <Banner  loadData = {loadData} setLoadData = {setLoadData}> </Banner>

            <div className="mt-16">
            <Donations loadData = {loadData}></Donations>
            </div>
            
        </div>
    );
};

export default Home;