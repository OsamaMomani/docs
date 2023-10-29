"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[43624],{3905:(t,a,e)=>{e.d(a,{Zo:()=>l,kt:()=>u});var o=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,o)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,o,r=function(t,a){if(null==t)return{};var e,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)e=n[o],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)e=n[o],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=o.createContext({}),m=function(t){var a=o.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},l=function(t){var a=m(t.components);return o.createElement(i.Provider,{value:a},t.children)},c={inlineCode:"code",wrapper:function(t){var a=t.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(t,a){var e=t.components,r=t.mdxType,n=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=m(e),u=r,k=d["".concat(i,".").concat(u)]||d[u]||c[u]||n;return e?o.createElement(k,p(p({ref:a},l),{},{components:e})):o.createElement(k,p({ref:a},l))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var n=e.length,p=new Array(n);p[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,p[1]=s;for(var m=2;m<n;m++)p[m]=e[m];return o.createElement.apply(null,p)}return o.createElement.apply(null,e)}d.displayName="MDXCreateElement"},76117:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var o=e(87462),r=(e(67294),e(3905));const n={},p=void 0,s={unversionedId:"okp4d_tx_wasm_submit-proposal",id:"version-v5.0.0/okp4d_tx_wasm_submit-proposal",title:"okp4d_tx_wasm_submit-proposal",description:"okp4d tx wasm submit-proposal",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_wasm_submit-proposal.md",sourceDirName:".",slug:"/okp4d_tx_wasm_submit-proposal",permalink:"/commands/okp4d_tx_wasm_submit-proposal",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_store",permalink:"/commands/okp4d_tx_wasm_store"},next:{title:"okp4d_tx_wasm_submit-proposal_clear-contract-admin",permalink:"/commands/okp4d_tx_wasm_submit-proposal_clear-contract-admin"}},i={},m=[{value:"okp4d tx wasm submit-proposal",id:"okp4d-tx-wasm-submit-proposal",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:m};function c(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-wasm-submit-proposal"},"okp4d tx wasm submit-proposal"),(0,r.kt)("p",null,"Submit a wasm proposal."),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for submit-proposal\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm"},"okp4d tx wasm"),"\t - Wasm transaction subcommands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_clear-contract-admin"},"okp4d tx wasm submit-proposal clear-contract-admin"),"\t - Submit a clear admin for a contract to prevent further migrations proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_execute-contract"},"okp4d tx wasm submit-proposal execute-contract"),"\t - Submit a execute wasm contract proposal (run by any address)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_instantiate-contract"},"okp4d tx wasm submit-proposal instantiate-contract"),"\t - Submit an instantiate wasm contract proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_instantiate-contract-2"},"okp4d tx wasm submit-proposal instantiate-contract-2"),"\t - Submit an instantiate wasm contract proposal with predictable address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_migrate-contract"},"okp4d tx wasm submit-proposal migrate-contract"),"\t - Submit a migrate wasm contract to a new code version proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_pin-codes"},"okp4d tx wasm submit-proposal pin-codes"),"\t - Submit a pin code proposal for pinning a code to cache"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_set-contract-admin"},"okp4d tx wasm submit-proposal set-contract-admin"),"\t - Submit a new admin for a contract proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_store-instantiate"},"okp4d tx wasm submit-proposal store-instantiate"),"\t - Submit and instantiate a wasm contract proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_sudo-contract"},"okp4d tx wasm submit-proposal sudo-contract"),"\t - Submit a sudo wasm contract proposal (to call privileged commands)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_unpin-codes"},"okp4d tx wasm submit-proposal unpin-codes"),"\t - Submit a unpin code proposal for unpinning a code to cache"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_update-instantiate-config"},"okp4d tx wasm submit-proposal update-instantiate-config"),"\t - Submit an update instantiate config proposal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal_wasm-store"},"okp4d tx wasm submit-proposal wasm-store"),"\t - Submit a wasm binary proposal")))}c.isMDXComponent=!0}}]);