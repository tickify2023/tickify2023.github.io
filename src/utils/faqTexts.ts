import EventoShow from "src/app/(store)/evento/[id]/page";
import { getEffectiveConstraintOfTypeParameter } from "typescript";

interface FaqText {
  id: number;
  title: string;
  text: string;
}

const faqTexts: FaqText[] = [
  {
    id: 1,
    title: "¿Como realizo mi compra?",
    text: "En primer lugar, seleccioná el evento al que desees asistir. Disponés de toda la información del espectáculo, incluyendo fechas, diversos tipos de entradas disponibles y precios. Una vez que hayas decidido qué tipo de entrada querés, podrás seleccionar cuántas unidades deseás adquirir. Cuando estés listo para comprar las entradas, tendrás que proporcionarnos los datos necesarios para verificar tu identidad. Luego, podrás abonar el total de tu compra con MercadoPago, transferencia, Rapipago, tarjeta de crédito o débito en la cantidad de cuotas disponibles. Una vez que hayas completado tu compra, recibirás los códigos QR correspondientes al evento en tu correo electrónico.",
  },
  {
    id: 2,
    title: "¿Cuales son los métodos de pago?",
    text: "Disponés de diversos medios de pago a tu disposición a través de la plataforma de Mercado Pago. Aceptamos tanto Tarjetas de crédito como Tarjetas de débito emitidas por cualquier entidad bancaria argentina. Además, tenés la opción de utilizar el saldo disponible en tu cuenta de Mercado Pago.",
  },
  {
    id: 3,
    title: "¿Por qué no se concretó mi compra?",
    text: "Es posible que tu pago sea rechazado por Mercado Pago debido a que el emisor de tu tarjeta no autorizó la transacción, o bien porque no disponés de saldo suficiente o tu límite de crédito se ha alcanzado. Asimismo, es probable que hayas ingresado alguna información incorrecta. Te recomendamos que intentes realizar el pago nuevamente y verifiques cuidadosamente la información ingresada, incluyendo la dirección de correo electrónico registrada en tu cuenta de Mercado Pago. En caso de que el problema persista, te sugerimos que te comuniques con tu emisor de tarjeta o con el servicio de atención al cliente de Mercado Pago, quienes estarán capacitados para ayudarte a resolver cualquier inconveniente.",
  },
  {
    id: 4,
    title: "¿Donde encuentro mi entrada?",
    text: "Es importante que verifiques tanto tu bandeja de entrada como tu carpeta de correo no deseado en busca de las entradas que adquiriste. Las entradas estarán en formato PDF, junto con un código QR que será escaneado en el día del evento para permitirte el ingreso. Tené en cuenta que es fundamental que no compartas las entradas, ya que en caso de que el código QR haya sido utilizado por otra persona, no podrás ingresar al evento.",
  },
  {
    id: 5,
    title: "¿Por qué no hay más disponibilidad de entradas?",
    text: "Es posible que todas las entradas para el evento que deseabas adquirir ya se hayan vendido o que la venta del mismo haya finalizado.",
  },
];

export default faqTexts;
