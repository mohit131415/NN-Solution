import { useEffect } from "react";

function ContactForm() {

    useEffect(() => {
        // Dynamically load the external script
        const script = document.createElement("script");
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

  return (
    <>
      {/* <div
        className="visme_d"
        data-title="Simple Animated Contact Form"
        data-url="017edk00-simple-animated-contact-form"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="102257"
      ></div> */}

    
    </>
  );
}

export default ContactForm;
