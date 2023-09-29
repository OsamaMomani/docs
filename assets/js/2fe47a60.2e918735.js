(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[46196],{74963:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=a(87462),n=(a(67294),a(3905)),i=a(20701);const s={sidebar_position:3},r="OKP4 Ontology",c={unversionedId:"technical-documentation/ontology/okp4-ontology",id:"technical-documentation/ontology/okp4-ontology",title:"OKP4 Ontology",description:"The OKP4 protocol orchestrates the various resources of the Dataverse (datasets and services) using different blockchain elements such as smart contracts, logic modules, and ontology. All these elements allow for fine management of dataset and service workflows for knowledge creation within a Zone with personalized governance. As seen previous sections, the ontology must stand for the different concepts of the protocol, their relationships, and their properties.",source:"@site/docs/technical-documentation/ontology/okp4-ontology.md",sourceDirName:"technical-documentation/ontology",slug:"/technical-documentation/ontology/okp4-ontology",permalink:"/technical-documentation/ontology/okp4-ontology",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/technical-documentation/ontology/okp4-ontology.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"technical-documentation",previous:{title:"What are ontologies ?",permalink:"/technical-documentation/ontology/what-are-ontologies"},next:{title:"About Governance",permalink:"/technical-documentation/governance/introduction"}},l={},d=[{value:"The big picture",id:"the-big-picture",level:2},{value:"Class and properties",id:"class-and-properties",level:2},{value:"Data",id:"data",level:3},{value:"Dataset",id:"dataset",level:3},{value:"DatasetGeneralMetadata",id:"datasetgeneralmetadata",level:3},{value:"Zone",id:"zone",level:3},{value:"DIDURI",id:"diduri",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Resource",id:"resource",level:3},{value:"Service",id:"service",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"okp4-ontology"},"OKP4 Ontology"),(0,n.kt)("p",null,"The OKP4 protocol orchestrates the various resources of the Dataverse (datasets and services) using different blockchain elements such as smart contracts, logic modules, and ontology. All these elements allow for fine management of dataset and service workflows for knowledge creation within a Zone with personalized governance. As seen previous sections, the ontology must stand for the different concepts of the protocol, their relationships, and their properties."),(0,n.kt)("h2",{id:"the-big-picture"},"The big picture"),(0,n.kt)("p",null,"The following diagram depicts the introduced concepts and their relationship with the already existing concepts of the ontology."),(0,n.kt)(i.G,{chart:"classDiagram\n    Dataset --\x3e Service : providedBy\n\n    class Metadata{\n      <<abstract>>\n    }\n    Metadata <|.. ServiceGeneralMetadata\n    Metadata <|.. DatasetGeneralMetadata\n    Metadata <|.. ServiceExecutionMetadata\n    Metadata <|.. ServiceSpecificationMetadata\n\n    ServiceExecutionMetadata ..> ServiceExecution : describes\n\n    ServiceGeneralMetadata ..> Service : describes\n    ServiceSpecificationMetadata ..> Service : describes\n    DatasetGeneralMetadata ..> Dataset : describes\n\n    ServiceExecutionOrder --\x3e Service : hasObject\n    ServiceExecutionOrder --\x3e Service : has contractor\n\n    ServiceExecution --\x3e ServiceExecutionOrder : specifiedBy\n\n    ServiceExecution --\x3e Service : hasObject\n    ServiceExecution --\x3e ServiceExecution : hasParent\n\n    ServiceExecution --\x3e Dataset : hasInput\n    ServiceExecution --\x3e Dataset : produces\n    ServiceExecution --\x3e Metadata : produces",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"class-and-properties"},"Class and properties"),(0,n.kt)("p",null,"The following concepts and properties are found within the OKP4 ontology:"),(0,n.kt)("h3",{id:"data"},"Data"),(0,n.kt)("p",null," This refers to the data contained within a dataset."),(0,n.kt)("h3",{id:"dataset"},"Dataset"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hasIdentifier")),(0,n.kt)("p",null,"This is a dataset made available by a user on the protocol."),(0,n.kt)("h3",{id:"datasetgeneralmetadata"},"DatasetGeneralMetadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hasTag"),(0,n.kt)("li",{parentName:"ul"},"hasCreator"),(0,n.kt)("li",{parentName:"ul"},"hasDescription"),(0,n.kt)("li",{parentName:"ul"},"hasPublisher"),(0,n.kt)("li",{parentName:"ul"},"hasTitle"),(0,n.kt)("li",{parentName:"ul"},"hasSpatialCoverage"),(0,n.kt)("li",{parentName:"ul"},"hasTemporalCoverage"),(0,n.kt)("li",{parentName:"ul"},"hasImage")),(0,n.kt)("p",null,"This is the description of a given dataset in metadata form."),(0,n.kt)("h3",{id:"zone"},"Zone"),(0,n.kt)("p",null,"Zone is a conceptual framework that is established based on a set of rules, within which recognized ",(0,n.kt)("inlineCode",{parentName:"p"},"Resources")," must conform, considering associated consents."),(0,n.kt)("p",null,"Zones are described by a set of metadata providing information about various aspects of the Zone, such as the zone's name, general information about the provider, and more."),(0,n.kt)("p",null,"Specific data description vocabularies and thesauri are used to structure this metadata. A dedicated metadata profile outlines the rules that govern the Zone, expressing its fundamental principles, intentions, scope, and ultimate objectives. These rules encompass the entities involved and the Resources that interact within the Zone."),(0,n.kt)("p",null,"They can be customized to address specific use cases, industry sectors, partnership networks, or geographic regions, facilitating tailored governance arrangements within a specific context."),(0,n.kt)("h3",{id:"diduri"},"DIDURI"),(0,n.kt)("p",null,"A decentralized identifier URI. A URI that identifies a subject in a decentralized system and is managed independently of any centralized registry."),(0,n.kt)("h3",{id:"metadata"},"Metadata"),(0,n.kt)("p",null,"The information data about something (i.e. data about the data). This something can be a Zone, a Dataset, a Service, or any other entity that can be described."),(0,n.kt)("p",null,"Metadata is an abstract concept which is refined in Metadata Profiles used to provide a formal specification that defines the set of metadata elements, their semantics, and their syntax to be used in a particular context or application. The OKP4 protocol proposes several profiles at the core of the ontology, such as GeneralMetadata for describing services or datasets."),(0,n.kt)("h3",{id:"resource"},"Resource"),(0,n.kt)("p",null,"Services or datasets, a resource belongs to the Dataverse."),(0,n.kt)("h3",{id:"service"},"Service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hasIdentifier\nA service consumes a resource and produces data.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"With all these concepts, their properties, and their relationships, we can create the OKP4 ontology and explain the workings of the OKP4 protocol in a structured and formalized way. This ontology can be expressed in different formats, both understandable by humans and machines. It can be expressed in French or English, RDF, OWL, JSON-LD, N-Triples, Notation3 RDF/XML, Turtle, etc."))}h.isMDXComponent=!0},11748:(e,t,a)=>{var o={"./locale":89234,"./locale.js":89234};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=11748}}]);