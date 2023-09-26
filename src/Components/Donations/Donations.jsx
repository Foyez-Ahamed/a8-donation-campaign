import DonationsCard from "./DonationsCard";

const Donations = ({loadData}) => {

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    loadData.map(donation => <DonationsCard key={donation.id} donation = {donation}></DonationsCard>)
                }
            </div>
            
        </div>
    );
    }
    
export default Donations;