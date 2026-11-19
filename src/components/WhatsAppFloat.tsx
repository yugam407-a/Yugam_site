import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Yugam%20team,%20I'm%20interested%20in%20scaling%20my%20business.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Quick Connect on WhatsApp 👋
        </span>

        {/* WhatsApp Button */}
        <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-transform transform group-hover:scale-110 active:scale-95">
          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
        </div>
      </div>
    </a>
  );
};
