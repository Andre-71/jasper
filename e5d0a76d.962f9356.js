(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{181:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return h})),n.d(e,"metadata",(function(){return f})),n.d(e,"rightToc",(function(){return O})),n.d(e,"default",(function(){return w}));var a=n(2),r=n(9),i=n(0),o=n.n(i),c=n(186);function l(t,e){return e||(e=t.slice(0)),t.raw=e,t}var s=n(196);function m(){var t=l(["\n  display: flex;\n  justify-content: space-between;\n\n  .email-input {\n    background-color: rgba(243, 243, 243, 0.4);\n    border-radius: 5px;\n    color: white;\n    padding: 0.5rem;\n    padding-right: 0.5rem;\n    border: 0;\n    margin-right: 1rem;\n  }\n\n  .email-input::placeholder {\n    color: rgba(243, 243, 243, 0.5);\n  }\n\n  .subscribe-button {\n    font-size: 14px;\n    border-radius: 50px;\n    background-color: #fdd262;\n    color: #001c2c;\n    border: 0;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    padding: 0.4rem 0.9rem;\n\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n\n  .disabled {\n    cursor: initial;\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n    .email-input {\n      width: 100%;\n      margin-bottom: 0.5rem;\n      margin-right: 0rem;\n    }\n\n    .subscribe-button {\n      max-width: 100%;\n      margin-top: 0.7rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]);return m=function(){return t},t}var b=s.a.div(m()),p=function(){var t=Object(i.useState)(""),e=t[0],n=t[1];return o.a.createElement(b,null,o.a.createElement("input",{type:"email",className:"email-input",placeholder:"Input your e-mail here",value:e,onChange:function(t){return n(t.target.value)}}),o.a.createElement("button",{type:"submit",className:"subscribe-button"},"Subscribe"))};function d(){var t=l(['\n  background-color: #131313;\n  height: 320px; // 240px pengennya\n  padding: 2.5rem 2.5rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  /* font-family: "DM Sans", "itc"; */\n\n  #ft-left {\n    max-width: 35%; // 42% pengennya\n  }\n\n\n  div.row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  div.column {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ft-section-title {\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-top: 0.4rem;\n    margin-bottom: 0.5rem;\n    display: block;\n  }\n\n  .slogan {\n    font-size: 15.1px; // 16 pengennya\n    letter-spacing: 0.03em;\n    margin-top: .2rem;\n  }\n\n  .deskripsi-singkat {\n    font-size: 13px;\n    line-height: 1.0;\n  }\n\n  .separator {\n    /* border: 0.4px solid white; */\n    margin: 1rem 0; // 0.7 pengennya\n  }\n\n  #copyright {\n    font-size: 13px;\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: block;\n  }\n\n  #footer-link > a {\n    margin-right: 1rem;\n  }\n\n  #socmed {\n    display: flex;\n    margin-bottom: 1.5rem;\n    #fb {\n      height: 25px;\n      width: 25px;\n      margin-right: 20px;\n    }\n\n    #tw {\n      width: 30px;\n      height: 25px;\n      margin-right: 20px;\n    }\n\n    #yb {\n      width: 32px;\n      height: 23px;\n      margin-right: 20px;\n    }\n\n    #ig,\n    #ln {\n      width: 23px;\n      height: 23px;\n      margin-right: 20px;\n    }\n\n    #in {\n      width: 23px;\n      height: 20px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: auto;\n    padding: 2rem 2rem;\n    text-align: center;\n\n    div.row,\n    div.column {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    #ft-left {\n      max-width: 100%;\n      margin-bottom: 1rem;\n    }\n\n    .slogan {\n      font-size: 18px;\n    }\n\n    .deskripsi-singkat {\n      font-size: 14px;\n    }\n\n    #socmed {\n      margin-bottom: 1.5rem;\n      #fb {\n        height: 25px;\n        width: 25px;\n        margin-right: 17px;\n      }\n\n      #tw {\n        width: 30px;\n        height: 25px;\n        margin-right: 17px;\n      }\n\n      #yb {\n        width: 32px;\n        height: 23px;\n        margin-right: 17px;\n      }\n\n      #ig,\n      #ln {\n        width: 23px;\n        height: 23px;\n        margin-right: 17px;\n      }\n\n      #in {\n        width: 23px;\n        height: 22px;\n      }\n    }\n  }\n']);return d=function(){return t},t}var g=s.a.div(d()),u=function(t){return o.a.createElement(g,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column",id:"ft-left"},o.a.createElement("div",{id:"logo"},o.a.createElement("img",{src:t.Compfest,alt:"COMPFEST"})),o.a.createElement("div",null,o.a.createElement("h4",{className:"slogan"},"Empower Breakthrough"),o.a.createElement("span",{className:"deskripsi-singkat"},"An annual one-stop IT event run by students of Faculty of Computer Science, University of Indonesia"))),o.a.createElement("div",{className:"column",id:"ft-right"},o.a.createElement("span",{className:"ft-section-title"},"Find Us on Social Media!"),o.a.createElement("div",{id:"socmed"},o.a.createElement("a",{id:"fb",href:"https://www.facebook.com/COMPFEST"},o.a.createElement("img",{src:t.Facebook,alt:"FACEBOOK-COMPFEST"})),o.a.createElement("a",{id:"tw",href:"https://twitter.com/COMPFEST"},o.a.createElement("img",{src:t.Twitter,alt:"TWITTER-COMPFEST"})),o.a.createElement("a",{id:"yb",href:"https://www.youtube.com/channel/UC03QmhwvQEWVI608A-RCEpw"},o.a.createElement("img",{src:t.Youtube,alt:"YOUTUBE-COMPFEST"})),o.a.createElement("a",{id:"ig",href:"https://www.instagram.com/compfest"},o.a.createElement("img",{src:t.Instagram,alt:"INSTAGRAM-COMPFEST"})),o.a.createElement("a",{id:"ln",href:"https://line.me/R/ti/p/%40compfest"},o.a.createElement("img",{src:t.Line,alt:"LINE-COMPFEST"})),o.a.createElement("a",{id:"in",href:"https://www.linkedin.com/company/compfest"},o.a.createElement("img",{src:t.LinkedIn,alt:"LINKEDIN-COMPFEST"}))),o.a.createElement("span",{className:"ft-section-title"},"Subscribe to COMPFEST"),o.a.createElement(p,null))),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{id:"footer-bottom"},o.a.createElement("span",{id:"copyright"},"\xa9 2020 COMPFEST")))},h={id:"footer",title:"Footer"},f={id:"footer",title:"Footer",description:"import { Footer } from '../../src/Footer/Docusaurus'",source:"@site/docs/footer.md",permalink:"/docs/footer",editUrl:"https://github.com/COMPFEST/jasper/edit/master/docusaurus/docs/footer.md",sidebar:"someSidebar",previous:{title:"Card",permalink:"/docs/card"},next:{title:"Form Fields",permalink:"/docs/form-fields"}},O=[{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Result",id:"result",children:[]},{value:"Props",id:"props",children:[]}],j={rightToc:O};function w(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.b)("wrapper",Object(a.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Footer is a component that contains brief information about Compfest and also contacts that can be used to reach Compfest. There also an input field to contain user email, that can be used by users to subscribe to Compfest so will not get lost of updated news from Compfest."),Object(c.b)("h3",{id:"usage"},"Usage"),Object(c.b)("p",null,"We use footer to tell user brief information about Compfest and which contact that can be used for users to reach Compfest."),Object(c.b)("h3",{id:"code"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'import Facebook from "../static/img/FooterAssets/Facebook.svg"\nimport Instagram from "../static/img/FooterAssets/Instagram.svg"\nimport Line from "../static/img/FooterAssets/Line.svg"\nimport Twitter from "../static/img/FooterAssets/twitter.svg"\nimport Linkedin from "../static/img/FooterAssets/LinkedIn.svg"\nimport Youtube from "../static/img/FooterAssets/youtube.svg"\nimport Compfest from "../static/img/FooterAssets/compfest-white.svg"\n\n<Footer\n  Facebook={Facebook}\n  Instagram={Instagram}\n  Line={Line}\n  Twitter={Twitter}\n  LinkedIn={Linkedin}\n  Youtube={Youtube}\n  Compfest={Compfest}\n/>\n')),Object(c.b)("h3",{id:"result"},"Result"),Object(c.b)(u,{Facebook:"../static/img/FooterAssets/Facebook.svg",Instagram:"../static/img/FooterAssets/Instagram.svg",Line:"../static/img/FooterAssets/Line.svg",Twitter:"../static/img/FooterAssets/twitter.svg",LinkedIn:"../static/img/FooterAssets/LinkedIn.svg",Youtube:"../static/img/FooterAssets/youtube.svg",Compfest:"../static/img/FooterAssets/compfest-white.svg",mdxType:"Footer"}),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory/Optional"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Facebook"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Facebook SVG file that navigates to the Facebook account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instagram"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Instagram SVG file that navigates to the Instagram account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Line"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Line SVG file that navigates to the Line account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Twitter"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Twitter SVG file that navigates to the Twitter account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LinkedIn"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of LinkedIn SVG file that navigates to the LinkedIn account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Youtube"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Youtube SVG file that navigates to the Youtube account of Compfest when clicked")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Compfest"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path of Compfest logo SVG file")))))}w.isMDXComponent=!0}}]);