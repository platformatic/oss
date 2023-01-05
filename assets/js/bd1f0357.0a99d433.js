"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[36150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const i={credits:"https://github.com/fastify/fastify/blob/main/docs/Guides/Style-Guide.md"},r="Documentation Style Guide",s={unversionedId:"contributing/documentation-style-guide",id:"version-0.12.1/contributing/documentation-style-guide",title:"Documentation Style Guide",description:"Welcome to the Platformatic Documentation Style Guide. This guide is here to provide",source:"@site/versioned_docs/version-0.12.1/contributing/documentation-style-guide.md",sourceDirName:"contributing",slug:"/contributing/documentation-style-guide",permalink:"/docs/contributing/documentation-style-guide",draft:!1,tags:[],version:"0.12.1",frontMatter:{credits:"https://github.com/fastify/fastify/blob/main/docs/Guides/Style-Guide.md"}},l={},u=[{value:"Who is This Guide For?",id:"who-is-this-guide-for",level:2},{value:"Before you Write",id:"before-you-write",level:2},{value:"Consider Your Audience",id:"consider-your-audience",level:3},{value:"Get Straight to the Point",id:"get-straight-to-the-point",level:3},{value:"Images and Video Should Enhance the Written Documentation",id:"images-and-video-should-enhance-the-written-documentation",level:3},{value:"Avoid Plagiarism",id:"avoid-plagiarism",level:3},{value:"Word Choice",id:"word-choice",level:2},{value:"When to use the Second Person &quot;you&quot; as the Pronoun",id:"when-to-use-the-second-person-you-as-the-pronoun",level:3},{value:"When to Avoid the Second Person &quot;you&quot; as the Pronoun",id:"when-to-avoid-the-second-person-you-as-the-pronoun",level:2},{value:"Avoid Using Contractions",id:"avoid-using-contractions",level:3},{value:"Avoid Using Condescending Terms",id:"avoid-using-condescending-terms",level:3},{value:"Starting With a Verb",id:"starting-with-a-verb",level:3},{value:"Grammatical Moods",id:"grammatical-moods",level:3},{value:"Use <strong>Active</strong> Voice Instead of <strong>Passive</strong>",id:"use-active-voice-instead-of-passive",level:3},{value:"Writing Style",id:"writing-style",level:2},{value:"Documentation Titles",id:"documentation-titles",level:3},{value:"Hyperlinks",id:"hyperlinks",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-style-guide"},"Documentation Style Guide"),(0,a.kt)("p",null,"Welcome to the ",(0,a.kt)("em",{parentName:"p"},"Platformatic Documentation Style Guide"),". This guide is here to provide\nyou with a conventional writing style for users writing developer documentation on\nour Open Source framework. Each topic is precise and well explained to help you write\ndocumentation users can easily understand and implement."),(0,a.kt)("h2",{id:"who-is-this-guide-for"},"Who is This Guide For?"),(0,a.kt)("p",null,"This guide is for anyone who loves to build with Platformatic or wants to contribute\nto our documentation. You do not need to be an expert in writing technical\ndocumentation. This guide is here to help you."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/platformatic/platformatic/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md"),"\nfile on GitHub to join our Open Source folks."),(0,a.kt)("h2",{id:"before-you-write"},"Before you Write"),(0,a.kt)("p",null,"You should have a basic understanding of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JavaScript"),(0,a.kt)("li",{parentName:"ul"},"Node.js"),(0,a.kt)("li",{parentName:"ul"},"Git"),(0,a.kt)("li",{parentName:"ul"},"GitHub"),(0,a.kt)("li",{parentName:"ul"},"Markdown"),(0,a.kt)("li",{parentName:"ul"},"HTTP"),(0,a.kt)("li",{parentName:"ul"},"NPM")),(0,a.kt)("h3",{id:"consider-your-audience"},"Consider Your Audience"),(0,a.kt)("p",null,"Before you start writing, think about your audience. In this case, your audience\nshould already know HTTP, JavaScript, NPM, and Node.js. It is necessary to keep\nyour readers in mind because they are the ones consuming your content. You want\nto give as much useful information as possible. Consider the vital things they\nneed to know and how they can understand them. Use words and references that\nreaders can relate to easily. Ask for feedback from the community, it can help\nyou write better documentation that focuses on the user and what you want to\nachieve."),(0,a.kt)("h3",{id:"get-straight-to-the-point"},"Get Straight to the Point"),(0,a.kt)("p",null,"Give your readers a clear and precise action to take. Start with what is most\nimportant. This way, you can help them find what they need faster. Mostly,\nreaders tend to read the first content on a page, and many will not scroll\nfurther."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Less like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Colons are very important to register a parametric path. It lets\nthe framework know there is a new parameter created. You can place the colon\nbefore the parameter name so the parametric path can be created.")),(0,a.kt)("p",null,"More Like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To register a parametric path, put a colon before the parameter\nname. Using a colon lets the framework know it is a parametric path and not a\nstatic path.")),(0,a.kt)("h3",{id:"images-and-video-should-enhance-the-written-documentation"},"Images and Video Should Enhance the Written Documentation"),(0,a.kt)("p",null,"Images and video should only be added if they complement the written\ndocumentation, for example to help the reader form a clearer mental model of a\nconcept or pattern."),(0,a.kt)("p",null,"Images can be directly embedded, but videos should be included by linking to an\nexternal site, such as YouTube. You can add links by using\n",(0,a.kt)("inlineCode",{parentName:"p"},"[Title](https://www.websitename.com)")," in the Markdown."),(0,a.kt)("h3",{id:"avoid-plagiarism"},"Avoid Plagiarism"),(0,a.kt)("p",null,"Make sure you avoid copying other people's work. Keep it as original as\npossible. You can learn from what they have done and reference where it is from\nif you used a particular quote from their work."),(0,a.kt)("h2",{id:"word-choice"},"Word Choice"),(0,a.kt)("p",null,"There are a few things you need to use and avoid when writing your documentation\nto improve readability for readers and make documentation neat, direct, and\nclean."),(0,a.kt)("h3",{id:"when-to-use-the-second-person-you-as-the-pronoun"},'When to use the Second Person "you" as the Pronoun'),(0,a.kt)("p",null,'When writing articles or guides, your content should communicate directly to\nreaders in the second person ("you") addressed form. It is easier to give them\ndirect instruction on what to do on a particular topic. To see an example, visit\nthe ',(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start-guide"},"Quick Start Guide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Less like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We can use the following plugins.")),(0,a.kt)("p",null,"More like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use the following plugins.")),(0,a.kt)("p",null,"According to ",(0,a.kt)("a",{parentName:"p",href:"#"},"Wikipedia"),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"You"))," is usually a second person pronoun.\nAlso, used to refer to an indeterminate person, as a more common alternative\nto a very formal indefinite pronoun."),(0,a.kt)("p",null,"To recap, ",(0,a.kt)("strong",{parentName:"p"},'use "you" when writing articles or guides.')),(0,a.kt)("h2",{id:"when-to-avoid-the-second-person-you-as-the-pronoun"},'When to Avoid the Second Person "you" as the Pronoun'),(0,a.kt)("p",null,'One of the main rules of formal writing such as reference documentation, or API\ndocumentation, is to avoid the second person ("you") or directly addressing the\nreader.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Less like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use the following recommendation as an example.")),(0,a.kt)("p",null,"More like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As an example, the following recommendations should be\nreferenced.")),(0,a.kt)("p",null,"To view a live example, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/db/configuration"},"Decorators"),"\nreference document."),(0,a.kt)("p",null,"To recap, ",(0,a.kt)("strong",{parentName:"p"},'avoid "you" in reference documentation or API documentation.')),(0,a.kt)("h3",{id:"avoid-using-contractions"},"Avoid Using Contractions"),(0,a.kt)("p",null,'Contractions are the shortened version of written and spoken forms of a word,\ni.e. using "don\'t" instead of "do not". Avoid contractions to provide a more\nformal tone.'),(0,a.kt)("h3",{id:"avoid-using-condescending-terms"},"Avoid Using Condescending Terms"),(0,a.kt)("p",null,"Condescending terms are words that include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Just"),(0,a.kt)("li",{parentName:"ul"},"Easy"),(0,a.kt)("li",{parentName:"ul"},"Simply"),(0,a.kt)("li",{parentName:"ul"},"Basically"),(0,a.kt)("li",{parentName:"ul"},"Obviously")),(0,a.kt)("p",null,"The reader may not find it easy to use Platformatic; avoid\nwords that make it sound simple, easy, offensive, or insensitive. Not everyone\nwho reads the documentation has the same level of understanding."),(0,a.kt)("h3",{id:"starting-with-a-verb"},"Starting With a Verb"),(0,a.kt)("p",null,"Mostly start your description with a verb, which makes it simple and precise for\nthe reader to follow. Prefer using present tense because it is easier to read\nand understand than the past or future tense."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null," Less like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There is a need for Node.js to be installed before you can be\nable to use Platformatic.")),(0,a.kt)("p",null," More like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Install Node.js to make use of Platformatic.")),(0,a.kt)("h3",{id:"grammatical-moods"},"Grammatical Moods"),(0,a.kt)("p",null,"Grammatical moods are a great way to express your writing. Avoid sounding too\nbossy while making a direct statement. Know when to switch between indicative,\nimperative, and subjunctive moods."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Indicative")," - Use when making a factual statement or question."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Since there is no testing framework available, "Platformatic recommends ways\nto write tests".')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Imperative")," - Use when giving instructions, actions, commands, or when you\nwrite your headings."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Install dependencies before starting development.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subjunctive")," - Use when making suggestions, hypotheses, or non-factual\nstatements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reading the documentation on our website is recommended to get\ncomprehensive knowledge of the framework.")),(0,a.kt)("h3",{id:"use-active-voice-instead-of-passive"},"Use ",(0,a.kt)("strong",{parentName:"h3"},"Active")," Voice Instead of ",(0,a.kt)("strong",{parentName:"h3"},"Passive")),(0,a.kt)("p",null,"Using active voice is a more compact and direct way of conveying your\ndocumentation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Passive:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The node dependencies and packages are installed by npm.")),(0,a.kt)("p",null,"Active:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"npm installs packages and node dependencies.")),(0,a.kt)("h2",{id:"writing-style"},"Writing Style"),(0,a.kt)("h3",{id:"documentation-titles"},"Documentation Titles"),(0,a.kt)("p",null,"When creating a new guide, API, or reference in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs/")," directory, use\nshort titles that best describe the topic of your documentation. Name your files\nin kebab-cases and avoid Raw or camelCase. To learn more about kebab-case you\ncan visit this medium article on ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/better-programming/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841"},"Case\nStyles"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"hook-and-plugins.md"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"adding-test-plugins.md"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"removing-requests.md"))),(0,a.kt)("h3",{id:"hyperlinks"},"Hyperlinks"),(0,a.kt)("p",null,"Hyperlinks should have a clear title of what it references. Here is how your\nhyperlink should look:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-MD"},'\x3c!-- More like this --\x3e\n\n// Add clear & brief description\n[Fastify Plugins] (https://www.fastify.io/docs/latest/Plugins/)\n\n\x3c!--Less like this --\x3e\n\n// incomplete description\n[Fastify] (https://www.fastify.io/docs/latest/Plugins/)\n\n// Adding title in link brackets\n[](https://www.fastify.io/docs/latest/Plugins/ "fastify plugin")\n\n// Empty title\n[](https://www.fastify.io/docs/latest/Plugins/)\n\n// Adding links localhost URLs instead of using code strings (``)\n[http://localhost:3000/](http://localhost:3000/)\n\n')),(0,a.kt)("p",null,"Include in your documentation as many essential references as possible, but\navoid having numerous links when writing to avoid distractions."))}c.isMDXComponent=!0}}]);