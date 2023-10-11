"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[63751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return r?o.createElement(m,p(p({ref:t},l),{},{components:r})):o.createElement(m,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var d=2;d<i;d++)p[d]=r[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={},p=void 0,a={unversionedId:"okp4d_query_gov_deposit",id:"version-v5.0.0/okp4d_query_gov_deposit",title:"okp4d_query_gov_deposit",description:"okp4d query gov deposit",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_gov_deposit.md",sourceDirName:".",slug:"/okp4d_query_gov_deposit",permalink:"/fr/commands/okp4d_query_gov_deposit",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_gov",permalink:"/fr/commands/okp4d_query_gov"},next:{title:"okp4d_query_gov_deposits",permalink:"/fr/commands/okp4d_query_gov_deposits"}},s={},d=[{value:"okp4d query gov deposit",id:"okp4d-query-gov-deposit",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-gov-deposit"},"okp4d query gov deposit"),(0,n.kt)("p",null,"Query details of a deposit"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Query details for a single proposal deposit on a proposal by its identifier."),(0,n.kt)("p",null,"Example:\n$ okp4d query gov deposit 1 cosmos1skjwj5whet0lpe65qaq4rpq03hjxlwd9nf39lk"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query gov deposit [proposal-id] [depositer-addr] [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for deposit\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_query_gov"},"okp4d query gov"),"\t - Querying commands for the governance module")))}u.isMDXComponent=!0}}]);