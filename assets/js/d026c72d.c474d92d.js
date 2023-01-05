"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[13892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),u=r,c=k["".concat(p,".").concat(u)]||k[u]||d[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},l="Configuration",o={unversionedId:"reference/db/configuration",id:"version-0.12.1/reference/db/configuration",title:"Configuration",description:"Platformatic DB is configured with a configuration file. It supports the use",source:"@site/versioned_docs/version-0.12.1/reference/db/configuration.md",sourceDirName:"reference/db",slug:"/reference/db/configuration",permalink:"/docs/reference/db/configuration",draft:!1,tags:[],version:"0.12.1",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic DB",permalink:"/docs/reference/db/introduction"},next:{title:"Migrations",permalink:"/docs/reference/db/migrations"}},p={},s=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>core</code>",id:"core",level:3},{value:"<code>dashboard</code>",id:"dashboard",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>migrations</code>",id:"migrations",level:3},{value:"<code>plugin</code>",id:"plugin",level:3},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>server</code>",id:"server",level:3},{value:"<code>authorization</code>",id:"authorization",level:3},{value:"Example",id:"example",level:4},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Example",id:"example-1",level:3},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3},{value:"Sample Configuration",id:"sample-configuration",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Platformatic DB is configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,r.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,r.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,r.kt)("p",null,"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.json5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.yml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.yaml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.tml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"platformatic.db.toml"))),(0,r.kt)("p",null,"Alternatively, a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/cli#db"},(0,r.kt)("inlineCode",{parentName:"a"},"--config")," option")," with a configuration\nfilepath can be passed to most ",(0,r.kt)("inlineCode",{parentName:"p"},"platformatic db")," CLI commands."),(0,r.kt)("p",null,"The configuration examples in this reference use JSON."),(0,r.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Format"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON5"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".json5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"YAML"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".yml"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".yaml"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TOML"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},".tml"))))),(0,r.kt)("p",null,"Comments are supported by the JSON5, YAML and TOML file formats."),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Configuration settings are organised into the following groups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#core"},(0,r.kt)("inlineCode",{parentName:"a"},"core"))," ",(0,r.kt)("strong",{parentName:"li"},"(required)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dashboard"},(0,r.kt)("inlineCode",{parentName:"a"},"dashboard"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"metrics"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#migrations"},(0,r.kt)("inlineCode",{parentName:"a"},"migrations"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#server"},(0,r.kt)("inlineCode",{parentName:"a"},"server"))," ",(0,r.kt)("strong",{parentName:"li"},"(required)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#authorization"},(0,r.kt)("inlineCode",{parentName:"a"},"authorization")))),(0,r.kt)("p",null,"Sensitive configuration settings, such as a database connection URL that contains\na password, should be set using ",(0,r.kt)("a",{parentName:"p",href:"#configuration-placeholders"},"configuration placeholders"),"."),(0,r.kt)("h3",{id:"core"},(0,r.kt)("inlineCode",{parentName:"h3"},"core")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"required")," object with the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"connectionString"))," (",(0,r.kt)("strong",{parentName:"p"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") \u2014 Database connection URL."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"postgres://user:password@my-database:5432/db-name")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"}," ",(0,r.kt)("inlineCode",{parentName:"strong"},"schema"))," (array of ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") - Currently supported only for postgres, schemas used tolook for entities. If not provided, the default ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," schema is used."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Examples")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "core": {\n    "connectionString": "(...)",\n    "schema": [\n      "schema1", "schema2"\n    ],\n    ...\n\n  },\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Platformatic DB supports MySQL, MariaDB, PostgreSQL and SQLite.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"graphql"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") \u2014 Controls the GraphQL API interface, with optional GraphiQL UI."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Examples")),(0,r.kt)("p",{parentName:"li"},"Enables GraphQL support"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "graphql": true\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Enables GraphQL support with GraphiQL"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "graphql": {\n      "graphiql": true\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's possible to selectively ignore entites:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "graphql": {\n      "ignore": {\n        "categories": true\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's possible to selectively ignore fields:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "graphql": {\n      "ignore": {\n        "categories": {\n          "name": true\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"openapi"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") \u2014 Enables OpenAPI REST support."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If value is an object, all ",(0,r.kt)("a",{parentName:"li",href:"https://swagger.io/specification/"},"OpenAPI v3")," allowed properties can be passed. Also a ",(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," property can be passed to set the OpenAPI prefix."),(0,r.kt)("li",{parentName:"ul"},"Platformatic DB uses ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-swagger"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/swagger"))," under the hood to manage this configuration.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Examples")),(0,r.kt)("p",{parentName:"li"},"Enables OpenAPI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "openapi": true\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Enables OpenAPI with prefix"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "openapi": {\n      "prefix": "/api"\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"Enables OpenAPI with options"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "openapi": {\n      "info": {\n        "title": "Platformatic DB",\n        "description": "Exposing a SQL database as REST"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's possible to selectively ignore entites:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "openapi": {\n      "ignore": {\n        "categories": true\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",{parentName:"li"},"It's possible to selectively ignore fields:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "openapi": {\n      "ignore": {\n        "categories": {\n          "name": true\n        }\n      }\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ignore"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Key/value object that defines which database tables should not be mapped as API entities."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Examples")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "ignore": {\n      "versions": true // "versions" table will be not mapped with GraphQL/REST APIs\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"events"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") \u2014 Controls the support for events published by the SQL mapping layer.\nIf enabled, this option add support for GraphQL Subscription over WebSocket. By default it uses an in-process message broker.\nIt's possible to configure it to use Redis instead."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Examples")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "core": {\n    ...\n    "events": {\n      "connectionString": "redis://:password@redishost.com:6380/"\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"dashboard"},(0,r.kt)("inlineCode",{parentName:"h3"},"dashboard")),(0,r.kt)("p",null,"This setting can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the dashboard will be served at the root path (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),")."),(0,r.kt)("p",null,"Supported object properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"rootPath"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") \u2014 Make the dashboard available at the root path (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),").")),(0,r.kt)("h3",{id:"metrics"},(0,r.kt)("inlineCode",{parentName:"h3"},"metrics")),(0,r.kt)("p",null,"Configuration for a ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," server that will export monitoring metrics\nfor the current server instance. It uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SkeLLLa/fastify-metrics"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-metrics")),"\nunder the hood."),(0,r.kt)("p",null,"This setting can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or an ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),". If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the Prometheus server will listen on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://0.0.0.0:9090"),"."),(0,r.kt)("p",null,"Supported object properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") \u2014 The hostname where Prometheus server will listen for connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),") \u2014 The port where Prometheus server will listen for connections."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"auth"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),") \u2014 Basic Auth configuration. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"username"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"password"))," are required here\n(use ",(0,r.kt)("a",{parentName:"li",href:"#environment-variables"},"environment variables"),").")),(0,r.kt)("h3",{id:"migrations"},(0,r.kt)("inlineCode",{parentName:"h3"},"migrations")),(0,r.kt)("p",null,"Configures ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rickbergfalk/postgrator"},"Postgrator")," to run migrations against the database."),(0,r.kt)("p",null,"An optional object with the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"dir"))," (",(0,r.kt)("strong",{parentName:"li"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): Relative path to the migrations directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"autoApply"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): Automatically apply migrations when Platformatic DB server starts.")),(0,r.kt)("h3",{id:"plugin"},(0,r.kt)("inlineCode",{parentName:"h3"},"plugin")),(0,r.kt)("p",null,"An optional object that defines a plugin loaded by Platformatic DB."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"path"))," (",(0,r.kt)("strong",{parentName:"p"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"): Relative path to plugin's entry point.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"typescript"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"): TypeScript configuration for the plugin."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"outDir"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): Relative path to the output directory for compiled JavaScript files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"build"))," (",(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"): If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the TS plugin is compiled automatically when Platformatic starts."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hotReload"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),") if ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or not specified, the plugin is loaded using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mcollina/fastify-sandbox"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-sandbox")),", otherwise is loaded directly using ",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"import")," and the hot reload is not enabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"object"),"): Optional plugin options."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugin": {\n    "path": "./my-plugin.js",\n    "hotReload": true\n  }\n}\n')))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"While hot reloading is useful for development, it is not recommended to use it in production.\nTo switch if off, set ",(0,r.kt)("inlineCode",{parentName:"p"},"hotReload")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," can also be an array, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugin": [{\n    "path": "./my-plugin.js"\n  }]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," can also be a string, or an array of strings."),(0,r.kt)("h3",{id:"watch"},(0,r.kt)("inlineCode",{parentName:"h3"},"watch")),(0,r.kt)("p",null,"Disable watching for file changes if set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". It can also be customized with the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ignore"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"): List of glob patterns to ignore when watching for changes. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not specified, ignore rule is not applied. Ignore option doesn't work for typescript files.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"allow"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"string[]"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"['*.js', '**/*.js']"),"): List of glob patterns to allow when watching for changes. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or not specified, allow rule is not applied. Allow option doesn't work for typescript files."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "watch": {\n    "ignore": ["*.mjs", "**/*.mjs"],\n    "allow": ["my-plugin.js", "plugins/*.js"]\n  }\n}\n')))),(0,r.kt)("h3",{id:"server"},(0,r.kt)("inlineCode",{parentName:"h3"},"server")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"required")," object with the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"hostname"))," (",(0,r.kt)("strong",{parentName:"p"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") \u2014 Hostname where Platformatic DB server will listen for connections.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"port"))," (",(0,r.kt)("strong",{parentName:"p"},"required"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),") \u2014 Port where Platformatic DB server will listen for connections.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"healthCheck"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Enables the health check endpoint."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Powered by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/under-pressure")),"."),(0,r.kt)("li",{parentName:"ul"},"The value can be an object, used to specify the interval between checks in milliseconds (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"5000"),")")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    ...\n    "healthCheck": {\n      "interval": 2000\n    }\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"cors"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"object"),") \u2014 Configuration for Cross-Origin Resource Sharing (CORS) headers."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All options will be passed to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cors"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/cors"))," plugin."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"logger"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"object"),") -- the ",(0,r.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#logger"},"logger configuration"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"pluginTimeout"))," (",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),") -- the milliseconds to wait for a Fastify plugin to load, see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.fastify.io/docs/latest/Reference/Server/#plugintimeout"},"fastify docs")," for more details."))),(0,r.kt)("h3",{id:"authorization"},(0,r.kt)("inlineCode",{parentName:"h3"},"authorization")),(0,r.kt)("p",null,"An optional object with the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adminSecret")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): A secret that will be required as a password to\naccess the Platformatic DB dashboard. This secret can also be sent in an\n",(0,r.kt)("inlineCode",{parentName:"li"},"x-platformatic-admin-secret")," HTTP header when performing GraphQL/REST API\ncalls. Use an ",(0,r.kt)("a",{parentName:"li",href:"#environment-variable-placeholders"},"environment variable placeholder"),"\nto securely provide the value for this setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roleKey")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"X-PLATFORMATIC-ROLE"),"): The name of the key in user\nmetadata that is used to store the user's roles. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/user-roles-metadata#role-configuration"},"Role configuration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anonymousRole")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"li"},"anonymous"),"): The name of the anonymous role. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/user-roles-metadata#role-configuration"},"Role configuration"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jwt")," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"): Configuration for the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/strategies#json-web-token-jwt"},"JWT authorization strategy"),".\nAny option accepted by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-jwt"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/jwt")),"\ncan be passed in this object.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret")," (required, ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"): The secret key that the JWT was signed with.\nSee the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-jwt#secret-required"},(0,r.kt)("inlineCode",{parentName:"a"},"@fastify/jwt")," documentation"),"\nfor accepted string and object values. Use an ",(0,r.kt)("a",{parentName:"li",href:"#environment-variable-placeholders"},"environment variable placeholder"),"\nto securely provide the value for this setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jwks")," (",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"): Configure authorization with JSON Web Key Sets (JWKS). See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/strategies#json-web-key-sets-jwks"},"JWKS documentation"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): Configure a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/strategies#jwt-custom-claim-namespace"},"JWT Custom Claim Namespace"),"\nto avoid name collisions."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"webhook")," (",(0,r.kt)("inlineCode",{parentName:"li"},"object"),"): Configuration for the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/strategies#webhook"},"Webhook authorization strategy"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," (required, ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"): Webhook URL that Platformatic DB will make a\nPOST request to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rules")," (",(0,r.kt)("inlineCode",{parentName:"li"},"array"),"): Authorization rules that describe the CRUD actions that\nusers are allowed to perform against entities. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/db/authorization/rules"},"Rules"),"\ndocumentation.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," object is present, but no rules are specified, no CRUD\noperations are allowed unless ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSecret")," is passed.")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "authorization": {\n    "jwt": {\n      "secret": "{PLT_AUTHORIZATION_JWT_SECRET}"\n    },\n    "rules": [\n       ...\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"environment-variable-placeholders"},"Environment variable placeholders"),(0,r.kt)("p",null,"The value for any configuration setting can be replaced with an environment variable\nby adding a placeholder in the configuration file, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"{PLT_SERVER_LOGGER_LEVEL}"),"."),(0,r.kt)("p",null,"All placeholders in a configuration must be available as an environment variable\nand must meet the ",(0,r.kt)("a",{parentName:"p",href:"#allowed-placeholder-names"},"allowed placeholder name")," rules."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="platformatic.db.json"',title:'"platformatic.db.json"'},'{\n  "core": {\n    "connectionString": "{DATABASE_URL}"\n  },\n  "server": {\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n    "port": "{PORT}"\n  }\n}\n')),(0,r.kt)("p",null,"Platformatic will replace the placeholders in this example with the environment\nvariables of the same name."),(0,r.kt)("h3",{id:"setting-environment-variables"},"Setting environment variables"),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file exists it will automatically be loaded by Platformatic using\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},"dotenv")),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:'title=".env"',title:'".env"'},"PLT_SERVER_LOGGER_LEVEL=info\nPORT=8080\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file must be located in the same folder as the Platformatic configuration\nfile or in the current working directory."),(0,r.kt)("p",null,"Environment variables can also be set directly on the commmand line, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"PLT_SERVER_LOGGER_LEVEL=debug npx platformatic db\n")),(0,r.kt)("h3",{id:"allowed-placeholder-names"},"Allowed placeholder names"),(0,r.kt)("p",null,"Only placeholder names prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"PLT_"),", or that are in this allow list, will be\ndynamically replaced in the configuration file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE_URL"))),(0,r.kt)("p",null,"This restriction is to avoid accidentally exposing system environment variables.\nAn error will be raised by Platformatic if it finds a configuration placeholder\nthat isn't allowed."),(0,r.kt)("p",null,"The default allow list can be extended by passing a ",(0,r.kt)("inlineCode",{parentName:"p"},"--allow-env")," CLI option with a\ncomma separated list of strings, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx platformatic db --allow-env=HOST,SERVER_LOGGER_LEVEL\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--allow-env")," is passed as an option to the CLI, it will be merged with the\ndefault allow list."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.kt)("p",null,"This is a bare minimum configuration for Platformatic DB. Uses a local ",(0,r.kt)("inlineCode",{parentName:"p"},"./db.sqlite")," SQLite database, with OpenAPI and GraphQL support, and with the dashboard enabled."),(0,r.kt)("p",null,"Server will listen to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3042")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": "3042"\n  },\n  "core": {\n    "connectionString": "\'sqlite://./db.sqlite\'",\n    "graphiql": true,\n    "openapi": true,\n    "graphql": true\n  },\n  "dashboard": true\n}\n')))}d.isMDXComponent=!0}}]);