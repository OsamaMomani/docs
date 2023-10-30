"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[32396],{49679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905)),s=n(8209);const a={sidebar_position:2},r="What are ontologies ?",l={unversionedId:"technical-documentation/ontology/what-are-ontologies",id:"technical-documentation/ontology/what-are-ontologies",title:"What are ontologies ?",description:"Definition",source:"@site/docs/technical-documentation/ontology/what-are-ontologies.md",sourceDirName:"technical-documentation/ontology",slug:"/technical-documentation/ontology/what-are-ontologies",permalink:"/fr/technical-documentation/ontology/what-are-ontologies",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/technical-documentation/ontology/what-are-ontologies.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"technical-documentation",previous:{title:"The Power Of Ontologies",permalink:"/fr/technical-documentation/ontology/the-power-of-ontologies"},next:{title:"OKP4 Ontology",permalink:"/fr/technical-documentation/ontology/okp4-ontology"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Examples",id:"examples",level:2},{value:"Sheep and goat",id:"sheep-and-goat",level:3},{value:"Water resources",id:"water-resources",level:3},{value:"Ontology construction process",id:"ontology-construction-process",level:2},{value:"Underlying Assumptions",id:"underlying-assumptions",level:2}],h={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-are-ontologies-"},"What are ontologies ?"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"In computer science, ontology is a formal and structured representation of the concepts, relationships, and properties of a particular domain. An ontology generally comprises the following basic elements: concepts, relationships, properties, axioms, and instances. These can be graphically represented by the simplified equation shown below."),(0,i.kt)("center",null,(0,i.kt)("img",{src:"/img/content/technical-documentation/ontology_equation.webp",alt:"Ontology equation",style:{maxHeight:"220px"}})),(0,i.kt)("p",null,"Some definitions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Concepts"),": represent the main formalized elements of the domain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Relationships"),": represent links between concepts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Properties"),": represent specific attributes or characteristics of the concepts themselves."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Axioms"),": represent logical statements or rules that define relationships between concepts, properties, and instances, ensuring the consistency and coherence of the knowledge represented within the ontology.."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instances"),": the concrete instances of concepts representing objects in the application domain. In OKP4, instances are used to represent all the resources of the dataverse.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"sheep-and-goat"},"Sheep and goat"),(0,i.kt)("p",null,"source: OKP4"),(0,i.kt)(s.G,{chart:"flowchart TD\n    A[Carnivore] --\x3e|is| B[Animal]\n    A --\x3e|eats| B\n    C[Herbivore] --\x3e|is| B[Animal]\n    C --\x3e|eats| D[Plants]\n    E[Sheep]--\x3e|is| C\n    F[Wolf]--\x3e|eats| E\n    F[Wolf]--\x3e|is| B\n    F[Wolf]-.->|implies| A",mdxType:"Mermaid"}),(0,i.kt)("h3",{id:"water-resources"},"Water resources"),(0,i.kt)("p",null,"source: OKP4 from SAREF extension for water"),(0,i.kt)(s.G,{chart:"classDiagram\n    class WaterAsset{\n        +hasName: string\n    }\n\n    class SourceAsset{\n        +hasName: string\n        +hasSurface: string\n    }\n\n    class SinkAsset{\n        +hasName: string\n        +hasSurface: string\n    }\n\n    class Glacier {\n        +hasName: string\n        +hasSurface: string\n    }\n\n    class Lake {\n        +hasName: string\n        +hasSurface: string\n        +hasLocation: string\n    }\n\n    class Lagoon {\n        +hasName: string\n        +hasSurface: string\n        +hasLocation: string\n    }\n\n    class Ocean {\n        +hasName: string\n        +hasSurface: string\n    }\n\n    class River {\n        +hasName: string\n        +hasSurface: string\n    }\n\n    class Sea {\n        +hasName: string\n        +hasSurface: string\n    }\n\n    SourceAsset --\x3e WaterAsset : is\n    SinkAsset --\x3e WaterAsset : is\n    Glacier --\x3e SourceAsset : isType\n    Lake --\x3e SourceAsset : isType\n    Lagoon --\x3e SourceAsset : isType\n    Ocean --\x3e SinkAsset : isType\n    River --\x3e SinkAsset : isType\n    Sea --\x3e SinkAsset : isType\n    Glacier --\x3e Sea : isLocated",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"ontology-construction-process"},"Ontology construction process"),(0,i.kt)("p",null,"The construction of this ontology follows a number of steps which are described below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ontology scope definition (1) & knowledge acquisition (2)"),": Identification and definition of key concepts and relationships in the domain of interest and the terms that refer to such concepts, in natural language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ontology specification (3) & conceptualization (4)"),": Formalizing of the elements identified in the previous step in the form of a knowledge representation, using the building blocks of ontologies: classes, attributes, relationships, subsumption."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ontology implementation (5)"),": Encoding the ontology according to the OWL grammar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ontology evaluation (6)"),": Association of key concepts and terms in the ontology with concepts and terms of other ontologies.")),(0,i.kt)("center",null,(0,i.kt)("img",{src:"/img/content/technical-documentation/ontology-construction-process.webp",alt:"Ontology construction process",style:{maxHeight:"650px"}})),(0,i.kt)("h2",{id:"underlying-assumptions"},"Underlying Assumptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modeling a domain is not a one-size-fits-all process. There's a balance to be struck between the ontology's meaning, its expressivity, its potential for expansion, and its actual application."),(0,i.kt)("li",{parentName:"ul"},"The development of the OKP4 ontology is dynamic. It evolves progressively through an iterative process (detailed in the subsequent section). Some decisions taken now may be revisited in the future."),(0,i.kt)("li",{parentName:"ul"},"It's crucial to recognize the distinction between OWL modeling and ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unified_Modeling_Language"},"UML")," modeling. The latter, often rooted in Object-Oriented interpretations, varies from OWL's approach. For deeper insights, the following resources are recommended:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://madoc.bib.uni-mannheim.de/1898/1/TR2008_004.pdf"},"Comparing UML and OWL in Depth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://henrietteharmse.com/2018/06/22/a-common-misconception-regarding-owl-properties/"},"Dispelling a Common Myth about OWL Properties")))),(0,i.kt)("li",{parentName:"ul"},"Given that OWL operates as a logical description language, certain inferences can be drawn using an OWL reasoner. Nevertheless, wherever feasible, it's preferable to clarify aspects that could otherwise be left for an OWL reasoner to deduce.")))}m.isMDXComponent=!0}}]);