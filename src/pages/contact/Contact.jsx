import React from "react";
import { Helmet } from "react-helmet";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactInfo from "./ContactInfo";
import SendMail from "./SendMail";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact - Legalmate</title>
      </Helmet>

      <Breadcrumbs title="Contact" />

      <ContactInfo />

      <SendMail />
    </div>
  );
};

export default Contact;