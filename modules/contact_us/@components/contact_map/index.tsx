import React from "react";

const ContactMap = () => {
  return (
    <section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.9266074740412!2d150.99903527649954!3d-33.81420701623471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3e7652380f%3A0x208e1c327d5846aa!2sStudy%20International!5e0!3m2!1sen!2sbd!4v1689591740532!5m2!1sen!2sbd"
          width="100%"
          height="690"
          className="lg:h-[690px] h-[450px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
