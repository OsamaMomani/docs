"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[47275],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||l[u]||o;return n?a.createElement(k,i(i({ref:e},c),{},{components:n})):a.createElement(k,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12223:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return l}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],m={},p=void 0,s={unversionedId:"okp4d_tx_wasm",id:"okp4d_tx_wasm",title:"okp4d_tx_wasm",description:"okp4d tx wasm",source:"@site/commands/okp4d_tx_wasm.md",sourceDirName:".",slug:"/okp4d_tx_wasm",permalink:"/commands/next/okp4d_tx_wasm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_vesting_create-vesting-account",permalink:"/commands/next/okp4d_tx_vesting_create-vesting-account"},next:{title:"okp4d_tx_wasm_clear-contract-admin",permalink:"/commands/next/okp4d_tx_wasm_clear-contract-admin"}},c={},l=[{value:"okp4d tx wasm",id:"okp4d-tx-wasm",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:l};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"okp4d-tx-wasm"},"okp4d tx wasm"),(0,o.kt)("p",null,"Wasm transaction subcommands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"okp4d tx wasm [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for wasm\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx"},"okp4d tx"),"\t - Transactions subcommands"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_clear-contract-admin"},"okp4d tx wasm clear-contract-admin"),"\t - Clears admin for a contract to prevent further migrations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_execute"},"okp4d tx wasm execute"),"\t - Execute a command on a wasm contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_grant"},"okp4d tx wasm grant"),"\t - Grant authorization to an address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_instantiate"},"okp4d tx wasm instantiate"),"\t - Instantiate a wasm contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_instantiate2"},"okp4d tx wasm instantiate2"),"\t - Instantiate a wasm contract with predictable address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_migrate"},"okp4d tx wasm migrate"),"\t - Migrate a wasm contract to a new code version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_set-contract-admin"},"okp4d tx wasm set-contract-admin"),"\t - Set new admin for a contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_store"},"okp4d tx wasm store"),"\t - Upload a wasm binary"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_submit-proposal"},"okp4d tx wasm submit-proposal"),"\t - Submit a wasm proposal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_wasm_update-instantiate-config"},"okp4d tx wasm update-instantiate-config"),"\t - Update instantiate config for a codeID")))}u.isMDXComponent=!0}}]);