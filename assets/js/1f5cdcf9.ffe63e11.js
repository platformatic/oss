"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[33554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Mutations",l={unversionedId:"reference/sql-graphql/mutations",id:"version-0.10.0/reference/sql-graphql/mutations",title:"Mutations",description:"When the GraphQL plugin is loaded, some mutations are automatically adding to",source:"@site/versioned_docs/version-0.10.0/reference/sql-graphql/mutations.md",sourceDirName:"reference/sql-graphql",slug:"/reference/sql-graphql/mutations",permalink:"/docs/0.10.0/reference/sql-graphql/mutations",draft:!1,tags:[],version:"0.10.0",frontMatter:{},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/0.10.0/reference/sql-graphql/queries"},next:{title:"Introduction to the Platformatic DB Mapper",permalink:"/docs/0.10.0/reference/sql-mapper/introduction"}},s={},p=[{value:"<code>save[ENTITY]</code>",id:"saveentity",level:2},{value:"Example",id:"example",level:3},{value:"<code>insert[ENTITY]</code>",id:"insertentity",level:2},{value:"Example",id:"example-1",level:3},{value:"<code>delete[ENTITIES]</code>",id:"deleteentities",level:2},{value:"Example",id:"example-2",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutations"},"Mutations"),(0,a.kt)("p",null,"When the GraphQL plugin is loaded, some mutations are automatically adding to\nthe GraphQL schema."),(0,a.kt)("h2",{id:"saveentity"},(0,a.kt)("inlineCode",{parentName:"h2"},"save[ENTITY]")),(0,a.kt)("p",null,"Saves a new entity to the database or updates an existing entity.\nThis actually behaves as an ",(0,a.kt)("inlineCode",{parentName:"p"},"upsert"),", allowing both behaviours depending on the presence of the primary key field."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { id: 3 title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '3', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n")),(0,a.kt)("h2",{id:"insertentity"},(0,a.kt)("inlineCode",{parentName:"h2"},"insert[ENTITY]")),(0,a.kt)("p",null,"Inserts a new entity in the database."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          savePage(input: { title: \"Platformatic is cool!\" }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { savePage: { id: '4', title: 'Platformatic is cool!' } }\n  await app.close()\n}\n\nmain()\n")),(0,a.kt)("h2",{id:"deleteentities"},(0,a.kt)("inlineCode",{parentName:"h2"},"delete[ENTITIES]")),(0,a.kt)("p",null,"Deletes one or more entities from the database, based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"where")," clause\npassed as an input to the mutation."),(0,a.kt)("h3",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst Fastify = require('fastify')\nconst graphqlPlugin = require('@platformatic/sql-graphql')\nconst sqlMapper = require('@platformatic/sql-mapper')\n\nasync function main() {\n  const app = Fastify({\n    logger: {\n      level: 'info'\n    }\n  })\n  app.register(sqlMapper, {\n    connectionString: 'postgres://postgres:postgres@127.0.0.1/postgres',\n    log: logger,\n  })\n  app.register(graphqlPlugin, {\n    graphiql: true\n  })\n  const res = await app.inject({\n    method: 'POST',\n    url: '/graphql',\n    body: {\n      query: `\n        mutation {\n          deletePages(where: { id: { eq: \"3\" } }) {\n            id\n            title\n          }\n        }\n      `\n    }\n  })\n  const result = await res.json()\n  console.log(result.data) // { deletePages: [ { id: '3', title: 'Platformatic is cool!' } ] }\n  await app.close()\n}\n\nmain()\n")))}u.isMDXComponent=!0}}]);