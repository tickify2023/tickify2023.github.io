import Banner from "@/components/generic/Banner";
const colorDeFondo: React.FC = () => {
  const colorDiv = {
    backgroundColor: '#00ff00', // Puedes cambiar el código de color aquí
  };

  return (
    <div style={colorDiv}>
      {/* Contenido de tu componente va aquí */}
    </div>
  );
};
import { FaFacebookF, FaInstagram } from "react-icons/fa";
export default function Contacto() {
  return (
    <>
 
      <Banner
        banner_url="https://i.imgur.com/t5A749p.jpg"
        text=""
        position="center"
      ></Banner>
      <div className="container mt-5 pd-5" id="contacto">
        
      
        <div className="p-2 p-md-5 bg-dot">
          <h2 className="hover-underline-animation"></h2>
          <br />
          <h2 className="hover-underline-animation"></h2>
          <p className="mt-3">
            ¡Gracias por elegir Tickify como tu plataforma de confianza para
            adquirir entradas a eventos increíbles! Nos enorgullece ser
            especialistas en la venta de entradas para una amplia variedad de
            eventos, desde apasionantes conciertos hasta vibrantes fiestas en
            clubes nocturnos. Si necesitas comunicarte con nosotros, estamos
            aquí para ayudarte en todo momento.
            <br />
            ¿Tienes alguna pregunta, comentario o necesitas asistencia con tu
            reserva? No dudes en ponerte en contacto con nuestro equipo de
            atención al cliente, quienes estarán encantados de brindarte el
            apoyo que necesitas. Puedes comunicarte con nosotros a través de los
            siguientes canales:
          </p>
        </div>
        <div className="row contacto-details">
          <div className="col-12 col-md-4 detail">
            <img src="https://i.imgur.com/aEwXeHm.png"  />
            <h3 className="hover-underline-animation"></h3>
            
          </div>
          <div className="col-12 col-md-4 detail">
            <img src="https://i.imgur.com/AY5X0Iu.png"  />
            <h3 className="hover-underline-animation"></h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=++5492645852799&text=Me%20interesa%20saber%20mas%20sobre%20los%20conciertos"
            >
              +5492645852799 
            </a>
          </div>
          <div className="col-12 col-md-4 detail">
          <a target="blank"
          href="https://www.instagram.com/tickify.ar/">
            <img src="https://i.imgur.com/CogsmUW.png" />
          </a>
            
            
            <h3 className="hover-underline-animation"></h3>
            <div className="social-icons">
              {/* <a href="#">
                <FaFacebookF />
              </a> */}
              
                
              
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
