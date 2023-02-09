"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9989],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return d}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function p(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=l(o),d=n,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return o?a.createElement(g,i(i({ref:e},c),{},{components:o})):a.createElement(g,i({ref:e},c))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9143:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],p={},s=void 0,l={unversionedId:"okp4d_tx_gov_submit-legacy-proposal",id:"okp4d_tx_gov_submit-legacy-proposal",title:"okp4d_tx_gov_submit-legacy-proposal",description:"okp4d tx gov submit-legacy-proposal",source:"@site/commands/okp4d_tx_gov_submit-legacy-proposal.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-legacy-proposal",permalink:"/commands/okp4d_tx_gov_submit-legacy-proposal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_draft-proposal",permalink:"/commands/okp4d_tx_gov_draft-proposal"},next:{title:"okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade",permalink:"/commands/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"}},c={},m=[{value:"okp4d tx gov submit-legacy-proposal",id:"okp4d-tx-gov-submit-legacy-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:m};function d(t){var e=t.components,o=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-tx-gov-submit-legacy-proposal"},"okp4d tx gov submit-legacy-proposal"),(0,r.kt)("p",null,"Submit a legacy proposal along with an initial deposit"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Submit a legacy proposal along with an initial deposit.\nProposal title, description, type and deposit can be given directly or through a proposal JSON file."),(0,r.kt)("p",null,'Example:\n$ okp4d tx gov submit-legacy-proposal --proposal="path/to/proposal.json" --from mykey'),(0,r.kt)("p",null,"Where proposal.json contains:"),(0,r.kt)("p",null,'{\n"title": "Test Proposal",\n"description": "My awesome proposal",\n"type": "Text",\n"deposit": "10test"\n}'),(0,r.kt)("p",null,"Which is equivalent to:"),(0,r.kt)("p",null,'$ okp4d tx gov submit-legacy-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10test" --from mykey'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d tx gov submit-legacy-proposal [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async|block) (default "sync")\n      --deposit string           The proposal deposit\n      --description string       The proposal description\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-legacy-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --proposal string          Proposal file path (if this path is given, other proposal flags are ignored)\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             The proposal title\n      --type string              The proposal Type\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov"},"okp4d tx gov"),"\t - Governance transactions subcommands"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"},"okp4d tx gov submit-legacy-proposal cancel-software-upgrade"),"\t - Cancel the current software upgrade proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_clear-contract-admin"},"okp4d tx gov submit-legacy-proposal clear-contract-admin"),"\t - Submit a clear admin for a contract to prevent further migrations proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_community-pool-spend"},"okp4d tx gov submit-legacy-proposal community-pool-spend"),"\t - Submit a community pool spend proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_execute-contract"},"okp4d tx gov submit-legacy-proposal execute-contract"),"\t - Submit a execute wasm contract proposal (run by any address)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade"},"okp4d tx gov submit-legacy-proposal ibc-upgrade"),"\t - Submit an IBC upgrade proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_instantiate-contract"},"okp4d tx gov submit-legacy-proposal instantiate-contract"),"\t - Submit an instantiate wasm contract proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_migrate-contract"},"okp4d tx gov submit-legacy-proposal migrate-contract"),"\t - Submit a migrate wasm contract to a new code version proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_param-change"},"okp4d tx gov submit-legacy-proposal param-change"),"\t - Submit a parameter change proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_pin-codes"},"okp4d tx gov submit-legacy-proposal pin-codes"),"\t - Submit a pin code proposal for pinning a code to cache"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_set-contract-admin"},"okp4d tx gov submit-legacy-proposal set-contract-admin"),"\t - Submit a new admin for a contract proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_software-upgrade"},"okp4d tx gov submit-legacy-proposal software-upgrade"),"\t - Submit a software upgrade proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_sudo-contract"},"okp4d tx gov submit-legacy-proposal sudo-contract"),"\t - Submit a sudo wasm contract proposal (to call privileged commands)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_unpin-codes"},"okp4d tx gov submit-legacy-proposal unpin-codes"),"\t - Submit a unpin code proposal for unpinning a code to cache"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_update-client"},"okp4d tx gov submit-legacy-proposal update-client"),"\t - Submit an update IBC client proposal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_update-instantiate-config"},"okp4d tx gov submit-legacy-proposal update-instantiate-config"),"\t - Submit an update instantiate config proposal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/okp4d_tx_gov_submit-legacy-proposal_wasm-store"},"okp4d tx gov submit-legacy-proposal wasm-store"),"\t - Submit a wasm binary proposal")))}d.isMDXComponent=!0}}]);