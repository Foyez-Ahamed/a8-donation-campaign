

const DonationsCard = ({donation}) => {
    console.log(donation);

    const {image, card_bg, category, category_bg, text_bg, title} = donation || {};

    return (
      <div style={{backgroundColor : card_bg}} className={`card card-compact rounded-md shadow-xl`}>
       <figure><img src={image} alt="Shoes" /></figure>

      <div className="card-body">
      <h2 style={{backgroundColor : category_bg, color : text_bg}} className="w-[75px] text-center py-[1px] rounded-md font-medium">{category}</h2>
      <p style={{color : text_bg}} className="text-[18px] font-medium mt-2">{title}</p>
  </div>
</div>
    );
};

export default DonationsCard;