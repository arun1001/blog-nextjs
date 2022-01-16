import { NextPage } from "next";
import classes from "./notification.module.scss";
import { NotificationInterface } from "../store/notification-context";
import ReactDOM from "react-dom";
interface Props {
  notification: NotificationInterface;
}

const Notification: NextPage<Props> = (props) => {
  const { title, message, status } = props.notification;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }
  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification") as Element
  );
};

export default Notification;
