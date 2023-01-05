"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[97243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Monitoring with Prometheus and Grafana",s={unversionedId:"guides/monitoring",id:"version-0.5.0/guides/monitoring",title:"Monitoring with Prometheus and Grafana",description:"Prometheus is open source system and alerting toolkit for monitoring and alerting. It's a time series database that collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.",source:"@site/versioned_docs/version-0.5.0/guides/monitoring.md",sourceDirName:"guides",slug:"/guides/monitoring",permalink:"/docs/0.5.0/guides/monitoring",draft:!1,tags:[],version:"0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"Configure JWT with Auth0",permalink:"/docs/0.5.0/guides/jwt-auth0"},next:{title:"Reference",permalink:"/docs/0.5.0/category/reference"}},p={},l=[{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"Grafana Configuration",id:"grafana-configuration",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monitoring-with-prometheus-and-grafana"},"Monitoring with Prometheus and Grafana"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Prometheus")," is open source system and alerting toolkit for monitoring and alerting. It's a time series database that collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.\n",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/oss/grafana/"},"Grafana")," is an open source visualization and analytics software. "),(0,r.kt)("p",null,"It's a pretty common solution to use Prometheus to collect and store monitoring data, and Grafana to visualize it."),(0,r.kt)("p",null,"Platformatic can be configured to expose Prometheus metrics: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'...\n  "metrics": {\n    "port": 9091,\n    "auth": {\n      "username": "platformatic",\n      "password": "mysecret"\n    }\n  }\n...\n')),(0,r.kt)("p",null,"In this case, we are exposing the metrics on port 9091 (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),"), and we are using basic authentication to protect the endpoint.\nWe can also specify the IP address to bind to (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),").\nNote that the metrics port is not the default in this configuration. This is because if you want to test the integration running both Prometheus and Platformatic on the same host, Prometheus starts on ",(0,r.kt)("inlineCode",{parentName:"p"},"9090")," port too.\nAll the configuration settings are optional. To use the default settings, set ",(0,r.kt)("inlineCode",{parentName:"p"},'"metrics": true'),". See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.5.0/reference/db/configuration#metrics"},"configuration reference")," for more details."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.5.0/reference/db/configuration#environment-variable-placeholders"},"environment variable placeholders")," in your Platformatic DB configuration file to avoid exposing credentials.")),(0,r.kt)("h2",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,r.kt)("p",null,"This is an example of a minimal Prometheus configuration to scrape the metrics from Platformatic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 15s\n  scrape_timeout: 10s\n  evaluation_interval: 1m\nscrape_configs:\n  - job_name: 'platformatic'\n    scrape_interval: 2s\n    metrics_path: /metrics\n    scheme: http\n    basic_auth:\n      username: platformatic\n      password: mysecret\n    static_configs:\n      - targets: ['192.168.69.195:9091']\n        labels:\n          group: 'platformatic'\n")),(0,r.kt)("p",null,"We specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," configuring the IP address and the port where Platformatic is running, and we specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," to use for basic authentication. The ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics")," path is the one used by Platformatic. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," address is not a loopback address so this will work even with Prometheus running in docker on the same host (see below), please change it to your host ip."),(0,r.kt)("p",null,"To test this configuration, we can run Prometheus locally using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker-compose")),", so please be sure to have both correctly installed.\nSave the above configuration in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"./prometheus/prometheus.yml")," and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.7\"\n\nservices:\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - prometheus_data:/prometheus\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml\n    command:\n      - '--config.file=/etc/prometheus/prometheus.yml'\n    ports:\n      - '9090:9090'\n\nvolumes:\n  prometheus_data: {}\n\n")),(0,r.kt)("p",null,"Then run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," and open ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9090")," in your browser. You should see the Prometheus dashboard, and you can also query the metrics, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'{group="platformatic"}'),". See ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus docs")," for more information on querying and metrics."),(0,r.kt)("h2",{id:"grafana-configuration"},"Grafana Configuration"),(0,r.kt)("p",null,"Let's see how we can configure Grafana to chart some Platformatics metrics from Prometheus.\nChange the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana")," service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.7\"\nservices:\n\n  prometheus:\n    image: prom/prometheus:latest\n    volumes:\n      - prometheus_data:/prometheus\n      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml\n    command:\n      - '--config.file=/etc/prometheus/prometheus.yml'\n    ports:\n      - '9090:9090'\n\n  grafana:\n    image: grafana/grafana:latest\n    volumes:\n      - grafana_data:/var/lib/grafana\n    environment:\n      - GF_SECURITY_ADMIN_PASSWORD=pleasechangeme\n    depends_on:\n      - prometheus\n    ports:\n      - '3000:3000'\n\nvolumes:\n  prometheus_data: {}\n  grafana_data: {}\n\n")),(0,r.kt)("p",null,"In Grafana, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Sources")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Data Source"),", and select Prometheus.\nIn the URL field, specify the URL of the Prometheus server, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"http://prometheus:9090")," (the name of the service in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file), then Save & Test."),(0,r.kt)("p",null,"Now we can create a dashboard and add panels to it. Select the Prometheus data source, and add queries. You should see the metrics exposed by Platformatic."),(0,r.kt)("p",null,"It's also possible to import pre-configured dashboards, like ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/12230-node-js-dashboard/"},"this one")," from Grafana.com."))}m.isMDXComponent=!0}}]);