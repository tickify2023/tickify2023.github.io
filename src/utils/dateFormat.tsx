export function dateShortFormat(dateString: string) {
  return dateString.substring(0, 10);
}

export function shortFormatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    timeZone: "UTC",
  };
  const month = new Intl.DateTimeFormat("es-ES", options).format(dateObj);
  const day = dateObj.getDate();
  return `${month} ${day}`;
}

export function getFormTime(dateStr: string): string {
  const date = new Date(dateStr);
  const time = date.toISOString().slice(11, 16);
  return time;
}

export function getFormDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (month.length === 1) {
    month = "0" + month;
  }
  if (day.length === 1) {
    day = "0" + day;
  }
  return `${year}-${month}-${day}`;
}

export function createFormDate(date: string, time: string): string {
  const dateTime = `${date}T${time}:00.000Z`;
  return new Date(dateTime).toISOString();
}

function dateFormat(date: Date): string {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const dayOfMonth = date.getDate();

  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const month = months[date.getMonth()];

  const year = date.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
}

export default dateFormat;
