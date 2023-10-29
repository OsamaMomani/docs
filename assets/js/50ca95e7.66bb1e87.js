"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[30972],{3905:(e,r,o)=>{o.d(r,{Zo:()=>u,kt:()=>m});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),l=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||p;return o?t.createElement(f,a(a({ref:r},u),{},{components:o})):t.createElement(f,a({ref:r},u))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=o.length,a=new Array(p);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<p;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},54774:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var t=o(87462),n=(o(67294),o(3905));const p={},a=void 0,i={unversionedId:"okp4d_query_gov_proposal",id:"version-v5.0.0/okp4d_query_gov_proposal",title:"okp4d_query_gov_proposal",description:"okp4d query gov proposal",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_gov_proposal.md",sourceDirName:".",slug:"/okp4d_query_gov_proposal",permalink:"/commands/okp4d_query_gov_proposal",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_gov_params",permalink:"/commands/okp4d_query_gov_params"},next:{title:"okp4d_query_gov_proposals",permalink:"/commands/okp4d_query_gov_proposals"}},s={},l=[{value:"okp4d query gov proposal",id:"okp4d-query-gov-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:l};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-gov-proposal"},"okp4d query gov proposal"),(0,n.kt)("p",null,"Query details of a single proposal"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,'Query details for a proposal. You can find the\nproposal-id by running "okp4d query gov proposals".'),(0,n.kt)("p",null,"Example:\n$ okp4d query gov proposal 1"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query gov proposal [proposal-id] [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for proposal\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_gov"},"okp4d query gov"),"\t - Querying commands for the governance module")))}c.isMDXComponent=!0}}]);