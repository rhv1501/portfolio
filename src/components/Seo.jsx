import { useEffect } from "react";
import { seoContent, locationSEO, industrySEO } from "../constants/seo";

const Seo = () => {
  useEffect(() => {
    // Add structured data only once
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rudresh H Vyas",
      url: window.location.origin,
      jobTitle: "Full Stack Developer",
      description: seoContent.aboutDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: locationSEO.city,
        addressRegion: locationSEO.state,
        addressCountry: locationSEO.country,
      },
      knowsAbout: industrySEO.technologies,
      offers: industrySEO.services.map((service) => ({
        "@type": "Service",
        name: service,
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return null;
};

export default Seo;
