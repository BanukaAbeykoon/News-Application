import { News } from "../Library/NewsApi";
import Image from "next/image";
import CardActionBar from "./CardActionBar";

interface ArticleCardProps {
    news : News;
    
}

const ArticleCard:React.FC<ArticleCardProps> = ({news})=> {
    return (
        <div className ="p-2 shadow-md"> 
         
            
            <Image 
            
            height={500}  
            src={news.urlToImage || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} 
            alt = {news.author} 
            width={400}
            className="w-full"
            />
            <div className="p-3">
                <div className="text-xl tuncate block">{news.title.slice(0, 70)}...</div>
            </div>
            <CardActionBar news={news}/>
        </div>
    );
};


export default ArticleCard;