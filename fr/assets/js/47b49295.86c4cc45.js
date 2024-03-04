"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[46888],{90658:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=c(85893),r=c(11151);const s={},t=void 0,a={id:"okp4d_query_ibc_channel_unreceived-acks",title:"okp4d_query_ibc_channel_unreceived-acks",description:"okp4d query ibc channel unreceived-acks",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_ibc_channel_unreceived-acks.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_unreceived-acks",permalink:"/fr/commands/v5.0.0/okp4d_query_ibc_channel_unreceived-acks",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_packet-receipt",permalink:"/fr/commands/v5.0.0/okp4d_query_ibc_channel_packet-receipt"},next:{title:"okp4d_query_ibc_channel_unreceived-packets",permalink:"/fr/commands/v5.0.0/okp4d_query_ibc_channel_unreceived-packets"}},o={},d=[{value:"okp4d query ibc channel unreceived-acks",id:"okp4d-query-ibc-channel-unreceived-acks",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"okp4d-query-ibc-channel-unreceived-acks",children:"okp4d query ibc channel unreceived-acks"}),"\n",(0,i.jsx)(n.p,{children:"Query all the unreceived acks associated with a channel"}),"\n",(0,i.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(n.p,{children:"Given a list of acknowledgement sequences from counterparty, determine if an ack on the counterparty chain has been received on the executing chain."}),"\n",(0,i.jsx)(n.p,{children:"The return value represents:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unreceived packet acknowledgement: packet commitment exists on original sending (executing) chain and ack exists on receiving chain."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d query ibc channel unreceived-acks [port-id] [channel-id] [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"okp4d query ibc channel unreceived-acks [port-id] [channel-id] --sequences=1,2,3\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'      --grpc-addr string       the gRPC endpoint to use for this chain\n      --grpc-insecure          allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int             Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                   help for unreceived-acks\n      --node string            <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string          Output format (text|json) (default "text")\n      --sequences int64Slice   comma separated list of packet sequence numbers (default [])\n'})}),"\n",(0,i.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/fr/commands/next/okp4d_query_ibc_channel",children:"okp4d query ibc channel"}),"\t - IBC channel query subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>a,a:()=>t});var i=c(67294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);