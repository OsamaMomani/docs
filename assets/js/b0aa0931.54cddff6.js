"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[3617],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,y=d["".concat(a,".").concat(f)]||d[f]||s[f]||u;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,l=new Array(u);l[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<u;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12023:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s}});var n=r(87462),o=r(63366),u=(r(67294),r(3905)),l=["components"],p={},a=void 0,i={unversionedId:"okp4d_query_group_tally-result",id:"okp4d_query_group_tally-result",title:"okp4d_query_group_tally-result",description:"okp4d query group tally-result",source:"@site/commands/okp4d_query_group_tally-result.md",sourceDirName:".",slug:"/okp4d_query_group_tally-result",permalink:"/commands/okp4d_query_group_tally-result",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_proposals-by-group-policy",permalink:"/commands/okp4d_query_group_proposals-by-group-policy"},next:{title:"okp4d_query_group_vote",permalink:"/commands/okp4d_query_group_vote"}},c={},s=[{value:"okp4d query group tally-result",id:"okp4d-query-group-tally-result",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,u.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"okp4d-query-group-tally-result"},"okp4d query group tally-result"),(0,u.kt)("p",null,"Query tally result of proposal"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"okp4d query group tally-result [proposal-id] [flags]\n")),(0,u.kt)("h3",{id:"options"},"Options"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for tally-result\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n')),(0,u.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,u.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"/commands/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}f.isMDXComponent=!0}}]);