import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

interface Props {}

const Contact: NextPage<Props> = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Contact us using this page"></meta>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
