"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7839],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,d=u["".concat(p,".").concat(c)]||u[c]||h[c]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},911:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Technical requirements"},p=void 0,s={unversionedId:"gettingstarted/requirements",id:"gettingstarted/requirements",title:"Technical requirements",description:"Moodle is a PHP Application, which is backed by a relational database.",source:"@site/docs/gettingstarted/requirements.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/requirements",permalink:"/devdocs/docs/gettingstarted/requirements",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/gettingstarted/requirements.md",tags:[],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653234323,formattedLastUpdatedAt:"22/05/2022",frontMatter:{title:"Technical requirements"},sidebar:"docs",previous:{title:"Quick start",permalink:"/devdocs/docs/gettingstarted/quickstart"},next:{title:"JavaScript",permalink:"/devdocs/docs/guides/javascript/"}},m={},h=[{value:"PHP",id:"php",level:2},{value:"Relational Database",id:"relational-database",level:2}],u={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Moodle is a PHP Application, which is backed by a relational database."),(0,i.kt)("p",null,"Five database types are supported, and several versions of PHP."),(0,i.kt)("h2",{id:"php"},"PHP"),(0,i.kt)("p",null,"Moodle 4.0 supports the following PHP versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"7.3"),(0,i.kt)("li",{parentName:"ul"},"7.4"),(0,i.kt)("li",{parentName:"ul"},"8.0")),(0,i.kt)("p",null,"The following PHP extensions are required (most of which are installed and enabled by default in most PHP installations):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.iconv"},(0,i.kt)("inlineCode",{parentName:"a"},"iconv"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.mbstring"},(0,i.kt)("inlineCode",{parentName:"a"},"mbstring"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.curl"},(0,i.kt)("inlineCode",{parentName:"a"},"curl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.openssl"},(0,i.kt)("inlineCode",{parentName:"a"},"openssl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.ctype"},(0,i.kt)("inlineCode",{parentName:"a"},"ctype"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.zip"},(0,i.kt)("inlineCode",{parentName:"a"},"zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.zlib"},(0,i.kt)("inlineCode",{parentName:"a"},"zlib"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.simplexml"},(0,i.kt)("inlineCode",{parentName:"a"},"simplexml"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.spl"},(0,i.kt)("inlineCode",{parentName:"a"},"spl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.pcre"},(0,i.kt)("inlineCode",{parentName:"a"},"pcre"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.dom"},(0,i.kt)("inlineCode",{parentName:"a"},"dom"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.xml"},(0,i.kt)("inlineCode",{parentName:"a"},"xml"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.xmlreader"},(0,i.kt)("inlineCode",{parentName:"a"},"xmlreader"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.intl"},(0,i.kt)("inlineCode",{parentName:"a"},"intl"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.json"},(0,i.kt)("inlineCode",{parentName:"a"},"json"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.hash"},(0,i.kt)("inlineCode",{parentName:"a"},"hash"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/book.fileinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"fileinfo")))),(0,i.kt)("h2",{id:"relational-database"},"Relational Database"),(0,i.kt)("p",null,"The following relational database servers are supported. The relevant PHP extension will also be required."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")," (version 10.2.29 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (version 5.7 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.mysqli.php"},"MySQLi PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgresql")," (version 10 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.pgsql.php"},"pgsql PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-au/sql-server/sql-server-downloads"},"Microsoft SQL Server")," (version 14.0 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.sqlsrv.php"},(0,i.kt)("inlineCode",{parentName:"a"},"SQLSRV")," PHP Extension")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/B19306_01/server.102/b14220/intro.htm"},"Oracle")," (version 11.2 or higher) with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/book.oci8.php"},"OCI8 PHP Extension"))))}c.isMDXComponent=!0}}]);