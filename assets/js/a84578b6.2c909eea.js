"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[81928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Fastify Plugin",p={unversionedId:"reference/sql-mapper/fastify-plugin",id:"version-0.9.2/reference/sql-mapper/fastify-plugin",title:"Fastify Plugin",description:"The @platformatic/sql-mapper package exports a Fastify plugin that can be used out-of the box in a server application.",source:"@site/versioned_docs/version-0.9.2/reference/sql-mapper/fastify-plugin.md",sourceDirName:"reference/sql-mapper",slug:"/reference/sql-mapper/fastify-plugin",permalink:"/docs/0.9.2/reference/sql-mapper/fastify-plugin",draft:!1,tags:[],version:"0.9.2",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the Platformatic DB Mapper",permalink:"/docs/0.9.2/reference/sql-mapper/introduction"},next:{title:"Introduction to Entities",permalink:"/docs/0.9.2/reference/sql-mapper/entities/introduction"}},s={},l=[{value:"Usage",id:"usage",level:4}],c={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastify-plugin"},"Fastify Plugin"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@platformatic/sql-mapper")," package exports a ",(0,a.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin that can be used out-of the box in a server application."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"connectionString")," option must be passed to connect to your database."),(0,a.kt)("p",null,"The plugin decorates the server with a ",(0,a.kt)("inlineCode",{parentName:"p"},"platformatic")," object that has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"db")," \u2014 the DB wrapper object provided by ",(0,a.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sql")," \u2014 the SQL query mapper object provided by ",(0,a.kt)("a",{parentName:"li",href:"https://www.atdatabases.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"@databases"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entities")," \u2014 all entity objects with their ",(0,a.kt)("a",{parentName:"li",href:"./entities/api"},"API methods")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addEntityHooks")," \u2014 a function to add a ",(0,a.kt)("a",{parentName:"li",href:"./entities/hooks"},"hook")," to an entity API method.")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst mapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(mapper.plugin, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres'\n  })\n\n  app.get('/all-pages', async (req, reply) => {\n    // Will return all rows from 'pages' table\n    const res = await app.platformatic.entities.page.find()\n    return res\n  })\n\n  await app.listen({ port: 3333 })\n}\n\nmain()\n")))}f.isMDXComponent=!0}}]);