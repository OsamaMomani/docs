"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[80280],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25408:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="Node Schema",c={unversionedId:"okp4-cognitarium-querymsg-definitions-node",id:"version-v2.0.0/okp4-cognitarium-querymsg-definitions-node",title:"Node Schema",description:"Represents either an IRI (named node) or a blank node.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-querymsg-definitions-node.md",sourceDirName:".",slug:"/okp4-cognitarium-querymsg-definitions-node",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-node",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"NamedNode Schema",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-node-oneof-namednode"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-querymsg-definitions-prefix-properties-namespace"}},d={},u=[{value:"Node Type",id:"node-type",level:2}],s={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-schema"},"Node Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/query/definitions/Node\n")),(0,o.kt)("p",null,"Represents either an IRI (named node) or a blank node."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:n(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,o.kt)("h2",{id:"node-type"},"Node Type"),(0,o.kt)("p",null,"merged type (",(0,o.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-node"},"Node"),")"),(0,o.kt)("p",null,"one (and only one) of"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-node-oneof-namednode",title:"check type definition"},"NamedNode"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-querymsg-definitions-node-oneof-blanknode",title:"check type definition"},"BlankNode")))))}f.isMDXComponent=!0},26730:function(e,t,n){t.Z=n.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);