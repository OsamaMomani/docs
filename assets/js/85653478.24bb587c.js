"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9104],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=d(t,["components","mdxType","originalType","parentName"]),c=u(r),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,a(a({ref:e},l),{},{components:r})):n.createElement(f,a({ref:e},l))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,a=new Array(o);a[0]=c;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d.mdxType="string"==typeof t?t:i,a[1]=d;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},41422:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={},a=void 0,d={unversionedId:"okp4d_query_distribution_validator-outstanding-rewards",id:"okp4d_query_distribution_validator-outstanding-rewards",title:"okp4d_query_distribution_validator-outstanding-rewards",description:"okp4d query distribution validator-outstanding-rewards",source:"@site/commands/okp4d_query_distribution_validator-outstanding-rewards.md",sourceDirName:".",slug:"/okp4d_query_distribution_validator-outstanding-rewards",permalink:"/commands/next/okp4d_query_distribution_validator-outstanding-rewards",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_distribution_validator-distribution-info",permalink:"/commands/next/okp4d_query_distribution_validator-distribution-info"},next:{title:"okp4d_query_evidence",permalink:"/commands/next/okp4d_query_evidence"}},s={},u=[{value:"okp4d query distribution validator-outstanding-rewards",id:"okp4d-query-distribution-validator-outstanding-rewards",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:u};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-distribution-validator-outstanding-rewards"},"okp4d query distribution validator-outstanding-rewards"),(0,i.kt)("p",null,"Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations."),(0,i.kt)("p",null,"Example:\n$ okp4d query distribution validator-outstanding-rewards okp4valoper1lwjmdnks33xwnmfayc64ycprww49n33mtm92ne"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query distribution validator-outstanding-rewards [validator] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for validator-outstanding-rewards\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_distribution"},"okp4d query distribution"),"\t - Querying commands for the distribution module")))}p.isMDXComponent=!0}}]);