"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[2452],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=c,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(87462),c=(t(67294),t(3905));const i={},a=void 0,o={unversionedId:"okp4d_query_ibc_channel_unreceived-packets",id:"version-v5.0.0/okp4d_query_ibc_channel_unreceived-packets",title:"okp4d_query_ibc_channel_unreceived-packets",description:"okp4d query ibc channel unreceived-packets",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_ibc_channel_unreceived-packets.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_unreceived-packets",permalink:"/commands/okp4d_query_ibc_channel_unreceived-packets",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_unreceived-acks",permalink:"/commands/okp4d_query_ibc_channel_unreceived-acks"},next:{title:"okp4d_query_ibc_client",permalink:"/commands/okp4d_query_ibc_client"}},p={},l=[{value:"okp4d query ibc channel unreceived-packets",id:"okp4d-query-ibc-channel-unreceived-packets",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"okp4d-query-ibc-channel-unreceived-packets"},"okp4d query ibc channel unreceived-packets"),(0,c.kt)("p",null,"Query all the unreceived packets associated with a channel"),(0,c.kt)("h3",{id:"synopsis"},"Synopsis"),(0,c.kt)("p",null,"Determine if a packet, given a list of packet commitment sequences, is unreceived."),(0,c.kt)("p",null,"The return value represents:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Unreceived packet commitments: no acknowledgement exists on receiving chain for the given packet commitment sequence on sending chain.")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-packets [port-id] [channel-id] [flags]\n")),(0,c.kt)("h3",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-packets [port-id] [channel-id] --sequences=1,2,3\n")),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'      --grpc-addr string       the gRPC endpoint to use for this chain\n      --grpc-insecure          allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int             Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                   help for unreceived-packets\n      --node string            &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string          Output format (text|json) (default "text")\n      --sequences int64Slice   comma separated list of packet sequence numbers (default [])\n')),(0,c.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,c.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_ibc_channel"},"okp4d query ibc channel"),"\t - IBC channel query subcommands")))}u.isMDXComponent=!0}}]);