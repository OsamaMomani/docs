"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[68234],{34175:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=o(85893),a=o(11151);const i={},s=void 0,r={id:"okp4d_tx_gov_submit-legacy-proposal_software-upgrade",title:"okp4d_tx_gov_submit-legacy-proposal_software-upgrade",description:"okp4d tx gov submit-legacy-proposal software-upgrade",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_gov_submit-legacy-proposal_software-upgrade.md",sourceDirName:".",slug:"/okp4d_tx_gov_submit-legacy-proposal_software-upgrade",permalink:"/fr/commands/okp4d_tx_gov_submit-legacy-proposal_software-upgrade",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_gov_submit-legacy-proposal_param-change",permalink:"/fr/commands/okp4d_tx_gov_submit-legacy-proposal_param-change"},next:{title:"okp4d_tx_gov_submit-legacy-proposal_update-client",permalink:"/fr/commands/okp4d_tx_gov_submit-legacy-proposal_update-client"}},d={},l=[{value:"okp4d tx gov submit-legacy-proposal software-upgrade",id:"okp4d-tx-gov-submit-legacy-proposal-software-upgrade",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"okp4d-tx-gov-submit-legacy-proposal-software-upgrade",children:"okp4d tx gov submit-legacy-proposal software-upgrade"}),"\n",(0,n.jsx)(t.p,{children:"Submit a software upgrade proposal"}),"\n",(0,n.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsxs)(t.p,{children:["Submit a software upgrade along with an initial deposit.\nPlease specify a unique name and height for the upgrade to take effect.\nYou may include info to reference a binary download link, in a format compatible with: <",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/tree/main/cosmovisor",children:"https://github.com/cosmos/cosmos-sdk/tree/main/cosmovisor"}),">"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"okp4d tx gov submit-legacy-proposal software-upgrade [name] (--upgrade-height [height]) (--upgrade-info [info]) [flags]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --daemon-name string       The name of the executable being upgraded (for upgrade-info validation). Default is the DAEMON_NAME env var if set, or else this executable (default "generate_command_doc")\n      --deposit string           deposit of proposal\n      --description string       description of proposal\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for software-upgrade\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --no-validate              Skip validation of the upgrade info\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n      --title string             title of proposal\n      --upgrade-height int       The height at which the upgrade must happen\n      --upgrade-info string      Info for the upgrade plan such as new version download urls, etc.\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,n.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/fr/commands/next/okp4d_tx_gov_submit-legacy-proposal",children:"okp4d tx gov submit-legacy-proposal"}),"\t - Submit a legacy proposal along with an initial deposit"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var n=o(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);