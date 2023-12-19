import Banner from "@/components/generic/Banner";
import { Color } from "@mui/material";
import { red } from "@mui/material/colors";
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
    <div style={{backgroundColor: 'black'}}>
      <div style={{backgroundColor: 'black'}}>
      <Banner
        banner_url="https://i.imgur.com/t5A749p.jpg"
        text=""
        position="center"
      ></Banner>
      </div>
      <div  
        style={{backgroundColor: 'black'}}
      className="background-color container mt-5 pd-5" id="contacto">
        
      
        <div
        style={{backgroundColor: 'black'}} 
        className="p-2 p-md-5 bg-dot">
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
          <a target="blank"
          href="https://www.facebook.com/people/Tickify-Arg/61554430005999/"> 
          <img src="https://i.imgur.com/nFIsQ5Q.png" />
          </a>
            <h3 className="hover-underline-animation"></h3>
            
          </div>
          <div className="col-12 col-md-4 detail">
          <a target="blank">
            <img src="https://i.imgur.com/62cNtzr.png" />
          </a>
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
            <img src="https://i.imgur.com/EVZuEiV.png" />
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
    
      </div>
  );
}
