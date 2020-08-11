(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{173:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return l})),e.d(t,"metadata",(function(){return c})),e.d(t,"rightToc",(function(){return d})),e.d(t,"default",(function(){return p}));var a=e(2),r=e(9),i=(e(0),e(180)),o=e(189),l={id:"card",title:"Card"},c={id:"card",title:"Card",description:"import { Button, Card } from 'jasper-ui'\r",source:"@site/docs/card.md",permalink:"/docs/card",editUrl:"https://github.com/COMPFEST/jasper/edit/master/docusaurus/docs/card.md",sidebar:"someSidebar",previous:{title:"Button",permalink:"/docs/button"},next:{title:"Alert Box",permalink:"/docs/alert-box"}},d=[{value:"Mini Information Card",id:"mini-information-card",children:[{value:"Usage",id:"usage",children:[]},{value:"Structure",id:"structure",children:[]},{value:"Code",id:"code",children:[]},{value:"Result",id:"result",children:[]},{value:"Props",id:"props",children:[]}]},{value:"Large Card",id:"large-card",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Structure",id:"structure-1",children:[]},{value:"Code",id:"code-1",children:[]},{value:"Result",id:"result-1",children:[]},{value:"Props",id:"props-1",children:[]}]},{value:"Article Card",id:"article-card",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Structure",id:"structure-2",children:[]},{value:"Code",id:"code-2",children:[]},{value:"Result",id:"result-2",children:[]},{value:"Props",id:"props-2",children:[]}]},{value:"Carousel Card",id:"carousel-card",children:[{value:"Usage",id:"usage-3",children:[]},{value:"Structure",id:"structure-3",children:[]},{value:"Code",id:"code-3",children:[]},{value:"Result",id:"result-3",children:[]},{value:"Props",id:"props-3",children:[]}]}],b={rightToc:d};function p(n){var t=n.components,e=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,e,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Our design implement cards as a mean to display popping informations and divide sections, either individually or as a group. Cards are also used for pop-up and carousel components."),Object(i.b)("h2",{id:"mini-information-card"},"Mini Information Card"),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"We use mini information cards to display information meant to be important. It is also used to group and organize simple informations for better display to user."),Object(i.b)("h3",{id:"structure"},"Structure"),Object(i.b)("p",null,"An information card may consist of multiple components. The following are the general structure for a typical mini information card."),Object(i.b)("img",{src:"/img/card-example.svg",alt:""}),Object(i.b)("h3",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Card\n    title="Card Title"\n    text="Hello! This is a sample text more catchy than the typical lorem ipsum text"\n    linkContent="CLICKABLE TEXT"\n    href="https://www.compfest.id/"\n/>\n')),Object(i.b)("h3",{id:"result"},"Result"),Object(i.b)(o.b,{title:"Card Title",text:"Hello! This is a sample text more catchy than the typical lorem ipsum text",linkContent:"CLICKABLE TEXT",href:"https://www.compfest.id/",mdxType:"Card"}),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Title of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"linkContent"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displayed text of the link")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"href"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Link url")))),Object(i.b)("h2",{id:"large-card"},"Large Card"),Object(i.b)("h3",{id:"usage-1"},"Usage"),Object(i.b)("p",null,"We used large cards to differentiate sections in a page. It is also used to group and organize multiple related informations for more better and focused display to user."),Object(i.b)("h3",{id:"structure-1"},"Structure"),Object(i.b)("p",null,"A large card may consist of multiple components. The following are the general structure for a typical large card."),Object(i.b)("img",{src:"/img/large-card-example.svg",alt:""}),Object(i.b)("h3",{id:"code-1"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Card\n    type='large-card'\n    image=\"/img/large-card-img.png\"\n    title='Card Title That is Very Long to Decribe Something'\n    miniTitle='Card Mini Title'\n    text='COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem. COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem.'\n    buttonTop={<Button> Hello </Button>}\n    buttonBottom={<Button> Hello </Button>}\n  />\n")),Object(i.b)("h3",{id:"result-1"},"Result"),Object(i.b)(o.b,{type:"large-card",image:"/img/large-card-img.png",title:"Card Title That is Very Long to Decribe Something",miniTitle:"Card Mini Title",text:"COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem. COMPFEST is an annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia. Lorem ipsum dolor sit amet Lorem.",buttonTop:Object(i.b)(o.a,{mdxType:"Button"}," Hello "),buttonBottom:Object(i.b)(o.a,{mdxType:"Button"}," Hello "),mdxType:"Card"}),Object(i.b)("h3",{id:"props-1"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Title of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"content of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displayed image")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"miniTitle"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Card mini title")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonTop"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Upper button section")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonBottom"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Lower button section")))),Object(i.b)("h2",{id:"article-card"},"Article Card"),Object(i.b)("h3",{id:"usage-2"},"Usage"),Object(i.b)("p",null,"We used article card to display thumbnail of an article from Medium page. It is also used to group and organize multiple related articles for more better and focused display to user."),Object(i.b)("h3",{id:"structure-2"},"Structure"),Object(i.b)("p",null,"An article card may consist of multiple components. The following are the general structure for a typical article card."),Object(i.b)("img",{src:"/img/article-card-example.svg",alt:""}),Object(i.b)("h3",{id:"code-2"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Card\n    type="article-card"\n    title="How To Choose Between Wireless and Wired Charging?"\n    category="TECHNOLOGY"\n    image="/img/article-card-img.png"\n/>\n')),Object(i.b)("h3",{id:"result-2"},"Result"),Object(i.b)(o.b,{type:"article-card",title:"How To Choose Between Wireless and Wired Charging?",category:"TECHNOLOGY",image:"/img/article-card-img.png",mdxType:"Card"}),Object(i.b)("h3",{id:"props-2"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Title of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"category"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Category of the card")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displayed image")))),Object(i.b)("h2",{id:"carousel-card"},"Carousel Card"),Object(i.b)("h3",{id:"usage-3"},"Usage"),Object(i.b)("p",null,"We used carousel cards to display multiple informations as a group. Typically, the information presented at carousel card are simple informations with small number of text, relying on assets."),Object(i.b)("h3",{id:"structure-3"},"Structure"),Object(i.b)("p",null,"A carousel card may consist of multiple components. The following are the general structure for a typical carousel card."),Object(i.b)("img",{src:"/img/carousel-card-example.svg",alt:""}),Object(i.b)("h3",{id:"code-3"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Card\n    type="carousel-card"\n    caption="Card Caption"\n    image="/img/article-card-img.png"\n/>\n')),Object(i.b)("h3",{id:"result-3"},"Result"),Object(i.b)(o.b,{type:"carousel-card",caption:"Card Caption",image:"/img/article-card-img.png",mdxType:"Card"}),Object(i.b)("h3",{id:"props-3"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"image"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Displayed image")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"caption"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Caption of the card")))))}p.isMDXComponent=!0},189:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return h}));e(190),e(186),e(24),e(18),e(19),e(53),e(52);var a=e(0),r=e.n(a),i=e(40),o=e.n(i),l=e(198),c=e(199);function d(n,t){return t||(t=n.slice(0)),n.raw=t,n}function b(){var n=d(["\n  background: linear-gradient(111.34deg, #D418B6 0%, #F1185E 100%);\n  border-radius: 100px;\n  border: none;\n  padding: 12px 22px;\n  cursor: pointer;\n  color: white;\n  font-size: 16px;\n\n  &.secondary {\n    background: transparent;\n    border: 2px solid #FF008B;\n    padding: 10px 20px;\n    color: #FF008B;\n  }\n\n  &.nude {\n    background: transparent;\n  }\n\n  &.bold {\n    font-weight: bold;\n  }\n\n  &:hover {\n    opacity: 0.75;\n  }\n"]);return b=function(){return n},n}var p=l.a.button(b()),u=function(n){return n.href?n.download?r.a.createElement("a",{href:n.href,download:!0},r.a.createElement(p,n,n.children)):r.a.createElement("a",{href:n.href},r.a.createElement(p,n,n.children)):r.a.createElement(p,n,n.children)};function m(){var n=d(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  position: fixed;\n  z-index: 1000;\n  background-color: #14062f;\n  overflow: hidden;\n  padding-bottom: 500px;\n\n  .container {\n    width: 100%;\n    text-align: center;\n    align-self: center;\n  }\n\n  .info-message {\n    margin: auto;\n    max-width: 650px;\n    width: 80%;\n    padding-bottom: 30px;\n    font-size: 20px;\n    color: white;\n  }\n\n  button {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n\n  button:nth-of-type(1) {\n    background: transparent;\n    border: 1px solid #ffffff;\n  }\n"]);return m=function(){return n},n}u.propTypes={href:o.a.string,children:o.a.string},u.defaultProps={type:"button"};l.a.div(m());function s(){var n=d(["\n  & * {\n    margin: 0;\n  }\n\n  #card-body {\n    background: #F3F3F3;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  #mini-information-card {\n    & div {\n      padding: 25px 20px;\n      width: 13rem;\n    }\n  }\n\n  #title {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 22px;\n    color: #000000;\n    margin: 0;\n  }\n\n  #content {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 177%;\n    color: #000000;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n\n  #link {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 14px;\n    color: #747373;\n    text-decoration: none;\n  }\n\n  #large-card {\n    width: 50rem;\n\n    #img-container {\n      margin-right: 24px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    #text {\n      line-height: 140%;\n      text-align: justify;\n    }\n\n    #body {\n      padding: 32px 0;\n    }\n\n    & #card-body {\n      display: flex;\n    }\n\n    .btn-container {\n      padding: 20px 0 32px 0;\n    }\n  }\n\n  #article-card {\n    width: 30rem;\n    & #card-body {\n      padding: 24px;\n    }\n\n    #img-container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    h2 {\n      font-weight: normal;\n      font-size: 1rem;\n      margin-top: 20px;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 1.5rem;\n    }\n  }\n\n  #carousel-card {\n    & #card-body {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 32px;\n      width: max-content;\n    }\n\n    h1 {\n      font-weight: bold;\n      font-size: 2em;\n    }\n  }\n"]);return s=function(){return n},n}var g=l.a.div(s()),h=function(n){return r.a.createElement(g,null,function(n){switch(n.type){case"large-card":return t=n.title,e=n.text,a=n.image,i=n.miniTitle,o=n.buttonTop,l=n.buttonBottom,r.a.createElement("div",{id:"large-card"},r.a.createElement("div",{id:"card-body"},r.a.createElement("div",{id:"img-container"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{id:"body"},r.a.createElement("h3",{id:"mini-title"},i),r.a.createElement("h1",{id:"title"},t),r.a.createElement("div",{className:"btn-container"},o),r.a.createElement("p",{id:"text"},e),l)));case"article-card":return function(n,t,e){return r.a.createElement("div",{id:"article-card"},r.a.createElement("div",{id:"card-body"},r.a.createElement("div",{id:"img-container"},r.a.createElement("img",{src:e,alt:""})),r.a.createElement("h2",null,t),r.a.createElement("h1",null,n)))}(n.title,n.category,n.image);case"carousel-card":return function(n,t){return r.a.createElement("div",{id:"carousel-card"},r.a.createElement("div",{id:"card-body"},r.a.createElement("div",{id:"img-container"},r.a.createElement("img",{src:t,alt:""})),r.a.createElement("h1",{id:"title"},n)))}(n.caption,n.image);default:return function(n,t,e,a){return r.a.createElement("div",{id:"mini-information-card"},r.a.createElement("div",{id:"card-body"},r.a.createElement("h1",{id:"title"},n),r.a.createElement("p",{id:"content"},t),r.a.createElement("a",{id:"link",href:a},e)))}(n.title,n.text,n.linkContent,n.href)}var t,e,a,i,o,l}(n))};function O(){var n=d(["\n  color: ",";\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  /* Hide the browser's default checkbox */\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border: 1px solid ",";\n    border-radius: 2px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  &:hover input ~ .checkmark {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  input:checked ~ .checkmark {\n    background-color: ",';\n  }\n\n  /* Style the checkmark/indicator */\n  .checkmark:after {\n    content: "";\n    display: none;\n    position: absolute;\n    left: 7px;\n    top: 3px;\n    width: 5px;\n    height: 10px;\n    border: solid ',";\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n\n  /* Show the checkmark when checked */\n  input:checked ~ .checkmark:after {\n    display: block;\n  }\n"]);return O=function(){return n},n}function j(){var n=d(["\n  position: absolute;\n  margin: 15px;\n  color: ",';\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: -5px;\n    display: block;\n    left: 2.5rem;\n    width: 1px;\n    height: calc(1rem + 10px);\n    background: ',";\n  }\n"]);return j=function(){return n},n}function f(){var n=d(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n\n  &:checked + ",":before {\n    background: ",";\n  }\n"]);return f=function(){return n},n}function x(){var n=d(["\n  display: block;\n  color: ",';\n\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 1.2rem;\n    height: 1.2rem;\n    vertical-align: -0.25rem;\n    border-radius: 1.2rem;\n    border: 1px solid ',";\n    margin-right: 0.6rem;\n    transition: background 0.2s ease;\n    box-shadow: inset 0 0 0 0.3rem ",";\n  }\n"]);return x=function(){return n},n}function y(){var n=d(["\n  width: calc(100% - 34px);\n  padding: 10px 15px;\n  color: ",";\n  background-color: transparent;\n  border: 2px solid ",";\n  border-radius: 5px;\n  font-family: inherit;\n\n  &::placeholder {\n    color: ",";\n    opacity: 0.5;\n  }\n"]);return y=function(){return n},n}h.propTypes={text:o.a.string,linkContent:o.a.string,href:o.a.string,type:o.a.string,title:o.a.string,caption:o.a.string,miniTitle:o.a.string,buttonTop:o.a.object,buttonBottom:o.a.object};Object(l.a)(c.a)(y(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}));var v=l.a.span(x(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.background}));Object(l.a)(c.a)(f(),v,(function(n){return n.theme.colors.primary})),l.a.span(j(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary})),l.a.label(O(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.background}));function N(){var n=d(["\n  padding: 8px 12px;\n  width: 100%;\n"]);return N=function(){return n},n}function w(){var n=d(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return w=function(){return n},n}function k(){var n=d(["\n  list-style-type: none;\n  height: fit-content;\n  width: 300px;\n  padding-left: 0;\n  background: #f3f3f3;\n  z-index: 100;\n  overflow: auto;\n  margin-top: 0;\n  font-weight: 400;\n\n  .accent-background {\n    background: #e5e5e5;\n  }\n"]);return k=function(){return n},n}function C(){var n=d(["\n  display: flex;\n  align-items: center;\n  border: 2px solid #000000;\n  border-radius: 5px;\n  background: #dbdbdb;\n  font-weight: 400;\n  padding: 8px 12px;\n  justify-content: space-between;\n  width: 300px;\n  box-sizing: border-box;\n  &:active,\n  &:focus {\n    outline: 0;\n  }\n"]);return C=function(){return n},n}function T(){var n=d(["\n  margin-top: 8px;\n  width: fit-content;\n"]);return T=function(){return n},n}function E(){var n=d(["\n  p {\n    margin: 0;\n  }\n\n  .rotated {\n    transform-box: fill-box;\n    transform-origin: center;\n    transform: rotate(180deg);\n  }\n\n  .background-active {\n    background: #f3f3f3;\n  }\n"]);return E=function(){return n},n}function S(){var n=d(["\n  font-weight: 500;\n"]);return S=function(){return n},n}l.a.label(S()),l.a.div(E()),l.a.div(T()),l.a.div(C()),l.a.ul(k()),l.a.div(w()),l.a.li(N());function M(){var n=d(["\n  .small-nav {\n    margin-top: 30px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    font-size: 1.2rem;\n    overflow-x: auto;\n    color: white;\n  }\n\n  .small-nav div {\n    display: block;\n    margin: 0 10px;\n    cursor: pointer;\n    white-space: nowrap;\n\n    &:first-child {\n      margin-left: 0;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media (max-width: 992px) {\n    .small-nav {\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .nav-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);return M=function(){return n},n}var B=l.a.div(M());function L(){var n=d(["\n  display: flex;\n  justify-content: space-between;\n\n  .email-input {\n    background-color: rgba(243, 243, 243, 0.4);\n    border-radius: 5px;\n    color: white;\n    padding: 0.5rem;\n    padding-right: 2.5rem;\n    border: 0;\n    margin-right: 1rem;\n  }\n\n  .email-input::placeholder {\n    color: rgba(243, 243, 243, 0.5);\n  }\n\n  .subscribe-button {\n    border-radius: 50px;\n    background-color: #fdd262;\n    color: #001c2c;\n    font-size: 1rem;\n    border: 0;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n\n  .disabled {\n    cursor: initial;\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n\n    .email-input {\n      width: 75%;\n      margin-bottom: 0.5rem;\n    }\n\n    .subscribe-button {\n      max-width: 50%;\n      margin-top: 0.7rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]);return L=function(){return n},n}(function(n){var t,e;function a(t){var e;return(e=n.call(this,t)||this).state={index:0},e}return e=n,(t=a).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,a.prototype.render=function(){var n=this,t=this.props.navItems;return r.a.createElement(B,null,r.a.createElement("div",{className:"small-nav"},t.map((function(t,e){return r.a.createElement("div",{key:e,onClick:function(){return n.setState({index:e})},style:{fontWeight:n.state.index===e?"bold":"normal"}},t.title)}))),r.a.createElement("div",{className:"nav-content"},t[this.state.index].component))},a}(a.Component)).propTypes={navItems:o.a.array.isRequired};l.a.div(L());function z(){var n=d(['\n  background-color: #131313;\n  height: 240px;\n  padding: 3rem 7rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: "DM Sans", "itc";\n\n  #ft-left {\n    max-width: 40%;\n  }\n\n  div.row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  div.column {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ft-section-title {\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    display: block;\n  }\n\n  .slogan {\n    font-size: 18px;\n    letter-spacing: 0.04em;\n    margin-top: .5rem;\n  }\n\n  .deskripsi-singkat {\n    line-height: 1.5;\n  }\n\n  .separator {\n    /* border: 0.4px solid white; */\n    margin: 1.5rem 0;\n  }\n\n  #copyright {\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: block;\n  }\n\n  #footer-link > a {\n    margin-right: 1rem;\n  }\n\n  #socmed {\n    display: flex;\n    margin-bottom: 1.5rem;\n    #fb {\n      height: 25px;\n      width: 25px;\n      margin-right: 22px;\n    }\n\n    #tw {\n      width: 30px;\n      height: 25px;\n      margin-right: 22px;\n    }\n\n    #yb {\n      width: 32px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #ig,\n    #ln {\n      width: 23px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #in {\n      width: 23px;\n      height: 22px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: auto;\n    padding: 2rem 2rem;\n    text-align: center;\n\n    div.row,\n    div.column {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    #ft-left {\n      max-width: 100%;\n      margin-bottom: 1rem;\n    }\n\n    #socmed {\n      margin-bottom: 2.5rem;\n      #fb {\n        height: 17px;\n        width: 16px;\n        padding-right: 5px;\n      }\n\n      #tw {\n        width: 20px;\n        height: 16px;\n        padding-right: 5px;\n      }\n\n      #yb {\n        width: 21px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #ig,\n      #ln {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #in {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n    }\n  }\n']);return z=function(){return n},n}l.a.div(z())}}]);