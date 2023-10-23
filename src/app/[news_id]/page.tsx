"use client";

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const NewsInDetails:React.FC = () =>{
    
    const searchParams = useSearchParams()
    
    return(

    <div className="mx-auto container px-3 py-6">
        <Image 
        width={500} 
        height={400} 
        className="w-full"  
        src={searchParams.get("urlToImage") || ""} 
        alt="News Image"
        />
       <div className="text-4xl mt-3">{searchParams.get("title")}</div>

       <p className="text-lg mt-5">
        {searchParams.get("description")}
       </p>

       <p className="text-lg mt-5">{searchParams.get("content")}
       </p>

       <Link 
       className="text-violet-600" 
       href ={searchParams.get("urlToImage") || ""}>Show more 
       
       </Link>
       

    </div>
    );
    
};

export default NewsInDetails;