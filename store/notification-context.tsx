import { NextPage } from "next";
import React, {
  createContext,
  ReactChildren,
  useEffect,
  useState,
} from "react";

export interface NotificationInterface {
  title: string;
  message: string;
  status: "success" | "error" | "pending" | "empty";
}
const initialState: NotificationInterface = {
  title: "",
  message: "",
  status: "empty",
};
const NotificationContext = createContext({
  notification: initialState,
  showNotification: (notification: NotificationInterface) => {},
  hideNotification: () => {},
});
interface Props {
  children: React.ReactNode;
  notification: NotificationInterface;
  showNotification: any;
  hideNotification: any;
}

export const NotificationContextProvider: NextPage<Props> = (props) => {
  const [activeNotification, setactiveNotification] =
    useState<NotificationInterface>(initialState);

  useEffect(() => {
    let timeOut: any;
    if (
      activeNotification.status === "success" ||
      activeNotification.status === "error"
    ) {
      timeOut = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: NotificationInterface) => {
    console.log(notificationData);
    setactiveNotification(notificationData);
  };
  const hideNotificationHandler = () => {
    setactiveNotification(initialState);
  };
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};
export default NotificationContext;
