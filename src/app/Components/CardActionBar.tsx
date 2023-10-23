'use client';

import { News } from "../Library/NewsApi";
import Link from "next/link";
import {
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share';


interface CardActionBarProps {
    news : News;
}


const CardActionBar:React.FC <CardActionBarProps>  = ({news}) => {


    const share = () => {};
        
   
    let convertObjectToUrlEnc = () =>{
        let url =""
        for (let key in news){
            //@ts-ignore
            url += key +"=" + news[key] + "&"
        }
        return url;
    }


    return (
    <div className="space-x-4 flex justify-end">
        <WhatsappShareButton
        url={news.url || ""}
        title={news.title || ""}
        separator=":: "
        >
            <WhatsappIcon size={32} round/>
        </WhatsappShareButton>
         <button onClick={share} className="border border-2 border-violet-600 px-3 py-2">Share</button>
         <Link target="_blank" href={news.url || ""}>
         <button className="bg-violet-600 text-white px-3 py-3">Show Details</button>
         </Link>

         <Link href={`/${news.title}?${convertObjectToUrlEnc()}`}>
         <button className="bg-violet-600 text-white px-3 py-3">Open</button>
         </Link>
    </div>
    );
};


export default CardActionBar;