import { Faq } from "@/components/about/Faq";
import { StoryTelling } from "@/components/about/StoryTelling";
import Banner from "@/components/generic/Banner";
import faqTexts from "src/utils/faqTexts";

export default function Nosotros() {
  return (
      <div style={{backgroundColor: 'black'}}> 
      <Banner
        banner_url="https://i.imgur.com/34F27X1.jpg"
        text=""
        position="center"
      ></Banner>
      <div 
      style={{backgroundColor: 'black'}}
      className="container mt-5 pd-5" id="nosotros">
        <StoryTelling 
        style={{color:'rgba(213, 232, 116, 0.8)'}}
        position="center"
        />

        <h2  style={{color: 'rgba(213, 232, 116, 0.8)'}}  
        className="mt-5 hover-underline-animation" id="second">
          Preguntas frecuentes
        
        </h2>
        <div  
        style={{backgroundColor: 'black'}}
        className="accordion" id="accordionPanelsStayOpenExample">
          {faqTexts.map((faq) => (
            <Faq
              
              key={`faq${faq.id}`}
              title={faq.title}
              text={faq.text}
              id={`faq${faq.id}`}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
}
