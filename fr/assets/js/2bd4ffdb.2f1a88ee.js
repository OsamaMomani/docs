"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[3751],{54512:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(85893),s=n(11151);const r={},i=void 0,c={id:"okp4d_query_block",title:"okp4d_query_block",description:"okp4d query block",source:"@site/commands_versioned_docs/version-v6.0.0/okp4d_query_block.md",sourceDirName:".",slug:"/okp4d_query_block",permalink:"/fr/commands/v6.0.0/okp4d_query_block",draft:!1,unlisted:!1,tags:[],version:"v6.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_block-results",permalink:"/fr/commands/v6.0.0/okp4d_query_block-results"},next:{title:"okp4d_query_blocks",permalink:"/fr/commands/v6.0.0/okp4d_query_blocks"}},l={},d=[{value:"okp4d query block",id:"okp4d-query-block",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function h(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"okp4d-query-block",children:"okp4d query block"}),"\n",(0,t.jsx)(o.p,{children:"Query for a committed block by height, hash, or event(s)"}),"\n",(0,t.jsx)(o.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsxs)(o.p,{children:["Query for a specific committed block using the CometBFT RPC ",(0,t.jsx)(o.code,{children:"block"})," and ",(0,t.jsx)(o.code,{children:"block_by_hash"})," method"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"okp4d query block --type=[height|hash] [height|hash] [flags]\n"})}),"\n",(0,t.jsx)(o.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"$ okp4d query block --type=height <height>\n$ okp4d query block --type=hash <hash>\n"})}),"\n",(0,t.jsx)(o.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for block\n      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --type string        The type to be used when querying tx, can be one of "height", "hash" (default "hash")\n'})}),"\n",(0,t.jsx)(o.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"/fr/commands/next/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);