"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[36592],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="Untitled string in cw-storage Schema",l={unversionedId:"cw-storage-responses-objectresponse-definitions-uint128",id:"version-v1.0.0/cw-storage-responses-objectresponse-definitions-uint128",title:"Untitled string in cw-storage Schema",description:"A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq.",source:"@site/contracts_versioned_docs/version-v1.0.0/cw-storage-responses-objectresponse-definitions-uint128.md",sourceDirName:".",slug:"/cw-storage-responses-objectresponse-definitions-uint128",permalink:"/contracts/cw-storage-responses-objectresponse-definitions-uint128",draft:!1,tags:[],version:"v1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ObjectPinsResponse Schema",permalink:"/contracts/cw-storage-responses-objectpinsresponse"},next:{title:"Untitled undefined type in cw-storage Schema",permalink:"/contracts/cw-storage-responses-objectresponse-definitions"}},p={},u=[{value:"Uint128 Type",id:"uint128-type",level:2}],f={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"untitled-string-in-cw-storage-schema"},"Untitled string in cw-storage Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/object/definitions/Uint128\n")),(0,i.kt)("p",null,"A thin wrapper around u128 that is using strings for JSON encoding/decoding, such that the full u128 range can be used for clients that convert JSON numbers to floats, like JavaScript and jq."),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," to create instances of this and ",(0,i.kt)("inlineCode",{parentName:"p"},"u128")," to get the value out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-#",metastring:"use cosmwasm_std::Uint128; let a = Uint128::from(123u128); assert_eq!(a.u128(), 123);",use:!0,"cosmwasm_std::Uint128;":!0,let:!0,a:!0,"":"","Uint128::from(123u128);":!0,"assert_eq!(a.u128(),":!0,"123);":!0},"\nlet b = Uint128::from(42u64); assert_eq!(b.u128(), 42);\n\nlet c = Uint128::from(70u32); assert_eq!(c.u128(), 70); ```\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(49568).Z,title:"open original schema"},"cw-storage.json*"))))),(0,i.kt)("h2",{id:"uint128-type"},"Uint128 Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0},49568:function(e,t,n){t.Z=n.p+"assets/files/cw-storage-2f4c720f603cbfcaa41c7aaca6c84d96.json"}}]);