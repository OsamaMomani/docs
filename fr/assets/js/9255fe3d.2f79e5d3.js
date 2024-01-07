"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[95351],{45949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(85893),s=n(11151);const a={},o=void 0,r={id:"okp4d_tx_ibc-transfer_transfer",title:"okp4d_tx_ibc-transfer_transfer",description:"okp4d tx ibc-transfer transfer",source:"@site/commands/okp4d_tx_ibc-transfer_transfer.md",sourceDirName:".",slug:"/okp4d_tx_ibc-transfer_transfer",permalink:"/fr/commands/next/okp4d_tx_ibc-transfer_transfer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_ibc-transfer",permalink:"/fr/commands/next/okp4d_tx_ibc-transfer"},next:{title:"okp4d_tx_ibc",permalink:"/fr/commands/next/okp4d_tx_ibc"}},c={},d=[{value:"okp4d tx ibc-transfer transfer",id:"okp4d-tx-ibc-transfer-transfer",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-tx-ibc-transfer-transfer",children:"okp4d tx ibc-transfer transfer"}),"\n",(0,i.jsx)(t.p,{children:"Transfer a fungible token through IBC"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:'Transfer a fungible token through IBC. Timeouts can be specified\nas absolute or relative using the "absolute-timeouts" flag. Timeout height can be set by passing in the height string\nin the form {revision}-{height} using the "packet-timeout-height" flag. Relative timeout height is added to the block\nheight queried from the latest consensus state corresponding to the counterparty channel. Relative timeout timestamp\nis added to the greater value of the local clock time and the block timestamp queried from the latest consensus state\ncorresponding to the counterparty channel. Any timeout set to 0 is disabled.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount] [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx ibc-transfer transfer [src-port] [src-channel] [receiver] [amount]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --absolute-timeouts               Timeout flags are used as absolute timeouts.\n  -a, --account-number uint             The account number of the signing account (offline mode only)\n      --aux                             Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string           Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string                 The network chain ID (default "okp4d")\n      --dry-run                         ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string              Fee granter grants fees for the transaction\n      --fee-payer string                Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string                     Fees to pay along with transaction; eg: 10uatom\n      --from string                     Name or address of private key with which to sign\n      --gas string                      gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float            adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string               Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only                   Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                            help for transfer\n      --keyring-backend string          Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string              The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                          Use a connected Ledger device\n      --memo string                     Memo to be sent along with the packet.\n      --node string                     <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string                     Note to add a description to the transaction (previously --memo)\n      --offline                         Offline mode (does not allow any online functionality)\n  -o, --output string                   Output format (text|json) (default "json")\n      --packet-timeout-height string    Packet timeout block height. The timeout is disabled when set to 0-0. (default "0-1000")\n      --packet-timeout-timestamp uint   Packet timeout timestamp in nanoseconds from now. Default is 10 minutes. The timeout is disabled when set to 0. (default 600000000000)\n  -s, --sequence uint                   The sequence number of the signing account (offline mode only)\n      --sign-mode string                Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint             Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string                      Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                             Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/fr/commands/next/okp4d_tx_ibc-transfer",children:"okp4d tx ibc-transfer"}),"\t - IBC fungible token transfer transaction subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);