"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[98546],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(g,i(i({ref:t},f),{},{components:r})):n.createElement(g,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72250:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},p="ForgetObject Schema",l={unversionedId:"cw-storage-executemsg-oneof-forgetobject",id:"cw-storage-executemsg-oneof-forgetobject",title:"ForgetObject Schema",description:"ForgetObject first unpin the object from the bucket for the considered sender, then remove it from the storage if it is not pinned anymore. If the object is pinned for other senders, it is not removed from the storage and an error is returned. If the object is not pinned for the sender, this is a no-op.",source:"@site/contracts/cw-storage-executemsg-oneof-forgetobject.md",sourceDirName:".",slug:"/cw-storage-executemsg-oneof-forgetobject",permalink:"/contracts/next/cw-storage-executemsg-oneof-forgetobject",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled object in cw-storage Schema",permalink:"/contracts/next/cw-storage-executemsg-oneof-forgetobject-properties-forget_object"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/next/cw-storage-executemsg-oneof-pinobject-properties-pin_object-properties-id"}},f={},s=[{value:"1 Type",id:"1-type",level:2},{value:"forget_object",id:"forget_object",level:2},{value:"forget_object Type",id:"forget_object-type",level:3}],u={toc:s};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forgetobject-schema"},"ForgetObject Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/oneOf/1\n")),(0,a.kt)("p",null,"ForgetObject first unpin the object from the bucket for the considered sender, then remove it from the storage if it is not pinned anymore. If the object is pinned for other senders, it is not removed from the storage and an error is returned. If the object is not pinned for the sender, this is a no-op."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:r(55804).Z,title:"open original schema"},"cw-storage.json*"))))),(0,a.kt)("h2",{id:"1-type"},"1 Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-executemsg-oneof-forgetobject"},"ForgetObject"),")"),(0,a.kt)("h1",{id:"1-properties"},"1 Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#forget_object"},"forget","_","object")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/cw-storage-executemsg-oneof-forgetobject-properties-forget_object",title:"undefined#/execute/oneOf/1/properties/forget_object"},"cw-storage"))))),(0,a.kt)("h2",{id:"forget_object"},"forget","_","object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"forget_object")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-executemsg-oneof-forgetobject-properties-forget_object"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-executemsg-oneof-forgetobject-properties-forget_object",title:"undefined#/execute/oneOf/1/properties/forget_object"},"cw-storage")))),(0,a.kt)("h3",{id:"forget_object-type"},"forget","_","object Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/cw-storage-executemsg-oneof-forgetobject-properties-forget_object"},"Details"),")"))}m.isMDXComponent=!0},55804:function(e,t,r){t.Z=r.p+"assets/files/cw-storage-2f4c720f603cbfcaa41c7aaca6c84d96.json"}}]);