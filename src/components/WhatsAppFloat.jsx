// WhatsAppFloat.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import '../App.css';

const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/919876543210" 
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-float"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppFloat;
