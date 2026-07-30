import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const phoneNumber = "5518991450514";
  const message = "olá, gostaria de fazer um orçamento";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-6 md:right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <img src="/whats.png" alt="WhatsApp" className="size-7 object-contain" />
      <span className="absolute right-full mr-4 bg-white text-neutral-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-neutral-100">
        Fale Conosco no WhatsApp
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
}
