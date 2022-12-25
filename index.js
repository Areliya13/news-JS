(()=>{"use strict";var e={194:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".languages {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 60px;\n  overflow: auto;\n  align-items: center;\n  justify-content: center;\n  font: 300 1em 'Fira Sans', sans-serif;\n  margin: 10px auto;\n}\n\n.languages::-webkit-scrollbar {\n  border-radius: 100px;\n  background: #ffa530;\n  border: 6px solid #ffa530;\n}\n\n.languages::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  background: #9b641c;\n  border: 6px solid #d68a25;\n}\n\n.language__item {\n  background: none;\n  border: 2px solid #ffa530;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 0.5em 1em;\n  color: #d68a25;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.selected,\n.language__item:hover,\n.language__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.language__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}\n",""]);const i=o},669:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=o},501:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".sources {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    height: 120px;\n    overflow: auto;\n    align-items: center;\n    justify-content: center;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n\n.sources::-webkit-scrollbar {\n    border-radius: 100px;\n    background: #30c5ff;\n    border: 6px solid #30c5ff;\n}\n\n.sources::-webkit-scrollbar-thumb {\n    border-radius: 100px;\n    background: #0e83b1;\n    border: 6px solid #0797d0;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: #70d6ff;\n    transition: 0.25s;\n    cursor: pointer;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",""]);const i=o},767:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),o=t.n(r),i=t(667),s=t.n(i),a=t(668),c=t(126),l=o()((function(e){return e[1]})),d=s()(a),u=s()(c);l.push([e.id,"body {\n    color: #fff;\n    background: #17181c;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 10px 30px;\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\nfooter {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n.year{\n    font-size: 2em;\n    margin: 0 10px;\n}\n.rsschool{\n    background-image: url("+d+");\n    margin-right: 5px;\n}\n.github{\n    background-image: url("+u+");\n    margin-left: 5px;\n  }\n.icon {\n  width: 32px;\n  height: 32px;\n  background-size: 32px 32px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  border: 0;\n  outline: 0;\n  opacity: .8;\n  cursor: pointer;\n  transition: .3s;  \n}\n.icon:hover{\n  opacity: 1;\n  transform: scale(1.1);\n}\n",""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},334:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(194);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},242:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(669);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(501);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(767);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:g(f,n),references:1}),r.push(d)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=c(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}},717:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(842)),i=t(527),s=t(411),a=r(t(536));n.default=class{constructor(){this.controller=new o.default,this.view=new i.AppView}start(){const e=document.querySelector(".sources");e?(e.addEventListener("click",(e=>this.controller.getNews(e,(e=>this.view.drawNews(e))))),this.controller.getSources((e=>this.view.drawSources(e)))):console.log('No element with class "sources"!'),this.view.drawLanguages(a.default),(0,s.getLanguage)()}}},853:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(24));class i extends o.default{constructor(){super("https://newsapi.org/v2/",{apiKey:"2485f009a4ab4482936adb0991cdbf26"})}}n.default=i},842:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(853)),i=t(183),s=t(411);class a extends o.default{getSources(e){super.getResp({endpoint:i.Endpoints.sources},e)}getNews(e,n){let t=e.target;const r=e.currentTarget;for(;t!==r;){if(t.classList.contains("source__item")){const e=t.getAttribute("data-source-id");return void(e&&r.getAttribute("data-source")!==e&&(r.setAttribute("data-source",e),super.getResp({endpoint:i.Endpoints.everything,options:{sources:e,language:s.chosenLanguage}},n)))}t.parentNode&&(t=t.parentNode)}}}n.default=a},24:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",e,t,n)}errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),e);let r=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{r+=`${e}=${t[e]}&`})),r.slice(0,-1)}load(e,n,t,r={}){fetch(this.makeUrl(r,n),{method:e,headers:{"Access-Control-Allow-Headers":"*, Authorization","Access-Control-Allow-Origin":"https://nodenews.up.railway.app/","Access-Control-Allow-Credentials":"true"}}).then(this.errorHandler).then((e=>e.json())).then((e=>t(e))).catch((e=>console.error(e)))}}},183:(e,n)=>{var t,r;Object.defineProperty(n,"__esModule",{value:!0}),n.Languages=n.Endpoints=void 0,function(e){e.sources="sources",e.everything="everything",e.topHeadliners="top-headlines"}(t||(t={})),n.Endpoints=t,function(e){e.Arabic="ar",e.German="de",e.English="en",e.Spanish="es",e.French="fr",e.Hebrew="he",e.Italian="it",e.Dutch="nl",e.Norwegian="no",e.Portuguese="po",e.Russian="ru",e.Swedish="sv",e.Chinese="zh"}(r||(r={})),n.Languages=r},527:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const o=r(t(798)),i=r(t(53)),s=r(t(923));class a{constructor(){this.news=new o.default,this.sources=new i.default,this.languages=new s.default}drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];this.news.draw(n)}drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];this.sources.draw(n)}drawLanguages(e){this.languages.draw(e)}}n.AppView=a,n.default=a},411:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.getLanguage=n.chosenLanguage=void 0;const o=r(t(536));let i="en";n.chosenLanguage=i,n.getLanguage=function(){const e=document.querySelectorAll(".language__item");e.forEach(((t,r)=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("selected")})),t.classList.add("selected"),n.chosenLanguage=i=o.default[r].code,console.log(i)}))}))}},923:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(334),n.default=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector("#languageItemTemp");e.forEach((e=>{const r=t.content.cloneNode(!0),o=r.querySelector(".language__item-name");o&&(o.textContent=e.name);const i=r.querySelector(".language__item");i&&i.setAttribute("data-language-id",e.id.toString()),n.append(r)}));const r=document.querySelector(".languages");(null==r?void 0:r.children)&&(null==r||r.append(n))}}},536:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{id:1,name:"Arabic",code:"ar"},{id:2,name:"German",code:"de"},{id:3,name:"English",code:"en"},{id:4,name:"Spanish",code:"es"},{id:5,name:"French",code:"fr"},{id:6,name:"Hebrew",code:"he"},{id:7,name:"Italian",code:"it"},{id:8,name:"Dutch",code:"nl"},{id:9,name:"Norwegian",code:"no"},{id:10,name:"Portuguese",code:"pt"},{id:11,name:"Russian",code:"ru"},{id:12,name:"Swedish",code:"sv"},{id:13,name:"Chinese",code:"zh"}]},798:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(242),n.default=class{draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");n.forEach(((e,n)=>{if(r){const o=r.content.cloneNode(!0);n%2&&o.querySelector(".news__item").classList.add("alt"),o.querySelector(".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||"img/news_placeholder.jpg"})`,o.querySelector(".news__meta-author").textContent=e.author||e.source.name,o.querySelector(".news__meta-date").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=e.title,o.querySelector(".news__description-source").textContent=e.source.name,o.querySelector(".news__description-content").textContent=e.description,o.querySelector(".news__read-more a").setAttribute("href",e.url),t.append(o)}else console.log("Error of #newsItemTemp")}));const o=document.querySelector(".news");o?(o.innerHTML="",o.appendChild(t)):console.log("No such element exists!")}}},53:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(595),n.default=class{draw(e){const n=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");console.dir(t),e.forEach((e=>{const r=t.content.cloneNode(!0),o=r.querySelector(".source__item-name");o&&(o.textContent=e.name);const i=r.querySelector(".source__item");i&&i.setAttribute("data-source-id",e.id),n.append(r)}));const r=document.querySelector(".sources");r&&r.append(n)}}},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(717));t(427),(new o.default).start()},126:(e,n,t)=>{e.exports=t.p+"3140033ceb74c1a3c60c.svg"},668:(e,n,t)=>{e.exports=t.p+"bb3d05215a82878f2cf5.svg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,t(607)})();