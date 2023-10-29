"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[33827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(h,c(c({ref:n},p),{},{components:t})):o.createElement(h,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={},c=void 0,a={unversionedId:"okp4d_query_ibc_channel_connections",id:"okp4d_query_ibc_channel_connections",title:"okp4d_query_ibc_channel_connections",description:"okp4d query ibc channel connections",source:"@site/commands/okp4d_query_ibc_channel_connections.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_connections",permalink:"/commands/next/okp4d_query_ibc_channel_connections",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_client-state",permalink:"/commands/next/okp4d_query_ibc_channel_client-state"},next:{title:"okp4d_query_ibc_channel_end",permalink:"/commands/next/okp4d_query_ibc_channel_end"}},l={},s=[{value:"okp4d query ibc channel connections",id:"okp4d-query-ibc-channel-connections",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-query-ibc-channel-connections"},"okp4d query ibc channel connections"),(0,r.kt)("p",null,"Query all channels associated with a connection"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Query all channels associated with a connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d query ibc channel connections [connection-id] [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d query ibc channel connections [connection-id]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in channels associated with a connection to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for connections\n      --limit uint         pagination limit of channels associated with a connection to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of channels associated with a connection to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of channels associated with a connection to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of channels associated with a connection to query for\n      --reverse            results are sorted in descending order\n')),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_ibc_channel"},"okp4d query ibc channel"),"\t - IBC channel query subcommands")))}u.isMDXComponent=!0}}]);