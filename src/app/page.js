import Header from "@/components/Large/Header/Header";
import styles from "./page.module.css";
import NavBar from "@/components/Large/NavBar/NavBar";
import { Suspense } from "react";
import Service from "@/components/Large/Service/Service";
import { Titles } from "@/data/Titles";
import Footer from "@/components/Large/Footer/Footer";
import Sliders from "@/components/Large/Sliders/Sliders";

export default function Home() {

  return (
    <main className={styles.mainPage}>
      <div>
      <NavBar/>
      </div>
      <Suspense fallback={<div>loading...</div>}>
      <div>
      <Header/>
      </div>
      </Suspense>



      {
        Titles.map((title)=>{
          return  <div key={title.id}>
          <Service title={title.title} showActiveBox ={title.showActiveBox} data={title.dataset}/>
        </div>
        })
      }
      
      <Service title='الأنظمة المساندة' isSingle={true}/>
      

       <Sliders title='المنضمون حديثا' compnent='single rect'/>
       <Sliders title='الشركاء والرعاة' compnent='single circle'/>
        

      <Footer/>

     
      
      
    
     
    
    </main>
  );
}
