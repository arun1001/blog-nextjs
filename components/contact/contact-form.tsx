import { NextPage } from "next";
import classes from "./contact-form.module.scss";
import axios, { AxiosError } from "axios";
import { FormHTMLAttributes, useContext, useRef } from "react";
import NotificationContext from "../../store/notification-context";
interface Props {}

const ContactForm: NextPage<Props> = () => {
  const notificationContext = useContext(NotificationContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const sendMessageHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    notificationContext.showNotification({
      title: "Pending",
      message: "Message senting progress",
      status: "pending",
    });
    const payload = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      message: messageRef.current?.value,
    };
    console.log(payload);
    axios
      .post("/api/contact", payload)
      .then((data) => {
        console.log(data);
        notificationContext.showNotification({
          title: "Success",
          message: "Message sent successfully",
          status: "success",
        });
        formRef.current?.reset();
      })
      .catch((err: AxiosError) => {
        notificationContext.showNotification({
          title: "Failed",
          message: err.response?.data?.message || "Something went wrong",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form
        className={classes.form}
        onSubmit={sendMessageHandler}
        ref={formRef}
      >
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows={5} required ref={messageRef} />
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
