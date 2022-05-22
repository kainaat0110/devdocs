"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2915],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return m}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(i),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return i?n.createElement(f,r(r({ref:t},d),{},{components:i})):n.createElement(f,r({ref:t},d))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},156:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),r=["components"],s={title:"Sending custom Push Notifications to the Moodle App",sidebar_label:"Sending custom Push Notifications",sidebar_position:3,tags:["Moodle App"]},l=void 0,p={unversionedId:"moodleapp/development/custom-push-notifications",id:"moodleapp/development/custom-push-notifications",title:"Sending custom Push Notifications to the Moodle App",description:"There are two ways to send custom Push Notifications to the Moodle app users:",source:"@site/docs/moodleapp/development/custom-push-notifications.md",sourceDirName:"moodleapp/development",slug:"/moodleapp/development/custom-push-notifications",permalink:"/devdocs/docs/moodleapp/development/custom-push-notifications",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/custom-push-notifications.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653234323,formattedLastUpdatedAt:"22/05/2022",sidebarPosition:3,frontMatter:{title:"Sending custom Push Notifications to the Moodle App",sidebar_label:"Sending custom Push Notifications",sidebar_position:3,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Accepting dynamic names in a Web Service",permalink:"/devdocs/docs/moodleapp/development/plugins-development-guide/examples/dynamic-names"},next:{title:"Deep Linking",permalink:"/devdocs/docs/moodleapp/development/deep-linking"}},d={},c=[{value:"Moodle&#39;s Message API",id:"moodles-message-api",level:2},{value:"Airnotifier API",id:"airnotifier-api",level:2},{value:"Payload format",id:"payload-format",level:3},{value:"Sample CURL requests",id:"sample-curl-requests",level:3}],u={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two ways to send custom Push Notifications to the Moodle app users:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By using Moodle's Message API implementing a message provider"),(0,a.kt)("li",{parentName:"ol"},"By directly using the Airnotifier (Moodle's Push Notification server) APIs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The main differences are:")),(0,a.kt)("p",null,"By using Moodle's Message API, users (students, teachers, etc..) can opt-out to not receive custom notifications. They can also opt-in to receive them not only on the app but also via email. Messages sent using this API can be delivered to non-app users."),(0,a.kt)("p",null,"Using the Airnotifier API will force the user to receive the notification unless they change their app settings to not receive any notification.\nMessages sent using this API will only get to active app users."),(0,a.kt)("p",null,"In both cases, please remember that the number of user devices that can receive Push Notifications is dictated by your app ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/app/"},"subscription"),"."),(0,a.kt)("h2",{id:"moodles-message-api"},"Moodle's Message API"),(0,a.kt)("p",null,"Please read the official Moodle documentation, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Message_API"},"Message API"),", where it is explained how to create a new message provider within a plugin."),(0,a.kt)("p",null,"Apart from what is explained in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Message_API"},"Message API"),' please notice that it is possible to add a "customdata" field (json-encoded) with additional parameters. Those parameters are the ones described in the Airnotifier API section below.'),(0,a.kt)("h2",{id:"airnotifier-api"},"Airnotifier API"),(0,a.kt)("p",null,"Airnotifier is the name of the Push Notification server used by Moodle. It is possible to use its own API to send custom notifications from Moodle without having to use Moodle's Message API."),(0,a.kt)("h3",{id:"payload-format"},"Payload format"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mandatory fields:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"processor")," (string): Always set to Moodle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notification")," (number): Whether it is a notification (1) or a message (0)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"subject")," (string): Notification title."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"smallmessage")," (string): Notification body, short text."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fullmessage")," (string): Notification body, ignored if smallmessage is set.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional fields:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"site")," (string): Site ID (md5 hash of site URL + username)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"siteurl")," (string): Site URL (used to identify the site the notification is coming from)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"wwwroot")," (string): Moodle's $CFG->wwwroot"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"component")," (string): Moodle's component that generated the notification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contexturl")," (string): URL the notification is related to"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customdata")," (JSON encoded object, all fields are optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notificationiconurl")," (string): Icon to display in the notification (Android only)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"notificationpictureurl")," (string). Large picture to display in the notification (Android only)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tokenpluginfile")," (string): Token to view the icon if needed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"extendedtext")," (string). An extended text (HTML), opened in popup when clicked."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appurl")," (string): When notification is clicked, open this URL. It has preference over ",(0,a.kt)("inlineCode",{parentName:"li"},"contexturl")," but it will be ignored if ",(0,a.kt)("inlineCode",{parentName:"li"},"extendedtext")," is set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"appurlopenin")," (string): Where to open the previous URL ",(0,a.kt)("inlineCode",{parentName:"li"},"browser"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"in-app")," or any other value.")))),(0,a.kt)("h3",{id:"sample-curl-requests"},"Sample CURL requests"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Simple notification, only subject and body:"',title:'"Simple',"notification,":!0,only:!0,subject:!0,and:!0,'body:"':!0},' curl AIRNOTIFIER_URL/api/v2/push -X POST -H "X-AN-APP-NAME: APP_ID" -H "X-AN-APP-KEY: AIRNOTIFIER_ACCESS_KEY" --data \'{"device": "android-fcm", "token": "DEVICE_TOKEN",  "extra": {"processor" : "moodle", "notification": 1, "subject": "Title test", "fullmessage": "Message test"}}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Notification including an icon and picture (only displayed on Android devices) opening a popup with custom content on the app:"',title:'"Notification',including:!0,an:!0,icon:!0,and:!0,picture:!0,"(only":!0,displayed:!0,on:!0,Android:!0,"devices)":!0,opening:!0,a:!0,popup:!0,with:!0,custom:!0,content:!0,the:!0,'app:"':!0},'curl AIRNOTIFIER_URL/api/v2/push -X POST -H "X-AN-APP-NAME: APP_ID" -H "X-AN-APP-KEY: AIRNOTIFIER_ACCESS_KEY" --data \'{"device": "android-fcm", "token": "DEVICE_TOKEN", "extra": {"processor" : "moodle", "notification": 1, "subject": "Title test", "fullmessage": "Message test", "customdata": "{\\\\"extendedtext\\\\" : \\\\"Extended tex that will open in a popupt\\\\", \\\\"notificationiconurl\\\\" : \\\\"<https://picsum.photos/50\\\\">, \\\\"notificationpictureurl\\\\" : \\\\"<https://picsum.photos/200\\\\"}"}}\'>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Notification opening URL that can be handled by the app (a course within the app):"',title:'"Notification',opening:!0,URL:!0,that:!0,can:!0,be:!0,handled:!0,by:!0,the:!0,app:!0,"(a":!0,course:!0,within:!0,'app):"':!0},' curl AIRNOTIFIER_URL/api/v2/push -X POST -H "X-AN-APP-NAME: APP_ID" -H "X-AN-APP-KEY: AIRNOTIFIER_ACCESS_KEY" --data \'{"device": "android-fcm", "token": "DEVICE_TOKEN", "extra": {"processor" : "moodle", "notification": 1, "subject": "Title test", "fullmessage": "Message test", "customdata": "{ \\\\"appurl\\\\" : \\\\"<https://mymoodlesite.net/course/view.php?id=18\\\\">, \\\\"notificationiconurl\\\\" : \\\\"<https://picsum.photos/50\\\\">, \\\\"notificationpictureurl\\\\" : \\\\"<https://picsum.photos/200\\\\"}"}}\'>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Replace the following fields:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AIRNOTIFIER_URL: Can be obtained from your Moodle site settings: Site administration > Messaging > Mobile."),(0,a.kt)("li",{parentName:"ul"},"APP_ID: ",(0,a.kt)("inlineCode",{parentName:"li"},"commoodlemoodlemobile")," for the standard Moodle app, it can also be obtained from Site administration > Messaging > Mobile."),(0,a.kt)("li",{parentName:"ul"},"AIRNOTIFIER_ACCESS_KEY: Your Airnotifier Access key can be obtained from Site administration > Messaging > Mobile."),(0,a.kt)("li",{parentName:"ul"},"DEVICE_TOKEN: The user's receiving the notification device token, for testing purposes you can get it via the app > App settings > About > Click at app version on the footer > Push notification ID.")),(0,a.kt)("p",null,"In Moodle the push ids are in the user_devices table (",(0,a.kt)("inlineCode",{parentName:"p"},"pushid")," field), the previous table has to be joined with message_airnotifier_devices to obtain active devices."),(0,a.kt)("p",null,"The device could be android-fcm or ios-fcm (in the example we used android-fcm only)."))}m.isMDXComponent=!0}}]);