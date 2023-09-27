import { useState } from "react";

const Banner = ({loadData, setLoadData})=> {

    const [searchInput, setSearchInput] = useState("");

    const [error, setError] = useState(null);

    const handleForm = (e) => {
        e.preventDefault();
        const searchCategory = loadData.filter((item) =>
          item.category.toLowerCase().includes(searchInput.toLowerCase())
        );

    
        if (searchCategory.length > 0) {
            setLoadData(searchCategory);
            setError(null);
          } else {
            setError("No matching categories found.");
            setLoadData([]);
          }

      };

      const handleInputChange = (e) => {
        setSearchInput(e.target.value);
      };

    return (
       <div className="relative">
       
        <section style={{backgroundImage: 'url(https://i.ibb.co/x2fQdPv/Rectangle-4281.png)'}} className="bg-cover h-[70vh] bg-no-repeat object-cover bg-white opacity-10" >
        </section>
       
        <div className=" flex justify-center items-center text-center">

        <div className="absolute top-20">
           <h1 className=" text-xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>

           <form onSubmit={handleForm}>
           <input type="text" placeholder="Search here...." name = "search" value={searchInput} onChange={handleInputChange} className="input input-bordered rounded-e-none lg:w-full max-w-xs mt-6"/>
           <button className="px-6 py-3 bg-[#FF444A] rounded-e-lg text-white">Search</button>
           </form>
           {error && <p className="text-red-500 mt-8 font-bold">{error}</p>}
         </div>

        </div>

        </div>

    );
};


export default Banner;