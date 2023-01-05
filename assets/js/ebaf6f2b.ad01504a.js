"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[66758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},l="Prerequisites",o={unversionedId:"guides/add-custom-functionality/prerequisites",id:"version-0.8.0/guides/add-custom-functionality/prerequisites",title:"Prerequisites",description:"In the following examples we assume you already",source:"@site/versioned_docs/version-0.8.0/guides/add-custom-functionality/prerequisites.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/prerequisites",permalink:"/docs/0.8.0/guides/add-custom-functionality/prerequisites",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"docs",previous:{title:"Add Custom Functionality",permalink:"/docs/0.8.0/guides/add-custom-functionality/introduction"},next:{title:"Extend GraphQL Schema",permalink:"/docs/0.8.0/guides/add-custom-functionality/extend-graphql"}},s={},p=[{value:"Config File",id:"config-file",level:2},{value:"Database and Migrations",id:"database-and-migrations",level:2},{value:"Plugin",id:"plugin",level:2},{value:"Start the server",id:"start-the-server",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In the following examples we assume you already"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cloned ",(0,a.kt)("inlineCode",{parentName:"li"},"platformatic/platformatic")," repo from Github"),(0,a.kt)("li",{parentName:"ul"},"ran ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm install")," to install all dependencies"),(0,a.kt)("li",{parentName:"ul"},"have ",(0,a.kt)("a",{parentName:"li",href:"https://docker.io"},"Docker")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker-compose"))," installed and running on your machine")),(0,a.kt)("h2",{id:"config-file"},"Config File"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic.db.json")," file in the root project, it will be loaded automatically by Platformatic (no need of ",(0,a.kt)("inlineCode",{parentName:"p"},"-c, --config")," flag)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 3042,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "core": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "table": "versions"\n  },\n  "plugin": {\n    "path": "plugin.js"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Once Platformatic DB starts, its API will be available at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:3042")),(0,a.kt)("li",{parentName:"ul"},"It will connect and read the schema from a PostgreSQL DB"),(0,a.kt)("li",{parentName:"ul"},"Will read migrations from ",(0,a.kt)("inlineCode",{parentName:"li"},"./migrations")," directory"),(0,a.kt)("li",{parentName:"ul"},"Will load custom functionallity from ",(0,a.kt)("inlineCode",{parentName:"li"},"./plugin.js")," file.")),(0,a.kt)("h2",{id:"database-and-migrations"},"Database and Migrations"),(0,a.kt)("p",null,"Start the database using the sample ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker-compose up -d postgresql\n")),(0,a.kt)("p",null,"For migrations create a ",(0,a.kt)("inlineCode",{parentName:"p"},"./migrations")," directory and a ",(0,a.kt)("inlineCode",{parentName:"p"},"001.do.sql")," file with following contents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE pages (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  body TEXT NOT NULL\n);\nINSERT INTO pages (title, body) VALUES ('First Page', 'This is the first sample page');\nINSERT INTO pages (title, body) VALUES ('Second Page', 'This is the second sample page');\nINSERT INTO pages (title, body) VALUES ('Third Page', 'This is the third sample page');\n")),(0,a.kt)("h2",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"Copy and paste this boilerplate code into ",(0,a.kt)("inlineCode",{parentName:"p"},"./plugin.js")," file. We will fill this in the examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nmodule.exports = async (app, opts) {\n  // we will fill this later\n}\n")),(0,a.kt)("h2",{id:"start-the-server"},"Start the server"),(0,a.kt)("p",null,"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ platformatic db start\n")),(0,a.kt)("p",null,"You will get an output similar to this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'                           /////////////\n                        /////         /////\n                      ///                 ///\n                    ///                     ///\n                   ///                       ///\n               &&  ///                       ///  &&\n          &&&&&&   ///                       ///   &&&&&&\n        &&&&       ///                      ///        &&&&\n      &&&          ///                     ///            &&&&&&&&&&&&\n     &&&           ///     ///////      ////               &&       &&&&&\n     &&            ///    ///////////////                               &&&\n    &&&            ///     ///                                           &&&\n     &&&           ///      //                                            &&\n     &&&           ///                                                    &&\n       &&&         ///                                                   &&&\n         &&&&      ///                                                 &&&\n            &&&&&% ///  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n\n[11:19:46.562] INFO (65122): running 001.do.sql\n[11:19:46.929] INFO (65122): server listening\n    url: "http://127.0.0.1:3042"\n')),(0,a.kt)("p",null,"Now is possible to create some examples, like ",(0,a.kt)("a",{parentName:"p",href:"./extend-graphql"},"extend GraphQL Schema"),", ",(0,a.kt)("a",{parentName:"p",href:"./extend-rest"},"extend REST API")))}u.isMDXComponent=!0}}]);