"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[62588],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},63068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},l="Platformatic DB Dashboard",i={unversionedId:"reference/db/dashboard",id:"version-0.12.0/reference/db/dashboard",title:"Platformatic DB Dashboard",description:"The Platformatic DB has a dashboard used to do several actions like see the current configuration and access documentation for your generated API.",source:"@site/versioned_docs/version-0.12.0/reference/db/dashboard.md",sourceDirName:"reference/db",slug:"/reference/db/dashboard",permalink:"/docs/0.12.0/reference/db/dashboard",draft:!1,tags:[],version:"0.12.0",frontMatter:{},sidebar:"docs",previous:{title:"Logging",permalink:"/docs/0.12.0/reference/db/logging"},next:{title:"Schema support",permalink:"/docs/0.12.0/reference/db/schema-support"}},c={},s=[{value:"Development Server",id:"development-server",level:2},{value:"Build",id:"build",level:2}],d={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platformatic-db-dashboard"},"Platformatic DB Dashboard"),(0,a.kt)("p",null,"The Platformatic DB has a dashboard used to do several actions like see the current configuration and access documentation for your generated API."),(0,a.kt)("p",null,"It also integrates GraphiQL, to run queries and mutations against Platformatic DB Server."),(0,a.kt)("h2",{id:"development-server"},"Development Server"),(0,a.kt)("p",null,"If you want to contribute on the dashboard, it needs to know where is Platformatic DB Server."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"./packages/db-dashboard/.env")," file with the following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"VITE_SERVER_URL=http://localhost:3042\n")),(0,a.kt)("p",null,"Or whatever port you are running platformatic DB server on. "),(0,a.kt)("p",null,"Then run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dashboard:start\n")),(0,a.kt)("p",null,"You'll get vite's development server up and running."),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("p",null,"Just run "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run dashboard:build\n")),(0,a.kt)("p",null,"And ",(0,a.kt)("inlineCode",{parentName:"p"},"vite")," will create a production ready bundle that will be served by Platformatic DB."))}p.isMDXComponent=!0}}]);