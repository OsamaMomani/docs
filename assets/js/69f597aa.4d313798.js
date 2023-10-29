"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[30642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||r;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={},a=void 0,s={unversionedId:"okp4d_tx_vesting_create-periodic-vesting-account",id:"okp4d_tx_vesting_create-periodic-vesting-account",title:"okp4d_tx_vesting_create-periodic-vesting-account",description:"okp4d tx vesting create-periodic-vesting-account",source:"@site/commands/okp4d_tx_vesting_create-periodic-vesting-account.md",sourceDirName:".",slug:"/okp4d_tx_vesting_create-periodic-vesting-account",permalink:"/commands/next/okp4d_tx_vesting_create-periodic-vesting-account",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_vesting_create-cliff-vesting-account",permalink:"/commands/next/okp4d_tx_vesting_create-cliff-vesting-account"},next:{title:"okp4d_tx_vesting_create-permanent-locked-account",permalink:"/commands/next/okp4d_tx_vesting_create-permanent-locked-account"}},c={},d=[{value:"okp4d tx vesting create-periodic-vesting-account",id:"okp4d-tx-vesting-create-periodic-vesting-account",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-tx-vesting-create-periodic-vesting-account"},"okp4d tx vesting create-periodic-vesting-account"),(0,i.kt)("p",null,"Create a new vesting account funded with an allocation of tokens."),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,'A sequence of coins and period length in seconds. Periods are sequential, in that the duration of of a period only starts at the end of the previous period. The duration of the first period starts upon account creation. For instance, the following periods.json file shows 20 "test" coins vesting 30 days apart from each other.\nWhere periods.json contains:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    An array of coin strings and unix epoch times for coins to vest\n")),(0,i.kt)("p",null,'{ "start_time": 1625204910,\n"period":','[\n{\n"coins": "10test",\n"length_seconds":2592000 //30 days\n},\n{\n"coins": "10test",\n"length_seconds":2592000 //30 days\n},\n]',"\n}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d tx vesting create-periodic-vesting-account [to_address] [periods_json_file] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for create-periodic-vesting-account\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/next/okp4d_tx_vesting"},"okp4d tx vesting"),"\t - Vesting transaction subcommands")))}p.isMDXComponent=!0}}]);