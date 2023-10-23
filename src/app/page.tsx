export const metadata = {
  title: "News website",
};

import NewsApi from "@/app/Library/NewsApi";
import { Inter } from 'next/font/google';
import ArticleCard from "@/app/Components/ArticleCard";



const inter = Inter ({ subsets: ['latin'] });

export default async function Home() {
const headlines = await NewsApi.getHeadLines();





  return (
    <main className={inter.className}>
      <div className="container mx-auto">
        <h1 className="text-4xl my-6 font-bold">Headlines</h1>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
        {headlines.map((news) => (
          <ArticleCard news ={news} key = {news.title} />
        ))}
      </div>
      </div>
    </main>
  );
}