"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[48528],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(n),k=a,u=f["".concat(p,".").concat(k)]||f[k]||d[k]||s;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={},p="ObjectResponse Schema",l={unversionedId:"cw-storage-responses-objectsresponse-definitions-objectresponse",id:"cw-storage-responses-objectsresponse-definitions-objectresponse",title:"ObjectResponse Schema",description:"ObjectResponse is the response of the Object query.",source:"@site/contracts/cw-storage-responses-objectsresponse-definitions-objectresponse.md",sourceDirName:".",slug:"/cw-storage-responses-objectsresponse-definitions-objectresponse",permalink:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in cw-storage Schema",permalink:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/next/cw-storage-responses-objectsresponse-definitions-pageinfo-properties-cursor"}},c={},d=[{value:"ObjectResponse Type",id:"objectresponse-type",level:2},{value:"id",id:"id",level:2},{value:"id Type",id:"id-type",level:3},{value:"is_pinned",id:"is_pinned",level:2},{value:"is_pinned Type",id:"is_pinned-type",level:3},{value:"owner",id:"owner",level:2},{value:"owner Type",id:"owner-type",level:3},{value:"size",id:"size",level:2},{value:"size Type",id:"size-type",level:3}],f={toc:d};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"objectresponse-schema"},"ObjectResponse Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/objects/definitions/ObjectResponse\n")),(0,s.kt)("p",null,"ObjectResponse is the response of the Object query."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,s.kt)("td",{parentName:"tr",align:"left"},"No"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,s.kt)("td",{parentName:"tr",align:"left"},"No"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,s.kt)("td",{parentName:"tr",align:"left"},"none"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{target:"_blank",href:n(55804).Z,title:"open original schema"},"cw-storage.json*"))))),(0,s.kt)("h2",{id:"objectresponse-type"},"ObjectResponse Type"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"object")," (",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse"},"ObjectResponse"),")"),(0,s.kt)("h1",{id:"objectresponse-properties"},"ObjectResponse Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"#id"},"id")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-id",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/id"},"cw-storage"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"#is_pinned"},"is","_","pinned")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"boolean")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-is_pinned",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/is_pinned"},"cw-storage"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"#owner"},"owner")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-owner",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/owner"},"cw-storage"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"#size"},"size")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,s.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/size"},"cw-storage"))))),(0,s.kt)("h2",{id:"id"},"id"),(0,s.kt)("p",null,"The id of the object."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"id")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"is required")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Type: ",(0,s.kt)("inlineCode",{parentName:"p"},"string"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"cannot be null")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"defined in: ",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-id",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/id"},"cw-storage")))),(0,s.kt)("h3",{id:"id-type"},"id Type"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h2",{id:"is_pinned"},"is","_","pinned"),(0,s.kt)("p",null,"Tells if the object is pinned by at least one address."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"is_pinned")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"is required")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Type: ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"cannot be null")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"defined in: ",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-is_pinned",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/is_pinned"},"cw-storage")))),(0,s.kt)("h3",{id:"is_pinned-type"},"is","_","pinned Type"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"boolean")),(0,s.kt)("h2",{id:"owner"},"owner"),(0,s.kt)("p",null,"The owner of the object."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"owner")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"is required")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Type: ",(0,s.kt)("inlineCode",{parentName:"p"},"string"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"cannot be null")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"defined in: ",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-owner",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/owner"},"cw-storage")))),(0,s.kt)("h3",{id:"owner-type"},"owner Type"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("h2",{id:"size"},"size"),(0,s.kt)("p",null,"The size of the object."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"size")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"is required")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Type: merged type (",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size"},"Details"),")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"cannot be null")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"defined in: ",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size",title:"undefined#/responses/objects/definitions/ObjectResponse/properties/size"},"cw-storage")))),(0,s.kt)("h3",{id:"size-type"},"size Type"),(0,s.kt)("p",null,"merged type (",(0,s.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size"},"Details"),")"),(0,s.kt)("p",null,"all of"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/contracts/next/cw-storage-responses-objectsresponse-definitions-objectresponse-properties-size-allof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))))}k.isMDXComponent=!0},55804:function(e,t,n){t.Z=n.p+"assets/files/cw-storage-2f4c720f603cbfcaa41c7aaca6c84d96.json"}}]);