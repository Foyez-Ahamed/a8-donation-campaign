import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Donations from "../../Components/Donations/Donations";



const Home = () => {

    const donations = useLoaderData();

    return (
        <div>
           <Banner></Banner>
            <div className="mt-16">
            <Donations donations = {donations}></Donations>
            </div>
        </div>
    );
};

export default Home;