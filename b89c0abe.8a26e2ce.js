(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{172:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return l})),t.d(e,"rightToc",(function(){return d})),t.d(e,"default",(function(){return p}));var r=t(2),o=t(9),i=(t(0),t(186)),a=t(190),c={id:"small-nav",title:"Small Nav"},l={id:"small-nav",title:"Small Nav",description:"import { SmallNav, Card } from 'jasper-ui'",source:"@site/docs/small-nav.md",permalink:"/docs/small-nav",editUrl:"https://github.com/COMPFEST/jasper/edit/master/docusaurus/docs/small-nav.md",sidebar:"someSidebar",previous:{title:"Form Fields",permalink:"/docs/form-fields"},next:{title:"Carousel",permalink:"/docs/carousel"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Result",id:"result",children:[]},{value:"Props",id:"props",children:[]}],u={rightToc:d};function p(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Small Nav is a component of navigation. Small Nav acts like Navbar but it used to show different components, not a different page."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Small Nav contains titles, each of them represents its component that navigated by its title. Therefore, we use Small Nav to determine which component will be displayed."),Object(i.b)("h3",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const navItems = [\n  {\n    title: "navitem1",\n    component: <Card title="Component1" text="Hello world, this is component1." />\n  },\n  {\n    title: "navitem2",\n    component: <Card title="Component2" text="This is component2, just to make sure you actually changed the state." />\n  },\n  {\n    title: "navitem3",\n    component: <Card title="Component3" text="Ooh, look! Another change" />\n  },\n  {\n    title: "navitem4",\n    component: <Card title="Component4" text="Lorem ipsum dolor sit amet" />\n  },\n]\n\n<SmallNav navItems={navItems} />\n')),Object(i.b)("h3",{id:"result"},"Result"),Object(i.b)(a.d,{navItems:[{title:"navitem1",component:Object(i.b)(a.b,{title:"Component1",text:"Hello world, this is component1.",mdxType:"Card"})},{title:"navitem2",component:Object(i.b)(a.b,{title:"Component2",text:"This is component2, just to make sure you actually changed the state.",mdxType:"Card"})},{title:"navitem3",component:Object(i.b)(a.b,{title:"Component3",text:"Ooh, look! Another change",mdxType:"Card"})},{title:"navitem4",component:Object(i.b)(a.b,{title:"Component4",text:"Lorem ipsum dolor sit amet",mdxType:"Card"})}],mdxType:"SmallNav"}),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Prop name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"navItems"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An array of objects, that each object consist of title and component")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Key"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Value Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Text that acts as a navigation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"component"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The object that will be displayed when the title representing it is clicked")))))}p.isMDXComponent=!0},190:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return g})),t.d(e,"c",(function(){return D})),t.d(e,"d",(function(){return H}));t(193),t(194),t(199),t(195),t(191),t(24),t(18),t(19),t(53),t(52);var r=t(0),o=t.n(r),i=t(38),a=t.n(i),c=t(196),l=t(200);function d(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}function p(){var n=u(["\n  background: ",";\n  border-radius: 100px;\n  border: none;\n  padding: 12px 22px;\n  cursor: pointer;\n  color: white;\n  font-size: 16px;\n\n  &.secondary {\n    background: transparent;\n    border: 2px solid #FF008B;\n    padding: 10px 20px;\n    color: #FF008B;\n  }\n\n  &.nude {\n    background: transparent;\n  }\n\n  &.bold {\n    font-weight: bold;\n  }\n\n  &:hover {\n    opacity: 0.75;\n  }\n"]);return p=function(){return n},n}var m=c.a.button(p(),(function(n){try{if(n.theme.colors.primary)return n.theme.colors.primary;throw new Error("primary-undefined")}catch(e){return"linear-gradient(111.34deg, #D418B6 0%, #F1185E 100%)"}})),s=function(n){return n.href?n.download?o.a.createElement("a",{href:n.href,download:!0},o.a.createElement(m,n,n.children)):o.a.createElement("a",{href:n.href},o.a.createElement(m,n,n.children)):o.a.createElement(m,n,n.children)};function f(){var n=u(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  position: fixed;\n  z-index: 1000;\n  background-color: ",";\n  overflow: hidden;\n  padding-bottom: 500px;\n\n  .container {\n    width: 100%;\n    text-align: center;\n    align-self: center;\n  }\n\n  .info-message {\n    margin: auto;\n    max-width: 650px;\n    width: 80%;\n    padding-bottom: 30px;\n    font-size: 20px;\n    color: #fff;\n  }\n\n  button {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n\n  button:nth-of-type(1) {\n    background: transparent;\n    border: 1px solid #f3f3f3;\n  }\n"]);return f=function(){return n},n}s.propTypes={href:a.a.string,children:a.a.string},s.defaultProps={type:"button"};c.a.div(f(),(function(n){try{if(n.theme.colors.background)return n.theme.colors.background;throw new Error("background color not defined")}catch(e){return"#000"}}));function h(){var n=u(["\n  & * {\n    margin: 0;\n  }\n\n  #card-body {\n    background: ",";\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  #mini-information-card {\n    & div {\n      padding: 25px 20px;\n      width: 13rem;\n    }\n  }\n\n  #title {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 22px;\n    color: #fff;\n    margin: 0;\n  }\n\n  #content {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 177%;\n    color: #fff;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n\n  #link {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 14px;\n    color: #747373;\n    text-decoration: none;\n  }\n\n  #large-card {\n    width: 50rem;\n\n    #img-container {\n      margin-right: 24px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    #text {\n      line-height: 140%;\n      text-align: justify;\n    }\n\n    #body {\n      color:#fff;\n      padding: 32px 0;\n    }\n\n    & #card-body {\n      display: flex;\n    }\n\n    .btn-container {\n      padding: 20px 0 32px 0;\n    }\n  }\n\n  #article-card {\n    width: 30rem;\n    & #card-body {\n      color:#fff;\n      padding: 24px;\n    }\n\n    #img-container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    h2 {\n      font-weight: normal;\n      font-size: 1rem;\n      margin-top: 20px;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 1.5rem;\n    }\n  }\n\n  #carousel-card {\n    & #card-body {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 32px;\n      width: max-content;\n    }\n\n    h1 {\n      font-weight: bold;\n      font-size: 2em;\n    }\n  }\n"]);return h=function(){return n},n}var b=c.a.div(h(),(function(n){try{if(n.theme.colors.secondary)return n.theme.colors.secondary;throw new Error("secondary color not defined")}catch(e){return"#131313"}})),g=function(n){return o.a.createElement(b,null,function(n){switch(n.type){case"large-card":return e=n.title,t=n.text,r=n.image,i=n.miniTitle,a=n.buttonTop,c=n.buttonBottom,o.a.createElement("div",{id:"large-card"},o.a.createElement("div",{id:"card-body"},o.a.createElement("div",{id:"img-container"},o.a.createElement("img",{src:r,alt:""})),o.a.createElement("div",{id:"body"},o.a.createElement("h3",{id:"mini-title"},i),o.a.createElement("h1",{id:"title"},e),o.a.createElement("div",{className:"btn-container"},a),o.a.createElement("p",{id:"text"},t),c)));case"article-card":return function(n,e,t){return o.a.createElement("div",{id:"article-card"},o.a.createElement("div",{id:"card-body"},o.a.createElement("div",{id:"img-container"},o.a.createElement("img",{src:t,alt:""})),o.a.createElement("h2",null,e),o.a.createElement("h1",null,n)))}(n.title,n.category,n.image);case"carousel-card":return function(n,e){return o.a.createElement("div",{id:"carousel-card"},o.a.createElement("div",{id:"card-body"},o.a.createElement("div",{id:"img-container"},o.a.createElement("img",{src:e,alt:""})),o.a.createElement("h1",{id:"title"},n)))}(n.caption,n.image);default:return function(n,e,t,r){return o.a.createElement("div",{id:"mini-information-card"},o.a.createElement("div",{id:"card-body"},o.a.createElement("h1",{id:"title"},n),o.a.createElement("p",{id:"content"},e),o.a.createElement("a",{id:"link",href:r},t)))}(n.title,n.text,n.linkContent,n.href)}var e,t,r,i,a,c}(n))};function x(){var n=u(["\n  color: white;\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  /* Hide the browser's default checkbox */\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border: 1px solid ",";\n    border-radius: 2px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  &:hover input ~ .checkmark {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  input:checked ~ .checkmark {\n    background-color: ",';\n  }\n\n  /* Style the checkmark/indicator */\n  .checkmark:after {\n    content: "";\n    display: none;\n    position: absolute;\n    left: 7px;\n    top: 3px;\n    width: 5px;\n    height: 10px;\n    border: solid #000;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n\n  /* Show the checkmark when checked */\n  input:checked ~ .checkmark:after {\n    display: block;\n  }\n']);return x=function(){return n},n}function v(){var n=u(['\n  position: absolute;\n  margin: 15px;\n  color: white;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: -5px;\n    display: block;\n    left: 2.5rem;\n    width: 1px;\n    height: calc(1rem + 10px);\n    background: ',";\n  }\n"]);return v=function(){return n},n}function w(){var n=u(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n\n  &:checked + ",":before {\n    background: ",";\n  }\n"]);return w=function(){return n},n}function y(){var n=u(['\n  display: block;\n  color: white;\n\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 1.2rem;\n    height: 1.2rem;\n    vertical-align: -0.25rem;\n    border-radius: 1.2rem;\n    border: 1px solid ',";\n    margin-right: 0.6rem;\n    transition: background 0.2s ease;\n    box-shadow: inset 0 0 0 0.3rem #000;\n  }\n"]);return y=function(){return n},n}function j(){var n=u(["\n  width: calc(100% - 34px);\n  padding: 10px 15px;\n  color:white;\n  background-color: transparent;\n  border: 2px solid ",";\n  border-radius: 5px;\n  font-family: inherit;\n\n  &::placeholder {\n    color: #f3f3f3;\n    opacity: 0.5;\n  }\n"]);return j=function(){return n},n}g.propTypes={text:a.a.string,linkContent:a.a.string,href:a.a.string,type:a.a.string,title:a.a.string,caption:a.a.string,miniTitle:a.a.string,buttonTop:a.a.object,buttonBottom:a.a.object};Object(c.a)(l.a)(j(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));var k=c.a.span(y(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));Object(c.a)(l.a)(w(),k,(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}})),c.a.span(v(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}})),c.a.label(x(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));function O(){var n=u(["\n  padding: 8px 12px;\n  width: 100%;\n"]);return O=function(){return n},n}function E(){var n=u(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return E=function(){return n},n}function N(){var n=u(["\n  list-style-type: none;\n  height: fit-content;\n  width: 300px;\n  padding-left: 0;\n  background: #f3f3f3;\n  z-index: 100;\n  overflow: auto;\n  margin-top: 0;\n  font-weight: 400;\n\n  .accent-background {\n    background: #e5e5e5;\n  }\n"]);return N=function(){return n},n}function C(){var n=u(["\n  display: flex;\n  align-items: center;\n  border: 2px solid #000000;\n  border-radius: 5px;\n  background: #dbdbdb;\n  font-weight: 400;\n  padding: 8px 12px;\n  justify-content: space-between;\n  width: 300px;\n  box-sizing: border-box;\n  &:active,\n  &:focus {\n    outline: 0;\n  }\n"]);return C=function(){return n},n}function T(){var n=u(["\n  margin-top: 8px;\n  width: fit-content;\n"]);return T=function(){return n},n}function S(){var n=u(["\n  p {\n    margin: 0;\n  }\n\n  .rotated {\n    transform-box: fill-box;\n    transform-origin: center;\n    transform: rotate(180deg);\n  }\n\n  .background-active {\n    background: #f3f3f3;\n  }\n"]);return S=function(){return n},n}function z(){var n=u(["\n  font-weight: 500;\n"]);return z=function(){return n},n}var L=c.a.label(z()),_=c.a.div(S()),F=c.a.div(T()),B=c.a.div(C()),M=c.a.ul(N()),A=c.a.div(E()),I=c.a.li(O()),U=function(n){var e=n.active;return o.a.createElement("svg",{width:"15",height:"7",viewBox:"0 0 15 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e?"rotated":void 0},o.a.createElement("path",{d:"M12.853 1H1.71826L7.28561 6L12.853 1Z",fill:"#252C29",stroke:"#252C29"}))},D=function(n){var e=n.field,t=n.form,i=d(n,["field","form"]),a=Object(r.useState)(!1),c=a[0],l=a[1],u=Object(r.useState)(i.placeholder),p=u[0],m=u[1],s=Object(r.useRef)(),f=function(n){s.current.contains(n.target)||l(!1)};return Object(r.useEffect)((function(){return c?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),function(){document.removeEventListener("mousedown",f)}}),[c]),Object(r.useEffect)((function(){t&&t.setFieldValue(e.name,p)}),[i.defaultValue]),o.a.createElement(_,null,o.a.createElement(L,null,i.label),o.a.createElement(F,{ref:s,className:c?"background-active":void 0},o.a.createElement(B,{onClick:function(n){return l(!c)}},o.a.createElement("p",null,p),o.a.createElement(U,{active:c})),c&&o.a.createElement(M,null,i.choices.map((function(n,r){return o.a.createElement(A,{key:n.index||n.id,onClick:function(){return r=n,i.onChange&&i.onChange(r),l(!1),m(r),void(t&&t.setFieldValue(e.name,r));var r}},o.a.createElement(I,{key:n.index||n.id,value:n.value,className:r%2!=0?"accent-background":void 0},o.a.createElement("p",null,n)))})))))};function P(){var n=u(["\n  .small-nav {\n    margin-top: 30px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    font-size: 1.2rem;\n    overflow-x: auto;\n    color: white;\n  }\n\n  .small-nav div {\n    display: block;\n    margin: 0 10px;\n    cursor: pointer;\n    white-space: nowrap;\n\n    &:first-child {\n      margin-left: 0;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media (max-width: 992px) {\n    .small-nav {\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .nav-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);return P=function(){return n},n}var V=c.a.div(P()),H=function(n){var e,t;function r(e){var t;return(t=n.call(this,e)||this).state={index:0},t}return t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.prototype.render=function(){var n=this,e=this.props.navItems;return o.a.createElement(V,null,o.a.createElement("div",{className:"small-nav"},e.map((function(e,t){return o.a.createElement("div",{key:t,onClick:function(){return n.setState({index:t})},style:{fontWeight:n.state.index===t?"bold":"normal"}},e.title)}))),o.a.createElement("div",{className:"nav-content"},e[this.state.index].component))},r}(r.Component);H.propTypes={navItems:a.a.array.isRequired};var R="_2ZSOL",W="_39QAT",J="_1UCGB",q="_1JVUU",K="_3UchF",X="_1MoLE",Z="_1TbKk",G="_1BqmE",Q=function(n,e){var t=[],r=Array.of(e.displayName||e.name);return o.a.Children.forEach(n,(function(n){var e=n&&n.type&&(n.type.displayName||n.type.name);r.includes(e)&&t.push(n)})),t},Y=function(){return null},$=function(){return null},nn=function(){return null},en=function(n){var e,t,i,a,c=n.children,l=(t=Object(r.useState)("undefined"!=typeof window?window.innerWidth:0),i=t[0],a=t[1],Object(r.useEffect)((function(){var n=function(){a(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),i)<768,d=Q(c,$)[0],u=null===(e=d.props)||void 0===e?void 0:e.show,p=function(){var n,e=Q(c,nn)[0],t=(null===(n=e.props)||void 0===n?void 0:n.setShow)||function(){},r=e.props.children;if(r){var i=r.filter((function(n){var e;return null===(e=n.props)||void 0===e?void 0:e.open}))[0],a=r.filter((function(n){var e;return null===(e=n.props)||void 0===e?void 0:e.close}))[0];return o.a.createElement("div",{className:G,onClick:function(){return t((function(n){return!n}))}},u?a:i)}};return o.a.createElement("div",{className:R},o.a.createElement("div",{className:W},function(){var n,e,t=Q(c,Y)[0];if(t){var r,i,a=(null===(n=t.props)||void 0===n?void 0:n.children)||"";Array.isArray(a)?(i=a.filter((function(n){return n.props.mobile})),r=a.filter((function(n){return!n.props.mobile}))):r=i=a;var d=(null===(e=t.props)||void 0===e?void 0:e.href)||"#";return o.a.createElement("div",{className:q},o.a.createElement("div",{className:K},o.a.createElement("a",{href:d},o.a.createElement("div",{className:J},l?i:r)),p()))}}(),function(){if(d)return o.a.createElement("div",{className:X+" "+(u||!l?Z:"")},d.props.children)}()))};function tn(){var n=u(["\n  display: flex;\n  justify-content: space-between;\n\n  .email-input {\n    background-color: rgba(243, 243, 243, 0.4);\n    border-radius: 5px;\n    color: white;\n    padding: 0.5rem;\n    padding-right: 2.5rem;\n    border: 0;\n    margin-right: 1rem;\n  }\n\n  .email-input::placeholder {\n    color: rgba(243, 243, 243, 0.5);\n  }\n\n  .subscribe-button {\n    border-radius: 50px;\n    background-color: #fdd262;\n    color: #001c2c;\n    font-size: 1rem;\n    border: 0;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n\n  .disabled {\n    cursor: initial;\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n\n    .email-input {\n      width: 75%;\n      margin-bottom: 0.5rem;\n    }\n\n    .subscribe-button {\n      max-width: 50%;\n      margin-top: 0.7rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]);return tn=function(){return n},n}en.propTypes={children:a.a.node},en.Brand=Y,en.Collapse=$,en.Toggle=nn;c.a.div(tn());function rn(){var n=u(["\n  background-color: ",';\n  height: 240px;\n  padding: 3rem 7rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: "DM Sans", "itc";\n\n  #ft-left {\n    max-width: 40%;\n  }\n\n  div.row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  div.column {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ft-section-title {\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    display: block;\n  }\n\n  .slogan {\n    font-size: 18px;\n    letter-spacing: 0.04em;\n    margin-top: .5rem;\n  }\n\n  .deskripsi-singkat {\n    line-height: 1.5;\n  }\n\n  .separator {\n    /* border: 0.4px solid white; */\n    margin: 1.5rem 0;\n  }\n\n  #copyright {\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: block;\n  }\n\n  #footer-link > a {\n    margin-right: 1rem;\n  }\n\n  #socmed {\n    display: flex;\n    margin-bottom: 1.5rem;\n    #fb {\n      height: 25px;\n      width: 25px;\n      margin-right: 22px;\n    }\n\n    #tw {\n      width: 30px;\n      height: 25px;\n      margin-right: 22px;\n    }\n\n    #yb {\n      width: 32px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #ig,\n    #ln {\n      width: 23px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #in {\n      width: 23px;\n      height: 22px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: auto;\n    padding: 2rem 2rem;\n    text-align: center;\n\n    div.row,\n    div.column {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    #ft-left {\n      max-width: 100%;\n      margin-bottom: 1rem;\n    }\n\n    #socmed {\n      margin-bottom: 2.5rem;\n      #fb {\n        height: 17px;\n        width: 16px;\n        padding-right: 5px;\n      }\n\n      #tw {\n        width: 20px;\n        height: 16px;\n        padding-right: 5px;\n      }\n\n      #yb {\n        width: 21px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #ig,\n      #ln {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #in {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n    }\n  }\n']);return rn=function(){return n},n}c.a.div(rn(),(function(n){try{if(n.theme.colors.secondary)return n.theme.colors.secondary;throw new Error("secondary color not defined")}catch(e){return"#131313"}}))}}]);