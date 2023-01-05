"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[71503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(c,".").concat(h)]||m[h]||l[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Configure JWT with Auth0",s={unversionedId:"guides/jwt-auth0",id:"version-0.9.1/guides/jwt-auth0",title:"Configure JWT with Auth0",description:"Auth0 is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through JSON Web Tokens (JWT) tokens.",source:"@site/versioned_docs/version-0.9.1/guides/jwt-auth0.md",sourceDirName:"guides",slug:"/guides/jwt-auth0",permalink:"/docs/0.9.1/guides/jwt-auth0",draft:!1,tags:[],version:"0.9.1",frontMatter:{},sidebar:"docs",previous:{title:"Extend REST API",permalink:"/docs/0.9.1/guides/add-custom-functionality/extend-rest"},next:{title:"Monitoring with Prometheus and Grafana",permalink:"/docs/0.9.1/guides/monitoring"}},c={},p=[{value:"Custom Claim Namespace",id:"custom-claim-namespace",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-jwt-with-auth0"},"Configure JWT with Auth0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," is a powerful authentication and authorization service provider that can be integrated with Platformatic DB through ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JSON Web Tokens")," (JWT) tokens.\nWhen a user is authenticated, Auth0 creates a JWT token with all necessary security informations and custom claims (like the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE"),", see ",(0,r.kt)("a",{parentName:"p",href:"../reference/db/authorization/introduction#user-metadata"},"User Metadata"),") and signs the token. "),(0,r.kt)("p",null,"Platformatic DB needs the correct public key to verify the JWT signature.\nThe fastest way is to leverage ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS"),", since Auth0 exposes a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS")," endpoint for each tenant.\nGiven a Auth0 tenant's ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer")," URL, the (public) keys are accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"${issuer}/.well-known/jwks.json"),".\nFor instance, if ",(0,r.kt)("inlineCode",{parentName:"p"},"issuer")," is: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://dev-xxx.us.auth0.com/"),", the public keys are accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://dev-xxx.us.auth0.com/.well-known/jwks.json")),(0,r.kt)("p",null,"To configure Platformatic DB authorization to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7517"},"JWKS")," with Auth0, set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n...\n"authorization": {\n    "jwt": {\n      "jwks": {\n        "allowedDomains": [\n          "https://dev-xxx.us.auth0.com/"\n        ]\n      }\n    },\n  }\n...\n\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Note that specify ",(0,r.kt)("inlineCode",{parentName:"p"},"allowedDomains")," is critical to correctly restrict the JWT that MUST be issued from one of the allowed domains.")),(0,r.kt)("h2",{id:"custom-claim-namespace"},"Custom Claim Namespace"),(0,r.kt)("p",null,"In Auth0 there are ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/docs/secure/tokens/json-web-tokens/create-custom-claims#general-restrictions"},"restrictions")," about the custom claim that can be set on access tokens. One of these is that the custom claims MUST be namespaced, i.e. we cannot have ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," but we must specify a namespace, e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://platformatic.dev/X-PLATFORMATIC-ROLE")),(0,r.kt)("p",null,"To map these claims to user metadata removing the namespace, we can specify the namespace in the JWT options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n"authorization": {\n    "jwt": {\n      "namespace": "https://platformatic.dev/",\n      "jwks": {\n        "allowedDomains": [\n          "https://dev-xxx.us.auth0.com/"\n        ]\n      }\n    },\n  }\n...\n\n')),(0,r.kt)("p",null,"With this configuration, the ",(0,r.kt)("inlineCode",{parentName:"p"},"https://platformatic.dev/X-PLATFORMATIC-ROLE")," claim is mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"X-PLATFORMATIC-ROLE")," user metadata."))}l.isMDXComponent=!0}}]);