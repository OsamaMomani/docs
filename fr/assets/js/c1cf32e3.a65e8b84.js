"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[47275],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),d=s(a),u=r,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||o;return a?n.createElement(f,i(i({ref:e},c),{},{components:a})):n.createElement(f,i({ref:e},c))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59942:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,m={unversionedId:"okp4d_tx_wasm",id:"okp4d_tx_wasm",title:"okp4d_tx_wasm",description:"okp4d tx wasm",source:"@site/commands/okp4d_tx_wasm.md",sourceDirName:".",slug:"/okp4d_tx_wasm",permalink:"/fr/commands/next/okp4d_tx_wasm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_vesting_create-vesting-account",permalink:"/fr/commands/next/okp4d_tx_vesting_create-vesting-account"},next:{title:"okp4d_tx_wasm_clear-contract-admin",permalink:"/fr/commands/next/okp4d_tx_wasm_clear-contract-admin"}},p={},s=[{value:"okp4d tx wasm",id:"okp4d-tx-wasm",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:s};function l(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-wasm"},"okp4d tx wasm"),(0,r.kt)("p",null,"Wasm transaction subcommands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx wasm [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for wasm\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx"},"okp4d tx"),"\t - Transactions subcommands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_clear-contract-admin"},"okp4d tx wasm clear-contract-admin"),"\t - Clears admin for a contract to prevent further migrations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_execute"},"okp4d tx wasm execute"),"\t - Execute a command on a wasm contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_grant"},"okp4d tx wasm grant"),"\t - Grant authorization to an address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_instantiate"},"okp4d tx wasm instantiate"),"\t - Instantiate a wasm contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_instantiate2"},"okp4d tx wasm instantiate2"),"\t - Instantiate a wasm contract with predictable address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_migrate"},"okp4d tx wasm migrate"),"\t - Migrate a wasm contract to a new code version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_set-contract-admin"},"okp4d tx wasm set-contract-admin"),"\t - Set new admin for a contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_store"},"okp4d tx wasm store"),"\t - Upload a wasm binary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_submit-proposal"},"okp4d tx wasm submit-proposal"),"\t - Submit a wasm proposal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_wasm_update-instantiate-config"},"okp4d tx wasm update-instantiate-config"),"\t - Update instantiate config for a codeID")))}l.isMDXComponent=!0}}]);