(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),i=(n(0),n(227)),a={id:"setup",title:"Setup Guide",sidebar_label:"Setup Guide"},c={unversionedId:"contributing/setup",id:"contributing/setup",isDocsHomePage:!1,title:"Setup Guide",description:"Website Details",source:"@site/docs/contributing/setup.md",permalink:"/contributing/setup",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/contributing/setup.md",sidebar_label:"Setup Guide",sidebar:"Contributing",previous:{title:"Overview",permalink:"/contributing/overview"},next:{title:"Editing The Syllabus",permalink:"/contributing/editing"}},l=[{value:"Website Details",id:"website-details",children:[]},{value:"1. Download the Code",id:"1-download-the-code",children:[]},{value:"2. Installation",id:"2-installation",children:[]},{value:"3. Local Development",id:"3-local-development",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Local Building",id:"local-building",children:[]},{value:"To Production",id:"to-production",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"website-details"},"Website Details"),Object(i.b)("p",null,"This website is built using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus 2"),"."),Object(i.b)("h2",{id:"1-download-the-code"},"1. Download the Code"),Object(i.b)("p",null,"All of the code for this website can be found on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus"}),"Syllabus Repository")),Object(i.b)("p",null,"You should clone this repo using the command"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),"$ git clone https://github.com/CodeYourFuture/syllabus.git\n")),Object(i.b)("h2",{id:"2-installation"},"2. Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),"$ npm install\n")),Object(i.b)("h2",{id:"3-local-development"},"3. Local Development"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm run start\n")),Object(i.b)("p",null,"This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server."),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("h3",{id:"local-building"},"Local Building"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm run build\n")),Object(i.b)("p",null,"This command generates static content into the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),Object(i.b)("h3",{id:"to-production"},"To Production"),Object(i.b)("p",null,"All commits are deployed automatically when they are merged into ",Object(i.b)("inlineCode",{parentName:"p"},"master"),"."))}b.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,m=d["".concat(a,".").concat(s)]||d[s]||p[s]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);