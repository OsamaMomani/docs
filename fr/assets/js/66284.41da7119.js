"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[66284],{66284:(e,t,s)=>{s.r(t),s.d(t,{diagram:()=>A});var o=s(52244),a=s(45625),i=s(64415),r=s(56363),n=s(90360);s(27484),s(17967),s(27856),s(41644),s(39354);const d="rect",c="rectWithTitle",l="statediagram",p="transition",g="parent",b="note",h="----parent",u="fill:none",y="fill: #333",f="text",m="normal";let w={},x=0;function T(e="",t=0,s="",o="----"){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const k=(e,t,s,a,i,n)=>{const l=s.id,p=null==(k=a[l])?"":k.classes?k.classes.join(" "):"";var k;if("root"!==l){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),w[l]||(w[l]={id:l,shape:t,description:r.e.sanitizeText(l,(0,r.c)()),classes:`${p} statediagram-state`});const a=w[l];s.description&&(Array.isArray(a.description)?(a.shape=c,a.description.push(s.description)):a.description.length>0?(a.shape=c,a.description===l?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=d,a.description=s.description),a.description=r.e.sanitizeTextOrArray(a.description,(0,r.c)())),1===a.description.length&&a.shape===c&&(a.shape=d),!a.type&&s.doc&&(r.l.info("Setting cluster for ",l,D(s)),a.type="group",a.dir=D(s),a.shape=s.type===o.a?"divider":"roundedWithTitle",a.classes=a.classes+" statediagram-cluster "+(n?"statediagram-cluster-alt":""));const i={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:l,dir:a.dir,domId:T(l,x),type:a.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:"statediagram-note",style:"",id:l+"----note-"+x,domId:T(l,x,b),type:a.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:a.classes,style:"",id:l+h,domId:T(l,x,g),type:"group",padding:0};x++;const r=l+h;e.setNode(r,o),e.setNode(t.id,t),e.setNode(l,i),e.setParent(l,r),e.setParent(t.id,r);let n=l,d=t.id;"left of"===s.note.position&&(n=t.id,d=l),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:u,labelStyle:"",classes:"transition note-edge",arrowheadStyle:y,labelpos:"c",labelType:f,thickness:m})}else e.setNode(l,i)}t&&"root"!==t.id&&(r.l.trace("Setting node ",l," to be child of its parent ",t.id),e.setParent(l,t.id)),s.doc&&(r.l.trace("Adding nodes children "),S(e,s,s.doc,a,i,!n))},S=(e,t,s,a,i,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:k(e,t,s,a,i,n);break;case o.S:{k(e,t,s.state1,a,i,n),k(e,t,s.state2,a,i,n);const o={id:"edge"+x,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:u,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:y,labelpos:"c",labelType:f,thickness:m,classes:p};e.setEdge(s.state1.id,s.state2.id,o,x),x++}}}))},D=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},$={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),w={},o.db.getDirection();const{securityLevel:c,state:p}=(0,r.c)(),g=p.nodeSpacing||50,b=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:D(o.db.getRootDocV2()),nodesep:g,ranksep:b,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;k(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===c&&(y=(0,i.Ys)("#i"+t));const f="sandbox"===c?(0,i.Ys)(y.nodes()[0].contentDocument.body):(0,i.Ys)("body"),m=f.select(`[id="${t}"]`),x=f.select("#"+t+" g");await(0,n.r)(x,u,["barb"],l,t);r.u.insertTitle(m,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const T=m.node().getBBox(),S=T.width+16,$=T.height+16;m.attr("class",l);const A=m.node().getBBox();(0,r.i)(m,$,S,p.useMaxWidth);const v=`${A.x-8} ${A.y-8} ${S} ${$}`;r.l.debug(`viewBox ${v}`),m.attr("viewBox",v);const B=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const a of B){const e=a.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),a.insertBefore(t,a.firstChild)}}},A={parser:o.p,db:o.d,renderer:$,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);