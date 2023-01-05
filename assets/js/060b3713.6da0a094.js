"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[30740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Add Custom Functionality",s={unversionedId:"guides/add-custom-functionality/introduction",id:"version-0.12.1/guides/add-custom-functionality/introduction",title:"Add Custom Functionality",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-0.12.1/guides/add-custom-functionality/introduction.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/introduction",permalink:"/docs/guides/add-custom-functionality/introduction",draft:!1,tags:[],version:"0.12.1",frontMatter:{},sidebar:"docs",previous:{title:"Seed a Database",permalink:"/docs/guides/seed-a-database"},next:{title:"Prerequisites",permalink:"/docs/guides/add-custom-functionality/prerequisites"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-custom-functionality"},"Add Custom Functionality"),(0,i.kt)("p",null,"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,i.kt)("a",{parentName:"p",href:"https://fastify.io"},"Fastify")," plugin."),(0,i.kt)("p",null,"The config file will specify where the plugin file is located as the example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "plugin": {\n    "path": "./plugin/index.js"\n  }\n}\n')),(0,i.kt)("p",null,"The path is relative to the config file path."),(0,i.kt)("p",null,"Since it uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-isolate"},"fastify-isolate")," under the hood, all other options of that package may be specified under the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin")," property."),(0,i.kt)("p",null,"Once the config file is set up, you can write your plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = async function (app) {\n  app.log.info('plugin loaded')\n  // Extend GraphQL Schema with resolvers\n  app.graphql.extendSchema(`\n    extend type Query {\n      add(x: Int, y: Int): Int\n    }\n  `)\n  app.graphql.defineResolvers({\n    Query: {\n      add: async (_, { x, y }) => x + y\n    }\n  })\n\n  // Create a new route, see https://www.fastify.io/docs/latest/Reference/Routes/ for more info\n  app.post('/sum', (req, reply) => {\n    const {x, y} = req.body\n    return { result: x + y }\n  })\n\n  // access platformatic entities data\n  app.get('/all-entities', (req, reply) => {\n    const entities = Object.keys(app.platformatic.entities)\n    return { entities }\n  })\n}\n\n")))}p.isMDXComponent=!0}}]);