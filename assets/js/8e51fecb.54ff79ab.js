"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[59709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="ExecuteMsg Schema",l={unversionedId:"okp4-objectarium-executemsg",id:"version-v2.1.0/okp4-objectarium-executemsg",title:"ExecuteMsg Schema",description:"Execute messages",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-executemsg.md",sourceDirName:".",slug:"/okp4-objectarium-executemsg",permalink:"/contracts/okp4-objectarium-executemsg",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"UnpinObject Schema",permalink:"/contracts/okp4-objectarium-executemsg-oneof-unpinobject"},next:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/okp4-objectarium-instantiatemsg-definitions-bucketconfig-properties-accepted_compression_algorithms-items"}},p={},c=[{value:"execute Type",id:"execute-type",level:2},{value:"Definitions group Binary",id:"definitions-group-binary",level:2},{value:"Definitions group CompressionAlgorithm",id:"definitions-group-compressionalgorithm",level:2}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"executemsg-schema"},"ExecuteMsg Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute\n")),(0,a.kt)("p",null,"Execute messages"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Cannot be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,a.kt)("h2",{id:"execute-type"},"execute Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-executemsg"},"ExecuteMsg"),")"),(0,a.kt)("p",null,"one (and only one) of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-executemsg-oneof-storeobject",title:"check type definition"},"StoreObject"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-executemsg-oneof-forgetobject",title:"check type definition"},"ForgetObject"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-executemsg-oneof-pinobject",title:"check type definition"},"PinObject"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-executemsg-oneof-unpinobject",title:"check type definition"},"UnpinObject")))),(0,a.kt)("h1",{id:"executemsg-definitions"},"ExecuteMsg Definitions"),(0,a.kt)("h2",{id:"definitions-group-binary"},"Definitions group Binary"),(0,a.kt)("p",null,"Reference this group by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/execute/definitions/Binary"}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by")))),(0,a.kt)("h2",{id:"definitions-group-compressionalgorithm"},"Definitions group CompressionAlgorithm"),(0,a.kt)("p",null,"Reference this group by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/execute/definitions/CompressionAlgorithm"}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by")))))}u.isMDXComponent=!0},9819:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);