"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8393],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return c}});var s=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=s.createContext({}),d=function(e){var t=s.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(o),c=n,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||r;return o?s.createElement(m,i(i({ref:t},u),{},{components:o})):s.createElement(m,i({ref:t},u))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var d=2;d<r;d++)i[d]=o[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4653:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return h}});var s=o(7462),n=o(3366),r=(o(7294),o(3905)),i=["components"],a={title:"Cross-site request forgery",sidebar_position:3,tags:["Coding guidelines","Policies","Security"]},l=void 0,d={unversionedId:"development/policies/security/crosssite-request-forgery",id:"development/policies/security/crosssite-request-forgery",title:"Cross-site request forgery",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/crosssite-request-forgery.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/crosssite-request-forgery",permalink:"/devdocs/general/development/policies/security/crosssite-request-forgery",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/crosssite-request-forgery.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653234323,formattedLastUpdatedAt:"22/05/2022",sidebarPosition:3,frontMatter:{title:"Cross-site request forgery",sidebar_position:3,tags:["Coding guidelines","Policies","Security"]},sidebar:"policies",previous:{title:"Unauthorised access",permalink:"/devdocs/general/development/policies/security/unauthorised-access"},next:{title:"Cross-site scripting",permalink:"/devdocs/general/development/policies/security/crosssite-scripting"}},u={},h=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"Session key",id:"session-key",level:3},{value:"Use HTTP correctly",id:"use-http-correctly",level:3},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"Ensure your code does not expose the sesskey inadvertently",id:"ensure-your-code-does-not-expose-the-sesskey-inadvertently",level:2},{value:"Backend leaking",id:"backend-leaking",level:3},{value:"Frontend leaking",id:"frontend-leaking",level:3},{value:"Guidelines for removing the sesskey from visible URLs",id:"guidelines-for-removing-the-sesskey-from-visible-urls",level:3},{value:"Examples of sesskey fixed in core",id:"examples-of-sesskey-fixed-in-core",level:3},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:h};function c(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page forms part of the ",(0,r.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,r.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,r.kt)("p",null,"When you put a web application on the Internet, you are making it available so that anyone can send requests to it, and any request can be simply encoded as a URL."),(0,r.kt)("p",null,"Suppose that in Moodle, the way for an Administrator to delete a user was to click a ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button in their user profile, and then click ",(0,r.kt)("strong",{parentName:"p"},"Yes")," on an confirmation page. Suppose that as a result of that, the Administrator's web browser sends a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://example.com/moodle/user/delete.php"),", with post data ",(0,r.kt)("inlineCode",{parentName:"p"},"?id=123\\&confirm=1"),"."),(0,r.kt)("p",null,"Now suppose that Evil Hacker knows this, and wants to trick the administrator into deleting another user (If Evil Hacker makes this request themselves, they will see a permission denied error)."),(0,r.kt)("p",null,"All the Hacker needs to do is to put the link ",(0,r.kt)("inlineCode",{parentName:"p"},"http://example.com/moodle/user/delete.php?id=123&confirm=1")," somewhere where the administrator will click on it. For example, they could send the Administrator an email with a link saying ",(0,r.kt)("em",{parentName:"p"},'"Look at this cool YouTube video"')," but where the link actually goes to the delete URL. The Administrator may click on the link without checking where it goes, and when the Administrator clicks that link, user 123 really will be deleted."),(0,r.kt)("p",null,"Or, more seriously, the student could put a post in a forum that Administrators will read, and in the forum post, put an ",(0,r.kt)("inlineCode",{parentName:"p"},'<img src="http://example.com/moodle/user/delete.php?id=123&confirm=1" />'),". That way, the moment the Administrator reads the forum, user 123 will be deleted."),(0,r.kt)("p",null,"It is also possible to fake POST requests, you can simple put the form on external site and post a link pointing to that site on your Moodle server."),(0,r.kt)("p",null,"It may be a bit surprising, but this type of attack may be used against servers behind firewall on private network. It is not important where is the exploiting code, you can attack any server users may access from their browsers."),(0,r.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,r.kt)("h3",{id:"session-key"},"Session key"),(0,r.kt)("p",null,"The most important protection is the concept of a ",(0,r.kt)("strong",{parentName:"p"},"sesskey"),", short for session key."),(0,r.kt)("p",null,"When you log in, Moodle adds a random string to your session. Whenever it prints a link or a button to perform a significant action, it adds the sesskey value to the submitted data. Before performing the action, it checks the sesskey value in the request with the one in the session, and the action is only performed if the two match."),(0,r.kt)("p",null,"Therefore, the request to delete a user is actually something like below and there is no way for Evil Hacker to know what the sesskey is, so they cannot construct an URL that tricks the admin into deleting a user: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://example.com/moodle/user/delete.php?id=123&confirm=1&sesskey=E8i5BCxLJR")),(0,r.kt)("h3",{id:"use-http-correctly"},"Use HTTP correctly"),(0,r.kt)("p",null,"Web applications use HTTP to encode requests from the user. In HTTP, there are various types of request. The two most important are GET and POST."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GET")," requests should be used for getting information. So, for example, viewing a user's profile should be a GET request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"POST")," requests should be used for changing things in the application. For example, deleting a user should be a POST request.")),(0,r.kt)("p",null,"When you click a link or load an image, it is always a GET request. When you submit a form, it is either a POST or a GET request, depending on the form."),(0,r.kt)("p",null,"Moodle should only process changes in response to a POST request. If that is the case, then it does Evil Hacker no good to trick a user into clicking on a link or viewing an embedded image. They have to trick a user into clicking a form submit button, which is harder."),(0,r.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Form_API"},"Form API")," whenever possible for handling HTML forms. This automatically checks the sesskey and request method for you."),(0,r.kt)("p",null,"There are valid cases when using forms is not appropriate and you need to perform an action based on a parameter submitted via GET request - such as various action links. In this case, you have to manually include the sesskey among submitted parameters, and then make sure the submitted sesskey value is valid."),(0,r.kt)("p",null,"Include the sesskey among the submitted parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$action = new moodle_url('/admin/tool/do/something.php', ['delete' => $id, 'sesskey' => sesskey()]);\necho html_writer::link($action, get_string('delete'));\n")),(0,r.kt)("p",null,"And in the target script, make sure to check the submitted sesskey is correct before executing the operation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$delete = optional_param('delete', null, PARAM_INT);\n\nif ($delete) {\n    require_sesskey();\n    // Do whatever you need to, like $DB->delete_records(...) etc.\n}\n")),(0,r.kt)("p",null,"Note that when using standard elements like ",(0,r.kt)("inlineCode",{parentName:"p"},"$OUTPUT->continue_button()")," and other elements based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"single_button widget")," submitted via POST method, the sesskey can be implicitly added to submitted parameters. Still, it is your duty to explicitly check the submitted value is valid."),(0,r.kt)("h2",{id:"ensure-your-code-does-not-expose-the-sesskey-inadvertently"},"Ensure your code does not expose the sesskey inadvertently"),(0,r.kt)("p",null,"There are various ways that the sesskey could be leaked, and if this happens then it opens the door to types of risks that would be otherwise be mitigated by the sesskey: ",(0,r.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"},"https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html")),(0,r.kt)("p",null,"There are broadly two ways it could be leaked, in the frontend and in the backend."),(0,r.kt)("h3",{id:"backend-leaking"},"Backend leaking"),(0,r.kt)("p",null,"This is things such as the sesskey appearing in various server logs. If your infrastructure is locked down well this should not be a major concern. Either way this generally cannot be addressed by a developer in the code of Moodle or your plugin, instead it is best addressed at the infrastructure level for example by stripping it out these params from urls before they are logged in your server configuration. A similar level of care needs to be taken when logging other things, for example logging the cookies in your access logs has a risk of allowing a session take over by anyone who has access to those logs."),(0,r.kt)("h3",{id:"frontend-leaking"},"Frontend leaking"),(0,r.kt)("p",null,"The frontend includes ever showing the sesskey in the browser URL bar or anywhere else visible to the end user in a way that could then leak to a third-party. An example might be accidentally disclosing it during a screen sharing session or even at a desktop being watched or filmed. Another important hole is leaking the sesskey as part of the url in the referrer header when linking or interacting from another domain."),(0,r.kt)("h3",{id:"guidelines-for-removing-the-sesskey-from-visible-urls"},"Guidelines for removing the sesskey from visible URLs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First don't remove the requirement for checking the sesskey if it is actually needed."),(0,r.kt)("li",{parentName:"ol"},"If the page doesn't change any state on the server, then the sesskey check can be removed along with the query param. For example, any URLs for ",(0,r.kt)("inlineCode",{parentName:"li"},"pluginfile.php")," should not have a sesskey param."),(0,r.kt)("li",{parentName:"ol"},"If it does change state and is not a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request, for example a post, then it's ok as is."),(0,r.kt)("li",{parentName:"ol"},"A sesskey param in a ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," request it is ok as long as:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"It is not the primary HTTP call, that is, it is an AJAX call or a sub request like an iframe."),(0,r.kt)("li",{parentName:"ol"},"This page doesn't load any sub resources on another domain and where the sesskey could leak through the referrer header."),(0,r.kt)("li",{parentName:"ol"},"If the request will ALWAYS do something very quickly and then redirect away. But generally speaking these should be a HTTP post instead. If it takes a long time then it runs the risk of the URL being visible and lengthens the window of opportunity for a leak.")))),(0,r.kt)("h3",{id:"examples-of-sesskey-fixed-in-core"},"Examples of sesskey fixed in core"),(0,r.kt)("p",null,"Some examples to help guide how to fix these issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68292"},"MDL-68292")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73295"},"MDL-73295"))),(0,r.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is really only a code issue, but try not to fall for Evil Hacker's tricks ;-).")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Coding"},"Coding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html"},"OWASP Cheat Sheet Series: Cross-Site Request Forgery Prevention Cheat Sheet"))))}c.isMDXComponent=!0}}]);