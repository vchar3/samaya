import React, {Component}  from 'react';
import { PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification';


class NotificationController extends Component{

    componentDidMount( ){
        PushNotification.configure({
        
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(pushToken) {
                console.log( 'TOKEN For Push Notification :', pushToken );
                if(pushToken.os == 'android') {
                    console.log('android token ', pushToken.token)
                } else if(pushToken.os == 'ios') {
                    console.log('android token ', pushToken.token)
                }
            },
        
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
        
                // process the notification
        
                // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
        
            // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
            senderID: "416593044066",
        
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
        
            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,
        
            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: true,
        });
    }

    render() {
        return null;
    }

};

export default NotificationController;