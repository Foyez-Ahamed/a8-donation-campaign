import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>

          <div className='mt-28 flex justify-center items-center'>
           <h1 className="text-[26px] font-bold text-[#009444]">Error ! Not found data !!</h1>
          </div>

        <div className="text-center mt-5">
        <Link to='/'><button className="bg-[#009444] px-5 py-2 rounded-lg text-white font-bold">Go Home</button></Link>
        </div>
            
        </div>
    );
};

export default ErrorPage;