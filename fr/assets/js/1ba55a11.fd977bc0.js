"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[47120],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),s=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return o.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,g=d["".concat(a,".").concat(f)]||d[f]||c[f]||p;return t?o.createElement(g,u(u({ref:r},l),{},{components:t})):o.createElement(g,u({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,u=new Array(p);u[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var s=2;s<p;s++)u[s]=t[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70794:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const p={},u=void 0,i={unversionedId:"okp4d_query_group_groups",id:"version-v5.0.0/okp4d_query_group_groups",title:"okp4d_query_group_groups",description:"okp4d query group groups",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_group_groups.md",sourceDirName:".",slug:"/okp4d_query_group_groups",permalink:"/fr/commands/okp4d_query_group_groups",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_groups-by-member",permalink:"/fr/commands/okp4d_query_group_groups-by-member"},next:{title:"okp4d_query_group_proposal",permalink:"/fr/commands/okp4d_query_group_proposal"}},a={},s=[{value:"okp4d query group groups",id:"okp4d-query-group-groups",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-group-groups"},"okp4d query group groups"),(0,n.kt)("p",null,"Query for groups present in the state"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query group groups [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in groups to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for groups\n      --limit uint         pagination limit of groups to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of groups to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of groups to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of groups to query for\n      --reverse            results are sorted in descending order\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}c.isMDXComponent=!0}}]);