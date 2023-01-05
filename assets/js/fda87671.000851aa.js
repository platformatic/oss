"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[43358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="Subscription",s={unversionedId:"reference/sql-graphql/subscriptions",id:"version-0.5.0/reference/sql-graphql/subscriptions",title:"Subscription",description:"When the GraphQL plugin is loaded, some subscriptions are automatically adding to",source:"@site/versioned_docs/version-0.5.0/reference/sql-graphql/subscriptions.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/subscriptions",permalink:"/docs/0.5.0/reference/sql-graphql/subscriptions",draft:!1,tags:[],version:"0.5.0",frontMatter:{}},l={},p=[{value:"<code>[ENTITY]Saved</code>",id:"entitysaved",level:2},{value:"<code>[ENTITY]Deleted</code>",id:"entitydeleted",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscription"},"Subscription"),(0,i.kt)("p",null,"When the GraphQL plugin is loaded, some subscriptions are automatically adding to\nthe GraphQL schema if the ",(0,i.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-events")," plugin has been previously registered."),(0,i.kt)("p",null,"It's possible to avoid creating the subscriptions for a given entity by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionIgnore")," config,\nlike so: ",(0,i.kt)("inlineCode",{parentName:"p"},"subscriptionIgnore: ['page']"),"."),(0,i.kt)("h2",{id:"entitysaved"},(0,i.kt)("inlineCode",{parentName:"h2"},"[ENTITY]Saved")),(0,i.kt)("p",null,"Published whenever an entity is saved, e.g. when the mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"insert[ENTITY]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"save[ENTITY]")," are called."),(0,i.kt)("h2",{id:"entitydeleted"},(0,i.kt)("inlineCode",{parentName:"h2"},"[ENTITY]Deleted")),(0,i.kt)("p",null,"Published whenever an entity is deleted, e.g. when the mutation ",(0,i.kt)("inlineCode",{parentName:"p"},"delete[ENTITY]")," is called.."))}u.isMDXComponent=!0}}]);