"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[27113],{3905:function(e,r,o){o.d(r,{Zo:function(){return s},kt:function(){return d}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function u(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=t.createContext({}),l=function(e){var r=t.useContext(a),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},s=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),y=l(o),d=n,f=y["".concat(a,".").concat(d)]||y[d]||c[d]||p;return o?t.createElement(f,i(i({ref:r},s),{},{components:o})):t.createElement(f,i({ref:r},s))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=o.length,i=new Array(p);i[0]=y;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<p;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}y.displayName="MDXCreateElement"},72859:function(e,r,o){o.r(r),o.d(r,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var t=o(87462),n=o(63366),p=(o(67294),o(3905)),i=["components"],u={},a=void 0,l={unversionedId:"okp4d_query_group_proposals-by-group-policy",id:"version-v5.0.0/okp4d_query_group_proposals-by-group-policy",title:"okp4d_query_group_proposals-by-group-policy",description:"okp4d query group proposals-by-group-policy",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_group_proposals-by-group-policy.md",sourceDirName:".",slug:"/okp4d_query_group_proposals-by-group-policy",permalink:"/commands/okp4d_query_group_proposals-by-group-policy",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_proposal",permalink:"/commands/okp4d_query_group_proposal"},next:{title:"okp4d_query_group_tally-result",permalink:"/commands/okp4d_query_group_tally-result"}},s={},c=[{value:"okp4d query group proposals-by-group-policy",id:"okp4d-query-group-proposals-by-group-policy",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],y={toc:c};function d(e){var r=e.components,o=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},y,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"okp4d-query-group-proposals-by-group-policy"},"okp4d query group proposals-by-group-policy"),(0,p.kt)("p",null,"Query for proposals by account address of group policy with pagination flags"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"okp4d query group proposals-by-group-policy [group-policy-account] [flags]\n")),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in proposals-by-group-policy to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for proposals-by-group-policy\n      --limit uint         pagination limit of proposals-by-group-policy to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of proposals-by-group-policy to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of proposals-by-group-policy to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of proposals-by-group-policy to query for\n      --reverse            results are sorted in descending order\n')),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}d.isMDXComponent=!0}}]);