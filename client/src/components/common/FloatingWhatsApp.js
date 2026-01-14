import React, { useEffect } from 'react';
import './FloatingWhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

function FloatingWhatsApp() {
  const phoneNumber = '+1234567890';
  const message = 'Hi, I would like to book a consultation for interior design services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="floating-whatsapp" onClick={handleClick}>
      <FaWhatsapp size={28} />
    </div>
  );
}

export default FloatingWhatsApp;
