"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[45215],{83098:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var t=s(85893),i=s(11151);const d={},c="Protobuf Documentation",r={id:"vesting",title:"vesting",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/modules/vesting.md",sourceDirName:".",slug:"/vesting",permalink:"/modules/next/vesting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"mint",permalink:"/modules/next/mint"}},l={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"vesting/v1beta1/vesting.proto",id:"vestingv1beta1vestingproto",level:2},{value:"BaseVestingAccount",id:"basevestingaccount",level:3},{value:"CliffVestingAccount",id:"cliffvestingaccount",level:3},{value:"ContinuousVestingAccount",id:"continuousvestingaccount",level:3},{value:"DelayedVestingAccount",id:"delayedvestingaccount",level:3},{value:"Period",id:"period",level:3},{value:"PeriodicVestingAccount",id:"periodicvestingaccount",level:3},{value:"PermanentLockedAccount",id:"permanentlockedaccount",level:3},{value:"vesting/v1beta1/tx.proto",id:"vestingv1beta1txproto",level:2},{value:"MsgCreateCliffVestingAccount",id:"msgcreatecliffvestingaccount",level:3},{value:"MsgCreateCliffVestingAccountResponse",id:"msgcreatecliffvestingaccountresponse",level:3},{value:"MsgCreatePeriodicVestingAccount",id:"msgcreateperiodicvestingaccount",level:3},{value:"MsgCreatePeriodicVestingAccountResponse",id:"msgcreateperiodicvestingaccountresponse",level:3},{value:"MsgCreatePermanentLockedAccount",id:"msgcreatepermanentlockedaccount",level:3},{value:"MsgCreatePermanentLockedAccountResponse",id:"msgcreatepermanentlockedaccountresponse",level:3},{value:"MsgCreateVestingAccount",id:"msgcreatevestingaccount",level:3},{value:"MsgCreateVestingAccountResponse",id:"msgcreatevestingaccountresponse",level:3},{value:"Msg",id:"msg",level:3},{value:"Scalar Value Types",id:"scalar-value-types",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"protobuf-documentation",children:"Protobuf Documentation"}),"\n",(0,t.jsx)("a",{name:"top"}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#vesting/v1beta1/vesting.proto",children:"vesting/v1beta1/vesting.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.CliffVestingAccount",children:"CliffVestingAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.ContinuousVestingAccount",children:"ContinuousVestingAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.DelayedVestingAccount",children:"DelayedVestingAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.Period",children:"Period"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.PeriodicVestingAccount",children:"PeriodicVestingAccount"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.PermanentLockedAccount",children:"PermanentLockedAccount"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#vesting/v1beta1/tx.proto",children:"vesting/v1beta1/tx.proto"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateCliffVestingAccount",children:"MsgCreateCliffVestingAccount"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateCliffVestingAccountResponse",children:"MsgCreateCliffVestingAccountResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePeriodicVestingAccount",children:"MsgCreatePeriodicVestingAccount"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",children:"MsgCreatePeriodicVestingAccountResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePermanentLockedAccount",children:"MsgCreatePermanentLockedAccount"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",children:"MsgCreatePermanentLockedAccountResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateVestingAccount",children:"MsgCreateVestingAccount"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateVestingAccountResponse",children:"MsgCreateVestingAccountResponse"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.Msg",children:"Msg"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#scalar-value-types",children:"Scalar Value Types"})}),"\n"]}),"\n",(0,t.jsx)("a",{name:"vesting/v1beta1/vesting.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"vestingv1beta1vestingproto",children:"vesting/v1beta1/vesting.proto"}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.BaseVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"basevestingaccount",children:"BaseVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"BaseVestingAccount implements the VestingAccount interface. It contains all\nthe necessary fields needed for any vesting account implementation."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.auth.v1beta1.BaseAccount",children:"cosmos.auth.v1beta1.BaseAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"original_vesting"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"delegated_free"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"delegated_vesting"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"end_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Vesting end time, as unix timestamp (in seconds)."})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.CliffVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"cliffvestingaccount",children:"CliffVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"CliffVestingAccount implements the VestingAccount interface. It\ncontinuously vests by unlocking coins after a cliff period linearly with respect to time."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_vesting_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"base_vesting_account implements the VestingAccount interface. It contains all the necessary fields needed for any vesting account implementation"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"start_time defines the time at which the vesting period begins"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cliff_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.ContinuousVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"continuousvestingaccount",children:"ContinuousVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"ContinuousVestingAccount implements the VestingAccount interface. It\ncontinuously vests by unlocking coins linearly with respect to time."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_vesting_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Vesting start time, as unix timestamp (in seconds)."})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.DelayedVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"delayedvestingaccount",children:"DelayedVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"DelayedVestingAccount implements the VestingAccount interface. It vests all\ncoins after a specific time, but non prior. In other words, it keeps them\nlocked until a specified time."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_vesting_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.Period"}),"\n",(0,t.jsx)(n.h3,{id:"period",children:"Period"}),"\n",(0,t.jsx)(n.p,{children:"Period defines a length of time and amount of coins that will vest."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"length"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.PeriodicVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"periodicvestingaccount",children:"PeriodicVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"PeriodicVestingAccount implements the VestingAccount interface. It\nperiodically vests by unlocking coins during each specified period."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_vesting_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vesting_periods"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.Period",children:"Period"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.PermanentLockedAccount"}),"\n",(0,t.jsx)(n.h3,{id:"permanentlockedaccount",children:"PermanentLockedAccount"}),"\n",(0,t.jsx)(n.p,{children:"PermanentLockedAccount implements the VestingAccount interface. It does\nnot ever release coins, locking them indefinitely. Coins in this account can\nstill be used for delegating and for governance votes even while locked."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.43"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"base_vesting_account"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.BaseVestingAccount",children:"BaseVestingAccount"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)("a",{name:"vesting/v1beta1/tx.proto"}),"\n",(0,t.jsx)("p",{align:"right",children:(0,t.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,t.jsx)(n.h2,{id:"vestingv1beta1txproto",children:"vesting/v1beta1/tx.proto"}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreateCliffVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatecliffvestingaccount",children:"MsgCreateCliffVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateCliffVestingAccount defines a message that enables creating a cliff vesting\naccount."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"to_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"end_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cliff_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreateCliffVestingAccountResponse"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatecliffvestingaccountresponse",children:"MsgCreateCliffVestingAccountResponse"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateCliffVestingAccountResponse defines the Msg/CreateVestingAccount response type."}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreatePeriodicVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreateperiodicvestingaccount",children:"MsgCreatePeriodicVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateVestingAccount defines a message that enables creating a vesting\naccount."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.46"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"to_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"start of vesting as unix time (in seconds)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"vesting_periods"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.Period",children:"Period"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreateperiodicvestingaccountresponse",children:"MsgCreatePeriodicVestingAccountResponse"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount\nresponse type."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.46"}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreatePermanentLockedAccount"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatepermanentlockedaccount",children:"MsgCreatePermanentLockedAccount"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreatePermanentLockedAccount defines a message that enables creating a permanent\nlocked account."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.46"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"to_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreatePermanentLockedAccountResponse"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatepermanentlockedaccountresponse",children:"MsgCreatePermanentLockedAccountResponse"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type."}),"\n",(0,t.jsx)(n.p,{children:"Since: cosmos-sdk 0.46"}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreateVestingAccount"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatevestingaccount",children:"MsgCreateVestingAccount"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateVestingAccount defines a message that enables creating a vesting\naccount."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Field"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Label"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"to_address"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#string",children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#cosmos.base.v1beta1.Coin",children:"cosmos.base.v1beta1.Coin"})}),(0,t.jsx)(n.td,{children:"repeated"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"end_time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#int64",children:"int64"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"delayed"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#bool",children:"bool"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.MsgCreateVestingAccountResponse"}),"\n",(0,t.jsx)(n.h3,{id:"msgcreatevestingaccountresponse",children:"MsgCreateVestingAccountResponse"}),"\n",(0,t.jsx)(n.p,{children:"MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type."}),"\n",(0,t.jsx)("a",{name:"vesting.v1beta1.Msg"}),"\n",(0,t.jsx)(n.h3,{id:"msg",children:"Msg"}),"\n",(0,t.jsx)(n.p,{children:"Msg defines the bank Msg service."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method Name"}),(0,t.jsx)(n.th,{children:"Request Type"}),(0,t.jsx)(n.th,{children:"Response Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"HTTP Verb"}),(0,t.jsx)(n.th,{children:"Endpoint"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CreateVestingAccount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateVestingAccount",children:"MsgCreateVestingAccount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateVestingAccountResponse",children:"MsgCreateVestingAccountResponse"})}),(0,t.jsx)(n.td,{children:"CreateVestingAccount defines a method that enables creating a vesting account."}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CreatePermanentLockedAccount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePermanentLockedAccount",children:"MsgCreatePermanentLockedAccount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",children:"MsgCreatePermanentLockedAccountResponse"})}),(0,t.jsx)(n.td,{children:"CreatePermanentLockedAccount defines a method that enables creating a permanent locked account."}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Since: cosmos-sdk 0.46 | |\n| ",(0,t.jsx)(n.code,{children:"CreatePeriodicVestingAccount"})," | ",(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePeriodicVestingAccount",children:"MsgCreatePeriodicVestingAccount"})," | ",(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",children:"MsgCreatePeriodicVestingAccountResponse"})," | CreatePeriodicVestingAccount defines a method that enables creating a periodic vesting account."]}),"\n",(0,t.jsxs)(n.p,{children:["Since: cosmos-sdk 0.46 | |\n| ",(0,t.jsx)(n.code,{children:"CreateCliffVestingAccount"})," | ",(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateCliffVestingAccount",children:"MsgCreateCliffVestingAccount"})," | ",(0,t.jsx)(n.a,{href:"#vesting.v1beta1.MsgCreateCliffVestingAccountResponse",children:"MsgCreateCliffVestingAccountResponse"})," | CreateCliffVestingAccount defines a method that enables creating a cliff vesting account. | |"]}),"\n",(0,t.jsx)(n.h2,{id:"scalar-value-types",children:"Scalar Value Types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:".proto Type"}),(0,t.jsx)(n.th,{children:"Notes"}),(0,t.jsx)(n.th,{children:"C++"}),(0,t.jsx)(n.th,{children:"Java"}),(0,t.jsx)(n.th,{children:"Python"}),(0,t.jsx)(n.th,{children:"Go"}),(0,t.jsx)(n.th,{children:"C#"}),(0,t.jsx)(n.th,{children:"PHP"}),(0,t.jsx)(n.th,{children:"Ruby"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"double"})," double"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float64"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"float"})," float"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float32"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"Float"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"int32"})," int32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"int64"})," int64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"uint32"})," uint32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"uint64"})," uint64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"ulong"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sint32"})," sint32"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sint64"})," sint64"]}),(0,t.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"fixed32"})," fixed32"]}),(0,t.jsx)(n.td,{children:"Always four bytes. More efficient than uint32 if values are often greater than 2^28."}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"uint32"}),(0,t.jsx)(n.td,{children:"uint"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"fixed64"})," fixed64"]}),(0,t.jsx)(n.td,{children:"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"uint64"}),(0,t.jsx)(n.td,{children:"ulong"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sfixed32"})," sfixed32"]}),(0,t.jsx)(n.td,{children:"Always four bytes."}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"int32"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"sfixed64"})," sfixed64"]}),(0,t.jsx)(n.td,{children:"Always eight bytes."}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"int/long"}),(0,t.jsx)(n.td,{children:"int64"}),(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"integer/string"}),(0,t.jsx)(n.td,{children:"Bignum"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"bool"})," bool"]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"bool"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"TrueClass/FalseClass"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"string"})," string"]}),(0,t.jsx)(n.td,{children:"A string must always contain UTF-8 encoded or 7-bit ASCII text."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"str/unicode"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String (UTF-8)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)("a",{name:"bytes"})," bytes"]}),(0,t.jsx)(n.td,{children:"May contain any arbitrary sequence of bytes."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"ByteString"}),(0,t.jsx)(n.td,{children:"str"}),(0,t.jsx)(n.td,{children:"[]byte"}),(0,t.jsx)(n.td,{children:"ByteString"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"String (ASCII-8BIT)"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var t=s(67294);const i={},d=t.createContext(i);function c(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);