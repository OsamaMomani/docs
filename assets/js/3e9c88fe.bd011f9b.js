"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[4672],{97123:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=s(85893),i=s(11151);const r={},d="Protobuf Documentation",l={id:"mint",title:"mint",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/modules/mint.md",sourceDirName:".",slug:"/mint",permalink:"/modules/next/mint",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logic",permalink:"/modules/next/logic"},next:{title:"vesting",permalink:"/modules/next/vesting"}},a={},h=[{value:"Function",id:"function",level:2},{value:"Calculation of Inflation",id:"calculation-of-inflation",level:2},{value:"Per-Block Token Generation",id:"per-block-token-generation",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"mint/v1beta1/mint.proto",id:"mintv1beta1mintproto",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"mint/v1beta1/genesis.proto",id:"mintv1beta1genesisproto",level:2},{value:"GenesisState",id:"genesisstate",level:3},{value:"mint/v1beta1/query.proto",id:"mintv1beta1queryproto",level:2},{value:"QueryAnnualProvisionsRequest",id:"queryannualprovisionsrequest",level:3},{value:"QueryAnnualProvisionsResponse",id:"queryannualprovisionsresponse",level:3},{value:"QueryInflationRequest",id:"queryinflationrequest",level:3},{value:"QueryInflationResponse",id:"queryinflationresponse",level:3},{value:"QueryParamsRequest",id:"queryparamsrequest",level:3},{value:"QueryParamsResponse",id:"queryparamsresponse",level:3},{value:"Query",id:"query",level:3},{value:"mint/v1beta1/tx.proto",id:"mintv1beta1txproto",level:2},{value:"MsgUpdateParams",id:"msgupdateparams",level:3},{value:"MsgUpdateParamsResponse",id:"msgupdateparamsresponse",level:3},{value:"Msg",id:"msg",level:3},{value:"Scalar Value Types",id:"scalar-value-types",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"protobuf-documentation",children:"Protobuf Documentation"}),"\n",(0,t.jsx)("a",{name:"top"}),"\n",(0,t.jsx)(n.h2,{id:"function",children:"Function"}),"\n",(0,t.jsx)(n.p,{children:"The Minting Module plays a crucial role in the blockchain ecosystem, tasked with regulating the issuance of tokens to\nvalidators. This ensures the network's ongoing stability and viability. The module operates consistently, adjusting\nkey parameters with each block to maintain a balanced token supply."}),"\n",(0,t.jsx)(n.h2,{id:"calculation-of-inflation",children:"Calculation of Inflation"}),"\n",(0,t.jsxs)(n.p,{children:["The method for determining the inflation rate is outlined in the\n",(0,t.jsx)(n.a,{href:"https://docs.okp4.network/whitepaper/token-model",children:"OKP4 Whitepaper - Token Model"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"per-block-token-generation",children:"Per-Block Token Generation"}),"\n",(0,t.jsx)(n.p,{children:"Given the annual inflation rate, the Minting Module calculates the exact amount of tokens to be generated for each\nblock, based on the total number of blocks in a year."}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#mint/v1beta1/mint.proto",children:"mint/v1beta1/mint.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Minter",children:"Minter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#mint/v1beta1/genesis.proto",children:"mint/v1beta1/genesis.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.GenesisState",children:"GenesisState"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#mint/v1beta1/query.proto",children:"mint/v1beta1/query.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsRequest",children:"QueryAnnualProvisionsRequest"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsResponse",children:"QueryAnnualProvisionsResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationRequest",children:"QueryInflationRequest"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationResponse",children:"QueryInflationResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsRequest",children:"QueryParamsRequest"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsResponse",children:"QueryParamsResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Query",children:"Query"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#mint/v1beta1/tx.proto",children:"mint/v1beta1/tx.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.MsgUpdateParams",children:"MsgUpdateParams"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.MsgUpdateParamsResponse",children:"MsgUpdateParamsResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Msg",children:"Msg"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#scalar-value-types",children:"Scalar Value Types"})}),"\n"]}),"\n",(0,t.jsx)("a",{name:"mint/v1beta1/mint.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"mintv1beta1mintproto",children:"mint/v1beta1/mint.proto"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.Minter"}),"\n",(0,t.jsx)(n.h3,{id:"minter",children:"Minter"}),"\n",(0,t.jsx)(n.p,{children:"Minter holds the state of minting within the blockchain."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inflation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Current annual inflation rate."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"annual_provisions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Current annual anticipated provisions."})]})]})]}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.Params"}),"\n",(0,t.jsx)(n.h3,{id:"params",children:"Params"}),"\n",(0,t.jsx)(n.p,{children:"Params defines the parameters for the mint module."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mint_denom"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Denomination of the coin to be minted."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inflation_coef"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Annual inflation coefficient, influencing the inflation rate based on the bonded ratio. Values range from 0 to 1, with higher values indicating higher inflation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"blocks_per_year"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#uint64",children:"uint64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Estimated number of blocks per year."})]})]})]}),"\n",(0,t.jsx)("a",{name:"mint/v1beta1/genesis.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"mintv1beta1genesisproto",children:"mint/v1beta1/genesis.proto"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.GenesisState"}),"\n",(0,t.jsx)(n.h3,{id:"genesisstate",children:"GenesisState"}),"\n",(0,t.jsx)(n.p,{children:"GenesisState defines the mint module's genesis state."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"minter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Minter",children:"Minter"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"minter is a space for holding current inflation information."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"params"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"params defines all the parameters of the module."})]})]})]}),"\n",(0,t.jsx)("a",{name:"mint/v1beta1/query.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"mintv1beta1queryproto",children:"mint/v1beta1/query.proto"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryAnnualProvisionsRequest"}),"\n",(0,t.jsx)(n.h3,{id:"queryannualprovisionsrequest",children:"QueryAnnualProvisionsRequest"}),"\n",(0,t.jsx)(n.p,{children:"QueryAnnualProvisionsRequest is the request type for the\nQuery/AnnualProvisions RPC method."}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryAnnualProvisionsResponse"}),"\n",(0,t.jsx)(n.h3,{id:"queryannualprovisionsresponse",children:"QueryAnnualProvisionsResponse"}),"\n",(0,t.jsx)(n.p,{children:"QueryAnnualProvisionsResponse is the response type for the\nQuery/AnnualProvisions RPC method."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"annual_provisions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#bytes",children:"bytes"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"annual_provisions is the current minting annual provisions value."})]})})]}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryInflationRequest"}),"\n",(0,t.jsx)(n.h3,{id:"queryinflationrequest",children:"QueryInflationRequest"}),"\n",(0,t.jsx)(n.p,{children:"QueryInflationRequest is the request type for the Query/Inflation RPC method."}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryInflationResponse"}),"\n",(0,t.jsx)(n.h3,{id:"queryinflationresponse",children:"QueryInflationResponse"}),"\n",(0,t.jsx)(n.p,{children:"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"inflation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#bytes",children:"bytes"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"inflation is the current minting inflation value."})]})})]}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryParamsRequest"}),"\n",(0,t.jsx)(n.h3,{id:"queryparamsrequest",children:"QueryParamsRequest"}),"\n",(0,t.jsx)(n.p,{children:"QueryParamsRequest is the request type for the Query/Params RPC method."}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.QueryParamsResponse"}),"\n",(0,t.jsx)(n.h3,{id:"queryparamsresponse",children:"QueryParamsResponse"}),"\n",(0,t.jsx)(n.p,{children:"QueryParamsResponse is the response type for the Query/Params RPC method."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"params"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"params defines the parameters of the module."})]})})]}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.Query"}),"\n",(0,t.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,t.jsx)(n.p,{children:"Query provides defines the gRPC querier service."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method Name"}),(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Response Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"HTTP Verb"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Params"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsRequest",children:"QueryParamsRequest"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsResponse",children:"QueryParamsResponse"})}),(0,t.jsx)(n.td,{children:"Params returns the total set of minting parameters."}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"/cosmos/mint/v1beta1/params"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Inflation"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationRequest",children:"QueryInflationRequest"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationResponse",children:"QueryInflationResponse"})}),(0,t.jsx)(n.td,{children:"Inflation returns the current minting inflation value."}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"/cosmos/mint/v1beta1/inflation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"AnnualProvisions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsRequest",children:"QueryAnnualProvisionsRequest"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsResponse",children:"QueryAnnualProvisionsResponse"})}),(0,t.jsx)(n.td,{children:"AnnualProvisions current minting annual provisions value."}),(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:"/cosmos/mint/v1beta1/annual_provisions"})]})]})]}),"\n",(0,t.jsx)("a",{name:"mint/v1beta1/tx.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"mintv1beta1txproto",children:"mint/v1beta1/tx.proto"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.MsgUpdateParams"}),"\n",(0,t.jsx)(n.h3,{id:"msgupdateparams",children:"MsgUpdateParams"}),"\n",(0,t.jsx)(n.p,{children:"MsgUpdateParams is the Msg/UpdateParams request type."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.47"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"authority"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"authority is the address that controls the module (defaults to x/gov unless overwritten)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"params"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"params defines the x/mint parameters to update."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"NOTE: All parameters must be supplied. |"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.MsgUpdateParamsResponse"}),"\n",(0,t.jsx)(n.h3,{id:"msgupdateparamsresponse",children:"MsgUpdateParamsResponse"}),"\n",(0,t.jsx)(n.p,{children:"MsgUpdateParamsResponse defines the response structure for executing a\nMsgUpdateParams message."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.47"}),"\n",(0,t.jsx)("a",{name:"mint.v1beta1.Msg"}),"\n",(0,t.jsx)(n.h3,{id:"msg",children:"Msg"}),"\n",(0,t.jsx)(n.p,{children:"Msg defines the x/mint Msg service."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method Name"}),(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Response Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"HTTP Verb"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"UpdateParams"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.MsgUpdateParams",children:"MsgUpdateParams"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#mint.v1beta1.MsgUpdateParamsResponse",children:"MsgUpdateParamsResponse"})}),(0,t.jsx)(n.td,{children:"UpdateParams defines a governance operation for updating the x/mint module parameters. The authority is defaults to the x/gov module account."}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.47 | |"}),"\n",(0,t.jsx)(n.h2,{id:"scalar-value-types",children:"Scalar Value Types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:".proto Type"}),(0,t.jsx)(n.th,{children:"Notes"}),(0,t.jsx)(n.th,{children:"C++"}),(0,t.jsx)(n.th,{children:"Java"}),(0,t.jsx)(n.th,{children:"Python"}),(0,t.jsx)(n.th,{children:"Go"}),(0,t.jsx)(n.th,{children:"C#"}),(0,t.jsx)(n.th,{children:"PHP"}),(0,t.jsx)(n.th,{children:"Ruby"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"double"})," double"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float64"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"float"})," float"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float32"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"int32"})," int32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"int64"})," int64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"uint32"})," uint32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"uint64"})," uint64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"ulong"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sint32"})," sint32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sint64"})," sint64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"fixed32"})," fixed32"]}),(0,t.jsx)(n.td,{children:"Always four bytes. More efficient than uint32 if values are often greater than 2^28."}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"fixed64"})," fixed64"]}),(0,t.jsx)(n.td,{children:"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"ulong"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sfixed32"})," sfixed32"]}),(0,t.jsx)(n.td,{children:"Always four bytes."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sfixed64"})," sfixed64"]}),(0,t.jsx)(n.td,{children:"Always eight bytes."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"bool"})," bool"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"TrueClass/FalseClass"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"string"})," string"]}),(0,t.jsx)(n.td,{children:"A string must always contain UTF-8 encoded or 7-bit ASCII text."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"str/unicode"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String (UTF-8)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"bytes"})," bytes"]}),(0,t.jsx)(n.td,{children:"May contain any arbitrary sequence of bytes."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"ByteString"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"[]byte"}),(0,t.jsx)(n.td,{children:"ByteString"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String (ASCII-8BIT)"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var t=s(67294);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);