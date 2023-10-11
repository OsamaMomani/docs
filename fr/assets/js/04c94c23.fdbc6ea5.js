"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[69295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return r?o.createElement(m,p(p({ref:t},d),{},{components:r})):o.createElement(m,p({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},p=void 0,i={unversionedId:"okp4d_export",id:"version-v5.0.0/okp4d_export",title:"okp4d_export",description:"okp4d export",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_export.md",sourceDirName:".",slug:"/okp4d_export",permalink:"/fr/commands/okp4d_export",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_debug_raw-bytes",permalink:"/fr/commands/okp4d_debug_raw-bytes"},next:{title:"okp4d_gentx",permalink:"/fr/commands/okp4d_gentx"}},l={},s=[{value:"okp4d export",id:"okp4d-export",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-export"},"okp4d export"),(0,n.kt)("p",null,"Export state to JSON"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d export [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --for-zero-height              Export state to start at height zero (perform preproccessing)\n      --height int                   Export state from a particular height (-1 means latest height) (default -1)\n  -h, --help                         help for export\n      --home string                  The application home directory (default "/home/john/.okp4d")\n      --jail-allowed-addrs strings   Comma-separated list of operator addresses of jailed validators to unjail\n      --modules-to-export strings    Comma-separated list of modules to export. If empty, will export all modules\n      --output-document string       Exported state is written to the given file instead of STDOUT\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d"},"okp4d"),"\t - OKP4 Daemon \ud83d\udc79")))}c.isMDXComponent=!0}}]);