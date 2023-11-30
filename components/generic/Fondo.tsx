import React from 'react';

const colorDeFondo: React.FC = () => {
  const colorDiv = {
    backgroundColor: '#000000', // Puedes cambiar el código de color aquí
  };

  return (
    <div style={colorDiv}>
      {/* Contenido de tu componente va aquí */}
    </div>
  );
};

export {
   colorDeFondo,
}