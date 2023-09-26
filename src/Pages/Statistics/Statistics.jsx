import { useEffect, useState } from "react";

import { PieChart, Pie, Cell, } from 'recharts';



const Statistics = () => {

    const [mainData, setMainData] = useState([]);

    const [localData, setLocalData] = useState([]);

    useEffect(() => {
        fetch('/donation.json')
        .then(res => res.json())
        .then(data => setMainData(data))
    },[])

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('donation'));
        if(donations){
            setLocalData(donations);
        }
        
    },[])


    const main = mainData.length;
    
    const local = localData.length;

    const totalDonate = main - local;


    const data = [
    { name: 'Group A', value: totalDonate },
    { name: 'Group B', value: local },
  ];
  
  const COLORS = ['#FF444A', '#00C49F'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

    return (
        
      <div>
         <div className="flex justify-center items-center">
         <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        
       </div>

       <div className="text-center flex justify-center items-center gap-1 md:gap-3 lg:gap-8">

        <div className="flex justify-center items-center gap-4">
            <h1>Your Donation</h1>
            <div className="w-[70px] mt-1 bg-[#00C49F] h-[10px]"> </div>
        </div>

        <div className="flex justify-center items-center gap-4">

            <h1>Total Donation</h1>
            <div className="w-[70px] mt-1 bg-[#FF444A] h-[10px]"> </div>

        </div>

       </div>
      </div>

    );
};

export default Statistics;