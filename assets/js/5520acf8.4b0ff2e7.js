"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[94613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=o,m=g["".concat(p,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Logging",i={unversionedId:"reference/db/logging",id:"version-0.5.0/reference/db/logging",title:"Logging",description:"Platformatic DB uses a low overhead logger named Pino",source:"@site/versioned_docs/version-0.5.0/reference/db/logging.md",sourceDirName:"reference/db",slug:"/reference/db/logging",permalink:"/docs/0.5.0/reference/db/logging",draft:!1,tags:[],version:"0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/0.5.0/reference/db/plugin"},next:{title:"Platformatic DB Dashboard",permalink:"/docs/0.5.0/reference/db/dashboard"}},p={},s=[{value:"Logger output level",id:"logger-output-level",level:2},{value:"Log formatting",id:"log-formatting",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Platformatic DB uses a low overhead logger named ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino"},"Pino"),"\nto output structured log messages."),(0,o.kt)("h2",{id:"logger-output-level"},"Logger output level"),(0,o.kt)("p",null,"By default the logger output level is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", meaning that all log messages\nwith a level of ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," or above will be output by the logger. See the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pinojs/pino/blob/master/docs/api.md#level-string"},"Pino documentation"),"\nfor details on the supported log levels."),(0,o.kt)("p",null,"The logger output level can be overriden by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"logger")," object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"core"),"\nconfiguration settings group:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "core": {\n    "logger": {\n      "level": "error"\n    },\n   ...\n  },\n  ...\n}\n')),(0,o.kt)("h2",{id:"log-formatting"},"Log formatting"),(0,o.kt)("p",null,"If you run Platformatic DB in a terminal, where standard out (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)"},"stdout"),")\nis a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tty_(Unix)"},"TTY"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pinojs/pino-pretty"},"pino-pretty")," is automatically used\nto pretty print the logs and make them easier to read during development."),(0,o.kt)("li",{parentName:"ul"},"The Platformatic logo is printed (if colors are supported in the terminal emulator)")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npx platformatic db start\n                                                      \n                                                                                \n                                                                                \n                                                                                \n                           /////////////                                        \n                        /////         /////                                     \n                      ///                 ///                                   \n                    ///                     ///                                 \n                   ///                       ///                                \n               &&  ///                       ///  &&                            \n          &&&&&&   ///                       ///   &&&&&&                       \n        &&&&       ///                      ///        &&&&                     \n      &&&          ///                     ///            &&&&&&&&&&&&          \n     &&&           ///     ///////      ////               &&       &&&&&       \n     &&            ///    ///////////////                               &&&     \n    &&&            ///     ///                                           &&&    \n     &&&           ///      //                                            &&    \n     &&&           ///                                                    &&    \n       &&&         ///                                                   &&&    \n         &&&&      ///                                                 &&&      \n            &&&&&  ///  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&        \n                   ///                                                          \n                   ///                                                          \n                   ///                                                          \n                   ///                                                          \n                   ///                                                          \n                   ///                                                          \n                                                                                \n\n[11:20:33.466] INFO (337606): server listening\n    url: "http://127.0.0.1:3042"\n\n')),(0,o.kt)("p",null,"If stdout is redirected to a non-TTY, the logo is not printed and the logs are\nformatted as newline-delimited JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ npx platformatic db start | head\n{"level":30,"time":1665566628973,"pid":338365,"hostname":"darkav2","url":"http://127.0.0.1:3042","msg":"server listening"}\n')))}c.isMDXComponent=!0}}]);