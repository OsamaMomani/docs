"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[79989],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),g=n,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||r;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},10287:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={},i=void 0,s={unversionedId:"okp4d_tx_gov_submit-legacy-proposal",id:"okp4d_tx_gov_submit-legacy-proposal",title:"okp4d_tx_gov_submit-legacy-proposal",description:"okp4d tx gov submit-legacy-proposal",source:"@site/commands/okp4d_tx_gov_submit-legacy-proposal.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-legacy-proposal",permalink:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_draft-proposal",permalink:"/fr/commands/next/okp4d_tx_gov_draft-proposal"},next:{title:"okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade",permalink:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"}},p={},l=[{value:"okp4d tx gov submit-legacy-proposal",id:"okp4d-tx-gov-submit-legacy-proposal",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-tx-gov-submit-legacy-proposal"},"okp4d tx gov submit-legacy-proposal"),(0,n.kt)("p",null,"Submit a legacy proposal along with an initial deposit"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Submit a legacy proposal along with an initial deposit.\nProposal title, description, type and deposit can be given directly or through a proposal JSON file."),(0,n.kt)("p",null,'Example:\n$ okp4d tx gov submit-legacy-proposal --proposal="path/to/proposal.json" --from mykey'),(0,n.kt)("p",null,"Where proposal.json contains:"),(0,n.kt)("p",null,'{\n"title": "Test Proposal",\n"description": "My awesome proposal",\n"type": "Text",\n"deposit": "10test"\n}'),(0,n.kt)("p",null,"Which is equivalent to:"),(0,n.kt)("p",null,'$ okp4d tx gov submit-legacy-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10test" --from mykey'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d tx gov submit-legacy-proposal [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --deposit string           The proposal deposit\n      --description string       The proposal description\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for submit-legacy-proposal\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              &lt;host&gt;:&lt;port&gt; to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --proposal string          Proposal file path (if this path is given, other proposal flags are ignored)\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             The proposal title\n      --type string              The proposal Type\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov"},"okp4d tx gov"),"\t - Governance transactions subcommands"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_cancel-software-upgrade"},"okp4d tx gov submit-legacy-proposal cancel-software-upgrade"),"\t - Cancel the current software upgrade proposal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_ibc-upgrade"},"okp4d tx gov submit-legacy-proposal ibc-upgrade"),"\t - Submit an IBC upgrade proposal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_param-change"},"okp4d tx gov submit-legacy-proposal param-change"),"\t - Submit a parameter change proposal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_software-upgrade"},"okp4d tx gov submit-legacy-proposal software-upgrade"),"\t - Submit a software upgrade proposal"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal_update-client"},"okp4d tx gov submit-legacy-proposal update-client"),"\t - Submit an update IBC client proposal")))}d.isMDXComponent=!0}}]);