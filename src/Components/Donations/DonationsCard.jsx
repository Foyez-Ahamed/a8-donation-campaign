import { Link } from "react-router-dom";


const DonationsCard = ({donation}) => {

    const {id, image, card_bg, category, category_bg, text_bg, title} = donation || {};

    return (
      <Link to= {`/donate/${id}`}>

       <div style={{backgroundColor : card_bg}} className={`card card-compact rounded-md shadow-xl`}>
       <figure><img src={image} className="w-full object-cover" alt="card-image" /></figure>

       <div className="card-body">
       <h2 style={{backgroundColor : category_bg, color : text_bg}} className="w-[75px] text-center py-[1px] rounded-md font-medium">{category}</h2>
       <p style={{color : text_bg}} className="text-[18px] font-medium mt-2">{title}</p>
        </div>
       </div>
       
      </Link>
    );
};

export default DonationsCard;