
const Banner = () => {
    return (
       <div className="relative">
       
        <section style={{backgroundImage: 'url(https://i.ibb.co/x2fQdPv/Rectangle-4281.png)'}} className="bg-cover h-[70vh] bg-no-repeat object-cover bg-white opacity-10" >
        </section>
       
        <div className=" flex justify-center items-center text-center">

        <div className="absolute top-20">
           <h1 className=" text-xl lg:text-4xl font-bold">I Grow By Helping People In Need</h1>

           <input type="text" placeholder="Search here...." className="input input-bordered rounded-e-none lg:w-full max-w-xs mt-6"/>
           <button className="px-6 py-3 bg-[#FF444A] rounded-e-lg text-white">Search</button>
         </div>

        </div>

        </div>

    );
};

export default Banner;