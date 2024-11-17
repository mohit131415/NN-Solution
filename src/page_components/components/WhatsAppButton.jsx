 

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=%2B918600659249&amp;text=hello%20I%20am%20Interested%20to%20know%20more%20about%20NN%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-12 p-3 bg-green-500 rounded-full shadow-lg z-10"
      aria-label="Contact us on WhatsApp"
    >
      <img src="https://nnsolutions.co.in/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
