import { NextPage } from "next";
import { Fragment, ReactChildren, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../../ui/notification";
import MainNavigation from "./main-navigation";

interface Props {}

const Layout: NextPage<Props> = (props) => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      {activeNotification && activeNotification.title && (
        <Notification notification={activeNotification}>
          notification
        </Notification>
      )}
    </Fragment>
  );
};

export default Layout;
