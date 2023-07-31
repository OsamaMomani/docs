"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[65406],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=p(a),f=r,d=h["".concat(l,".").concat(f)]||h[f]||m[f]||i;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},69776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="SHA256 Schema",s={unversionedId:"okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",id:"version-v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",title:"SHA256 Schema",description:"Represents the SHA-256 algorithm. SHA-256 is a member of the SHA-2 family of hash functions that produces a 256-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-256 is moderate, and its hash length strikes a good balance between security and convenience.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256.md",sourceDirName:".",slug:"/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SHA1 Schema",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha1"},next:{title:"SHA384 Schema",permalink:"/contracts/v2.0.0/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha384"}},l={},p=[{value:"2 Type",id:"2-type",level:2},{value:"2 Constraints",id:"2-constraints",level:2}],c={toc:p};function m(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sha256-schema"},"SHA256 Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/HashAlgorithm/oneOf/2\n")),(0,r.kt)("p",null,"Represents the SHA-256 algorithm. SHA-256 is a member of the SHA-2 family of hash functions that produces a 256-bit hash value. It is widely used in cryptography and other security-related applications. The computational cost of SHA-256 is moderate, and its hash length strikes a good balance between security and convenience."),(0,r.kt)("p",null,"SHA-256 hashes are stored on-chain as 64 hexadecimal characters."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-2"},"the SHA-2 Wikipedia page")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:a(77839).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,r.kt)("h2",{id:"2-type"},"2 Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-sha256"},"SHA256"),")"),(0,r.kt)("h2",{id:"2-constraints"},"2 Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"enum"),": the value of this property must be equal to one of the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"sha256"')),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0},77839:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/files/okp4-objectarium-289208c92e0639b047130ca484754519.json"}}]);