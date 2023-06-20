"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[57543],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return n?i.createElement(d,o(o({ref:e},u),{},{components:n})):i.createElement(d,o({ref:e},u))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88302:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={},s="Untitled undefined type in okp4-cognitarium Schema",p={unversionedId:"okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",id:"version-v2.0.0/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",title:"Untitled undefined type in okp4-cognitarium Schema",description:"The maximum number of bytes the store can contains for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to \\[Uint128::MAX] if not set, which can be considered as no limit.",source:"@site/contracts_versioned_docs/version-v2.0.0/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size.md",sourceDirName:".",slug:"/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",permalink:"/contracts/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",draft:!1,tags:[],version:"v2.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size-allof-0"},next:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count-allof-0"}},u={},c=[{value:"max_triple_byte_size Type",id:"max_triple_byte_size-type",level:2},{value:"max_triple_byte_size Default Value",id:"max_triple_byte_size-default-value",level:2}],m={toc:c};function f(t){var e=t.components,l=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"untitled-undefined-type-in-okp4-cognitarium-schema"},"Untitled undefined type in okp4-cognitarium Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_byte_size\n")),(0,a.kt)("p",null,"The maximum number of bytes the store can contains for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(26730).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,a.kt)("h2",{id:"max_triple_byte_size-type"},"max","_","triple","_","byte","_","size Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size"},"Details"),")"),(0,a.kt)("p",null,"all of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,a.kt)("h2",{id:"max_triple_byte_size-default-value"},"max","_","triple","_","byte","_","size Default Value"),(0,a.kt)("p",null,"The default value is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')))}f.isMDXComponent=!0},26730:function(t,e,n){e.Z=n.p+"assets/files/okp4-cognitarium-8b047f6626171599919daf0f24fc304f.json"}}]);