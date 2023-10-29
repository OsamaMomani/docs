"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[57079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,g=k["".concat(d,".").concat(m)]||k[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"okp4d_query_staking",id:"okp4d_query_staking",title:"okp4d_query_staking",description:"okp4d query staking",source:"@site/commands/okp4d_query_staking.md",sourceDirName:".",slug:"/okp4d_query_staking",permalink:"/commands/next/okp4d_query_staking",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_slashing_signing-infos",permalink:"/commands/next/okp4d_query_slashing_signing-infos"},next:{title:"okp4d_query_staking_delegation",permalink:"/commands/next/okp4d_query_staking_delegation"}},d={},s=[{value:"okp4d query staking",id:"okp4d-query-staking",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-query-staking"},"okp4d query staking"),(0,r.kt)("p",null,"Querying commands for the staking module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d query staking [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for staking\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query"},"okp4d query"),"\t - Querying subcommands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_delegation"},"okp4d query staking delegation"),"\t - Query a delegation based on address and validator address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_delegations"},"okp4d query staking delegations"),"\t - Query all delegations made by one delegator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_delegations-to"},"okp4d query staking delegations-to"),"\t - Query all delegations made to one validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_historical-info"},"okp4d query staking historical-info"),"\t - Query historical info at given height"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_params"},"okp4d query staking params"),"\t - Query the current staking parameters information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_pool"},"okp4d query staking pool"),"\t - Query the current staking pool values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_redelegation"},"okp4d query staking redelegation"),"\t - Query a redelegation record based on delegator and a source and destination validator address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_redelegations"},"okp4d query staking redelegations"),"\t - Query all redelegations records for one delegator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_redelegations-from"},"okp4d query staking redelegations-from"),"\t - Query all outgoing redelegatations from a validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_unbonding-delegation"},"okp4d query staking unbonding-delegation"),"\t - Query an unbonding-delegation record based on delegator and validator address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_unbonding-delegations"},"okp4d query staking unbonding-delegations"),"\t - Query all unbonding-delegations records for one delegator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_unbonding-delegations-from"},"okp4d query staking unbonding-delegations-from"),"\t - Query all unbonding delegatations from a validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_validator"},"okp4d query staking validator"),"\t - Query a validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking_validators"},"okp4d query staking validators"),"\t - Query for all validators")))}u.isMDXComponent=!0}}]);