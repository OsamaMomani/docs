"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[234],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return a?o.createElement(m,n(n({ref:t},c),{},{components:a})):o.createElement(m,n({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var h=2;h<i;h++)n[h]=a[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8068:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return d}});var o=a(7462),r=a(3366),i=(a(7294),a(3905)),n=["components"],s={sidebar_position:9},l="Roles",h={unversionedId:"whitepaper/roles",id:"whitepaper/roles",title:"Roles",description:"Overview",source:"@site/docs/whitepaper/roles.md",sourceDirName:"whitepaper",slug:"/whitepaper/roles",permalink:"/docs/whitepaper/roles",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/roles.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Dataverse",permalink:"/docs/whitepaper/dataverse"},next:{title:"Token Model",permalink:"/docs/whitepaper/token-model"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Validators",id:"validators",level:2},{value:"Delegators",id:"delegators",level:2},{value:"DAO Participants",id:"dao-participants",level:2},{value:"Data Providers",id:"data-providers",level:2},{value:"Algorithm &amp; Infrastructure Providers",id:"algorithm--infrastructure-providers",level:2},{value:"Builders",id:"builders",level:2},{value:"Curators",id:"curators",level:2},{value:"Curation Markets",id:"curation-markets",level:3},{value:"Curators",id:"curators-1",level:3},{value:"Auto-Curation Priority",id:"auto-curation-priority",level:3},{value:"faire un petit cadre",id:"faire-un-petit-cadre",level:3},{value:"Governors",id:"governors",level:2}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roles"},"Roles"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Across the vibrant ecosystem of OKP4, participants can choose from several different functional roles in the protocol - depending on their technical skills, risk tolerance, desired activity level and resources at their disposal. In this section we will quickly introduce you to the various roles in just a few words, for more details please select the following sections."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Blockchain Layer Participants"))),(0,i.kt)("p",null,"Validators: Validator can self-bond KNOW to increase their probability to validate a block and get rewards. They also have an obligation to vote on the DAO's proposals"),(0,i.kt)("p",null,"Delegators: Stakeholders can delegate their KNOW tokens to validator nodes in order to collect rewards. Their votes are automatically delegated to validators with the tokens; can be changed manually."),(0,i.kt)("p",null,"DAO participants: Protocol governance. Anyone with staked KNOW tokens can participate in on-chain governance. It is possible to make a proposal and vote on a proposal."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Data Spaces Participants"))),(0,i.kt)("p",null,"Data providers: It is someone who deposits one or more datasets on the protocol so that builders can use it to create knowledge. They are paid for the use of their dataset."),(0,i.kt)("p",null,"Algorithm & Infrastructure providers: It is someone who deposits an algorithm, a service, or any other processing or calculation software that requires a working time. It is thanks to them that data sets can be assembled and processed to create knowledge. They are paid on an hourly rate."),(0,i.kt)("p",null,"Builders: They are the creators of knowledge. They contribute to the functioning of the network by creating knowledge thanks to the data and algorithms/infrastructure deposited by the providers."),(0,i.kt)("p",null,"Curators: Curators can stake KNOW tokens on data and algorithms/infrastructure (not necessarily hiw own) to increase visibility and trust, as well as to obtain a portion of the income generated by this algorithm/data (if applied by the owner)."),(0,i.kt)("p",null,"Governors: Each Data Space can have its own governance mechamisms. Some will choose to have a governance token, some not. The rules are open."),(0,i.kt)("h2",{id:"validators"},"Validators"),(0,i.kt)("p",null,"Our validator network is based on the Tendermint consensus system which relies on a group of validators in charge of commiting new blocks to our blockchain. They participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by the private key of each validator. Applicants to this group can have KNOW tokens delegated to them by the token holders (delegators)."),(0,i.kt)("p",null,"Anyone can become validator at any time, except when the size of the current validator set is greater than the maximum number of validators allowed. Validators will be automatically selected according to their voting power, which is determined by the number of KNOW tokens staked by the validator plus those delegated. Our network will initially contain a set of 125 validators (with an increase over time based on a growth rate). The 125 best candidates with more voting power will then be the approved validators of our network; the other candidates are on a waiting list. If a validator is replaced by a new validator, the existing validator becomes inactive (back on the waiting list) and all his KNOW and delegated KNOW enter the unbounding state."),(0,i.kt)("p",null,"Validators (and their delegates) earn KNOW tokens as a reward for running the Tendermint consensus protocol. These rewards come from inflation and transaction fees. Validators can choose to set a small commission percentage on the rewards received by their delegators as an additional incentive."),(0,i.kt)("p",null,"There must be some penalty imposed if validators do not respect the protocol rules whether intentional or unintentional (double sign, offline too long...). This will cause the validator to lose his good reputation and his proportional share of bonded token that will get slashed. The penalty depends on the severity of the violation."),(0,i.kt)("h2",{id:"delegators"},"Delegators"),(0,i.kt)("p",null,"Delegators are KNOW holders who cannot, or do not want to, run a validator node themselves. They can delegate KNOW to a validator and obtain a part of their revenue in exchange."),(0,i.kt)("p",null,"Delegators share revenue with their validators, but they also share risks. If a validator does not respect the described rules, he and each of his delegators will be partially deducted in proportion to their delegated stake. This is why each delegator must be careful about which validator they choose before deciding to delegate. It is possible to dillute the level of risk by delegating to several validators."),(0,i.kt)("p",null,"Delegators play en essential role in the system since they are responsible for the selection of validators; they therefore play an active role in the ecosystem. They must actively monitor the actions of their validators and participate in governance."),(0,i.kt)("p",null,'About the governance of the DAO, the delegators give their voting power automatically to the validators to whom they delegate their tokens. However, if they wish to vote by themselves, they can manually "retrieve" the right to vote on their share of tokens and vote normally.'),(0,i.kt)("h2",{id:"dao-participants"},"DAO Participants"),(0,i.kt)("p",null,"Anyone with staked KNOW tokens can participate in governance. It is possible to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make a proposal: costs KNOW tokens"),(0,i.kt)("li",{parentName:"ul"},"Vote on a proposal: doesn't costs KNOW tokens, but each token gives a vote right on each proposal, and each KNOW gives 1 voting power")),(0,i.kt)("p",null,"For more information on governance please click here."),(0,i.kt)("h2",{id:"data-providers"},"Data Providers"),(0,i.kt)("p",null,"Data providers are members of the community who have deposited one or more datasets in the catalog and/or in one or more data spaces. Their role is to offer datasets in order to give the possibility to builders to create new knowledges."),(0,i.kt)("p",null,"They are paid by the builders for each use of their data set."),(0,i.kt)("p",null,"It is particularly recommended to deposit quality datasets, on the one hand because it will be much more likely to be used many times (and to be well curated), on the other hand it will give the provider a well known reputation that he can use in his favor for other deposits or if he decides to curate."),(0,i.kt)("h2",{id:"algorithm--infrastructure-providers"},"Algorithm & Infrastructure Providers"),(0,i.kt)("p",null,"Algorithms & Infrastructure providers are members of the community who have deposited and are able to run what is called a service. A service can be an algorithm, a processing software, a tool... requiring a processing time. They are paid by the builders on an hourly rate that they define themselves according to the duration of use."),(0,i.kt)("p",null,"It is particularly recommended to deposit quality algorithms & infrastructure softwares, on the one hand because it will be much more likely to be used many times (and to be well curated), on the other hand it will give the provider a well known reputation that he can use in his favor for other deposits or if he decides to curate."),(0,i.kt)("p",null,"The provider will be able to create a descriptive page for his repository at any time. However, in order for a builder to be able to invoke and use this algorithm/infrastructure, he will have to stake KNOW in proportion to the hourly fee that he will define himself."),(0,i.kt)("h2",{id:"builders"},"Builders"),(0,i.kt)("p",null,"Builders are members of the community who will consume/use the resources given by the data providers and by the algorithm & infrastructure providers in order to create one or more knowledge."),(0,i.kt)("p",null,"They are the ones who will pay in KNOW tokens for the data sets and services used."),(0,i.kt)("p",null,"Overall, they are the ones who are behind the creation of the Data Spaces (with of course the participation of all stakeholders). However, they can also decide to build on an existing Data Space."),(0,i.kt)("h2",{id:"curators"},"Curators"),(0,i.kt)("p",null,"IMAGE (\xe0 faire pour tous les r\xf4les)"),(0,i.kt)("p",null,"Technical skills: Intermediate   |   Time investment: Low to High   |   Risk level: High"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"curation-markets"},"Curation Markets"),(0,i.kt)("p",null,"With the establishment of curation markets in OKP4 ecosystem, a whole new world of possibilities will be opening up. The new opportunity to participate in the network as a curator comes with many exciting adventures but also with potential risks."),(0,i.kt)("p",null,"What are curation markets?"),(0,i.kt)("p",null,"A curation market is a model allowing actors in a network to effectively coordinate around shared goals, this is accomplished by coordinating the work around a token that is minted to incentivize specific results (they earn from the value they co-create). Curation markets are specifically designed to reduce information asymmetries and to curate valuable information."),(0,i.kt)("p",null,"Decentralized Coordination of Labor and Capital: The establishment of curation markets allows network participants to mint and burn tokens (named shares) in accordance with predefined rules without involving a centralized third party. The process of creating these tokens of value is not controlled by a specific entity. Instead, the bonding curve contract of the curation market is responsible for distributing (minting) the shares."),(0,i.kt)("p",null,"Core Components of Curation Markets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continuous: shares (tokens) can be minted and burned any time without time constraints"),(0,i.kt)("li",{parentName:"ul"},"Autonomous: bonding curve contracts calculate token prizes autonomously"),(0,i.kt)("li",{parentName:"ul"},"Communal: a communal deposit is created to keep the amount paid for minted tokens"),(0,i.kt)("li",{parentName:"ul"},"Proportional: curators curate information with their proportional backing of tokens bonded to them")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"curators-1"},"Curators"),(0,i.kt)("p",null,"Curators do not need to possess complex technical skills or knowledge. All it takes is the ability to do transactions via Keplr. Similarly, Curators are not required to stake a minimum amount of KNOW. Depending on the individual's risk tolerance, Curation may be especially attractive for those who are able to accurately evaluate items and have a good understanding of Web3 and of the underlying mechanics of bonding curves."),(0,i.kt)("p",null,"In order for builders and Data Spaces to simply find an item, it must first be ranked. Ranking is a process in which items are put in competition with each other so that they can be found more quickly and it's easier to place trust in them."),(0,i.kt)("p",null,"Thus, if users had to guess which items to use, they would be less likely to find quality items on the first try. This is where curators comes in."),(0,i.kt)("p",null,"Curators are essential to the decentralized economy on our protocol. They use their knowledge and common sense to analyze items to identify which ones are of the highest quality and which ones are likely to be used the most. Through the catalog, Curators can visualize the entirety of what is available in order to make signaling decisions and invest in it."),(0,i.kt)("p",null,"These people will be rewarded by earning a portion of the rewards that datasets and services generate. Curation is about identifying valuable pieces of information in a data stream (or in a service) and presenting it to the target audience in a way that adds value (mainly visibility and trust)."),(0,i.kt)("p",null,"OKP4 uses curation as an incentive mechanism to encourage network participants to identify items of a high-quality and to foster information sharing in the ecosystem.\nThe curator role is ideal for all those that wish to become more active in the network than just being a Delegator. They can be community members, data consumers, developers, item providers..."),(0,i.kt)("p",null,"When signaling, Curators can decide to signal a specific version of a dataset/service, or they can decide to use automatic migration through updates to new versions. If you decide to signal on a specific version, despite the update, your shares will always remain on that specific version."),(0,i.kt)("p",null,"Curation is risky. Do your due diligence to ensure that you only curate datasets and services that you trust. A detailed list of the different risks is available in the token model section."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"auto-curation-priority"},"Auto-Curation Priority"),(0,i.kt)("p",null,"Any provider can stake KNOW tokens on their data/service as a curation to oneself. It follows the same rules as any curator. The only change is that the provider will always have the first hand before the others."),(0,i.kt)("p",null,"Data & Algorithm/Infrastructure Operation: When the provider will deposit his dataset/service, he will have to choose if he accepts or not the curators. If he has accepted them, when he makes his dataset/service available for use, the provider can, if he wants, buy shares before anyone else."),(0,i.kt)("p",null,"Once the first purchase is made, the burn & mint system opens to the whole community. The provider who curates will of course receive the associated rewards, in proportion to his number of shares (at the very beginning if he is alone, he will receive 100% of the curation royalties)."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"faire-un-petit-cadre"},"faire un petit cadre"),(0,i.kt)("p",null,"Note: The first address to signal a particular item is considered the first curator and will have to do much more gas-intensive work than the rest of the following curators because the first curator initializes the curation share tokens, initializes the bonding curve, and also transfers tokens into OKP4 proxy."),(0,i.kt)("h2",{id:"governors"},"Governors"),(0,i.kt)("p",null,"The ideal we imagine and wish for is a Dataverse filled with Data Spaces, each with its own operating model (rules) and each with its own governance token. However, we know that in some cases, especially in the context of a small restricted Data Space or in a private Data Space for example, this solution is not the most adequate for the participants."),(0,i.kt)("p",null,"This is why we have decided to let each Data Space choose between different governance options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Governance via a newly created token. This token will have value, a market..."),(0,i.kt)("li",{parentName:"ul"},"Governance via whitelist. The creators of the Data Space will be able to choose themselves which wallet will have the right to vote, what is the voting weight per wallet, if there is the possibility to add/remove people from the list or if they don't want the list to change..."),(0,i.kt)("li",{parentName:"ul"},"Governance via KNOW token."),(0,i.kt)("li",{parentName:"ul"},"Under development, the possibility to have a governance token from other chains (ETH, BNB...)")),(0,i.kt)("p",null,"As an example, it will be able to add fees for the use of its Data Space in order to create or develop a treasury; because each Data Space can have its own treasury if needed."),(0,i.kt)("br",null),(0,i.kt)("p",null,"For more informations about the rules, please clic here. (lien vers DS rules)"))}p.isMDXComponent=!0}}]);