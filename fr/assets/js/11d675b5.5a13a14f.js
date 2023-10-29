"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[61497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,y=d["".concat(s,".").concat(f)]||d[f]||c[f]||p;return r?o.createElement(y,a(a({ref:t},l),{},{components:r})):o.createElement(y,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<p;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const p={},a=void 0,i={unversionedId:"okp4d_query_group_votes-by-proposal",id:"okp4d_query_group_votes-by-proposal",title:"okp4d_query_group_votes-by-proposal",description:"okp4d query group votes-by-proposal",source:"@site/commands/okp4d_query_group_votes-by-proposal.md",sourceDirName:".",slug:"/okp4d_query_group_votes-by-proposal",permalink:"/fr/commands/next/okp4d_query_group_votes-by-proposal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_vote",permalink:"/fr/commands/next/okp4d_query_group_vote"},next:{title:"okp4d_query_group_votes-by-voter",permalink:"/fr/commands/next/okp4d_query_group_votes-by-voter"}},s={},u=[{value:"okp4d query group votes-by-proposal",id:"okp4d-query-group-votes-by-proposal",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-group-votes-by-proposal"},"okp4d query group votes-by-proposal"),(0,n.kt)("p",null,"Query for votes by proposal id with pagination flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query group votes-by-proposal [proposal-id] [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in votes-by-proposal to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for votes-by-proposal\n      --limit uint         pagination limit of votes-by-proposal to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of votes-by-proposal to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of votes-by-proposal to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of votes-by-proposal to query for\n      --reverse            results are sorted in descending order\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}c.isMDXComponent=!0}}]);