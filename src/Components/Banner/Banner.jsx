
const Banner = () => {
    return (
        <div>

              <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dBxg2QF/stock-photo-multicultral-volunteers-lettering-shirts-holding-packages-clothes-charity-center-removeb.png)'}}>
         <div className="bg-[#FFFFFFF2] bg-opacity-50"></div>
          <div>
            <div className="text-center">
                <h1 className="text-5xl">I Grow By Helping People In Need</h1>
                
                <div className="mt-8">
                <input type="text" placeholder="Search here...." className="input input-bordered w-full max-w-xs" />
                <button className="py-3 px-5 rounded-lg text-white bg-[#FF444A] ">Search</button>
                </div>
            </div>
          </div>
              </div>
            
        </div>
    );
};

export default Banner;