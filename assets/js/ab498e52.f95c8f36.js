"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9082],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,f=c["".concat(d,".").concat(g)]||c[g]||p[g]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=c;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15507:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],u={},d=void 0,s={unversionedId:"okp4d_query_staking_unbonding-delegations",id:"okp4d_query_staking_unbonding-delegations",title:"okp4d_query_staking_unbonding-delegations",description:"okp4d query staking unbonding-delegations",source:"@site/commands/okp4d_query_staking_unbonding-delegations.md",sourceDirName:".",slug:"/okp4d_query_staking_unbonding-delegations",permalink:"/commands/okp4d_query_staking_unbonding-delegations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_staking_unbonding-delegations-from",permalink:"/commands/okp4d_query_staking_unbonding-delegations-from"},next:{title:"okp4d_query_staking_validator",permalink:"/commands/okp4d_query_staking_validator"}},l={},p=[{value:"okp4d query staking unbonding-delegations",id:"okp4d-query-staking-unbonding-delegations",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-staking-unbonding-delegations"},"okp4d query staking unbonding-delegations"),(0,i.kt)("p",null,"Query all unbonding-delegations records for one delegator"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Query unbonding delegations for an individual delegator."),(0,i.kt)("p",null,"Example:\n$ okp4d query staking unbonding-delegations okp41gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query staking unbonding-delegations [delegator-addr] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in unbonding delegations to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for unbonding-delegations\n      --limit uint        pagination limit of unbonding delegations to query for (default 100)\n      --node string       &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of unbonding delegations to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of unbonding delegations to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of unbonding delegations to query for\n      --reverse           results are sorted in descending order\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/okp4d_query_staking"},"okp4d query staking"),"\t - Querying commands for the staking module")))}g.isMDXComponent=!0}}]);