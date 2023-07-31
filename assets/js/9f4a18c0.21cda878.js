"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[38943],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:e},c),{},{components:a})):n.createElement(f,o({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45312:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="InsertData Schema",l={unversionedId:"okp4-cognitarium-executemsg-oneof-insertdata",id:"version-v2.0.0/okp4-cognitarium-executemsg-oneof-insertdata",title:"InsertData Schema",description:"Insert the data as RDF triples in the store. For already existing triples it acts as no-op.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-executemsg-oneof-insertdata.md",sourceDirName:".",slug:"/okp4-cognitarium-executemsg-oneof-insertdata",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg-oneof-insertdata",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled object in okp4-cognitarium Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data"},next:{title:"ExecuteMsg Schema",permalink:"/contracts/v2.0.0/okp4-cognitarium-executemsg"}},p={},s=[{value:"0 Type",id:"0-type",level:2},{value:"insert_data",id:"insert_data",level:2},{value:"insert_data Type",id:"insert_data-type",level:3}],c={toc:s};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insertdata-schema"},"InsertData Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/oneOf/0\n")),(0,r.kt)("p",null,"Insert the data as RDF triples in the store. For already existing triples it acts as no-op."),(0,r.kt)("p",null,"Only the smart contract owner (i.e. the address who instantiated it) is authorized to perform this action."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,r.kt)("h2",{id:"0-type"},"0 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-insertdata"},"InsertData"),")"),(0,r.kt)("h1",{id:"0-properties"},"0 Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#insert_data"},"insert","_","data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data",title:"undefined#/execute/oneOf/0/properties/insert_data"},"okp4-cognitarium"))))),(0,r.kt)("h2",{id:"insert_data"},"insert","_","data"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"insert_data")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data",title:"undefined#/execute/oneOf/0/properties/insert_data"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"insert_data-type"},"insert","_","data Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-oneof-insertdata-properties-insert_data"},"Details"),")"))}d.isMDXComponent=!0},26730:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);