(this.webpackJsonpcpu=this.webpackJsonpcpu||[]).push([[0],{159:function(e,t){},161:function(e,t){},171:function(e,t){},173:function(e,t){},200:function(e,t){},202:function(e,t){},203:function(e,t){},208:function(e,t){},210:function(e,t){},229:function(e,t){},241:function(e,t){},244:function(e,t){},275:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),o=n.n(c),i=n(292),s="PUB_K1_518dX1E8yMyq6oJ8PzReWSpwfQrEBfTC4cQVSjhsf1gLDviFgR",u="https://wax.api.atomicassets.io",l=n(2),d=n.n(l),p=n(45),f=n(56),b=n(5),h=n(18),x=n(297),v=n(81);function j(e,t){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.rpc.get_table_rows({json:!0,code:"m.federation",scope:"m.federation",table:"miners",lower_bound:n,upper_bound:n,limit:1,reverse:!1,show_payer:!1});case 3:return r=e.sent,console.debug("User Land:",r),e.abrupt("return",r.rows[0].current_land);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(b.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.rpc.get_table_rows({json:!0,code:"m.federation",scope:"m.federation",table:"bags",lower_bound:n,upper_bound:n,limit:1,reverse:!1,show_payer:!1});case 3:return r=e.sent,console.debug("userTools:",r),e.abrupt("return",r.rows[0].items);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function O(e,t){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.b("m.federation",n,t.api.rpc);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=u+"/atomicassets/v1/assets/"+t,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a.data.data);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var T="waxengineers",C=function(e,t){return{actions:[{account:"waxengineers",name:"cpu",authorization:[{actor:T,permission:"active"}],data:{name:e}},{account:"m.federation",name:"mine",authorization:[{actor:e,permission:"active"}],data:{miner:e,nonce:t}}]}};function E(e,t,n,r){return M.apply(this,arguments)}function M(){return(M=Object(b.a)(d.a.mark((function e(t,n,r,a){var c,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"m.federation",e.next=3,v.a({mining_account:"m.federation",account:n,difficulty:r,last_mine_tx:a});case 3:if(void 0!==(c=e.sent)){e.next=6;break}return e.abrupt("return",null);case 6:return o=c.rand_str,console.debug("user_nonce:",o),e.prev=8,e.next=11,t.api.transact(C(n,o),{blocksBehind:5,expireSeconds:120,broadcast:!0,sign:!0});case 11:return i=e.sent,console.debug("Transact result:",i),e.abrupt("return",{nonce:o,transaction_id:i.transaction_id});case 16:throw e.prev=16,e.t0=e.catch(8),console.error(e.t0),alert(e.t0),new Error("Transaction failed to submit. Either no signature or bad format or randomly sent before it was ready.");case 21:case"end":return e.stop()}}),e,null,[[8,16]])})))).apply(this,arguments)}function S(e,t){var n=0,r=0;if(null==t)return n;switch(t.length){case 0:console.error("ERROR: Found 0 tools!");break;case 1:console.debug("Mine Delay case 1"),t[0].data&&t[0].data.delay&&(r=t[0].data.delay);break;case 2:console.debug("Mine Delay case 2"),t[0].data&&t[0].data.delay&&t[1].data&&t[1].data.delay&&(r=t[0].data.delay+t[1].data.delay);break;case 3:if(console.debug("Mine Delay case 3"),t[0].data&&t[0].data.delay&&t[1].data&&t[1].data.delay&&t[2].data&&t[2].data.delay){var a=[t[0].data.delay,t[1].data.delay,t[2].data.delay];a.splice(a.indexOf(Math.min.apply(Math,a)),1),r=a[0]+a[1]}break;default:console.error("ERROR: Found 0 tools!"),r=0}return console.debug("Tool Delay:",r),e&&e.data&&(n=e.data.delay*r*.1,console.debug("Mine Delay:",n)),1e3*n}var D=n(142),I={getAvailableKeys:function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[s]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),sign:function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,a,c,o,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==t.requiredKeys.indexOf(s)){e.next=2;break}return e.abrupt("return",{signatures:[],serializedTransaction:t.serializedTransaction});case 2:return function(e){e.CPU="ULTRA"}(n||(n={})),r={transaction:Array.from(t.serializedTransaction),mineType:n.CPU},e.next=6,fetch("https://xph358yb93.execute-api.us-west-2.amazonaws.com/awflashloantools",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)});case 6:if((a=e.sent).ok){e.next=13;break}return e.next=10,a.json();case 10:throw c=e.sent,alert(c.reason),Error(c.reason||"Failed to connect to endpoint");case 13:return e.next=15,a.json();case 15:if(o=e.sent,console.debug("response:",o),o.isOk){e.next=21;break}throw alert(o.reason),alert("Go to www.cpu4.sale to get more cpu and keep playing!"),Error(o.reason);case 21:return i={signatures:o.signature,serializedTransaction:t.serializedTransaction},e.abrupt("return",i);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function R(e){return z.apply(this,arguments)}function z(){return(z=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.login();case 3:if("string"===typeof(n=e.sent)){e.next=6;break}throw new Error("unexpected type: "+typeof n);case 6:return console.log(t),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var F=n(6),L=Object(r.createContext)(null),P=Object(i.a)((function(e){return{root:{flexGrow:1,display:"inline"}}})),A=function(e){var t=e.children,n=Object(r.useState)(null),a=Object(h.a)(n,2),c=a[0],o=a[1],i=P(),s=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new D.WaxJS("https://wax.greymass.com",void 0,void 0,!1,I),e.next=3,R(t);case 3:void 0!==(n=e.sent)&&o({wax:t,accountId:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?Object(F.jsx)(L.Provider,{value:c,children:t}):Object(F.jsx)("div",{className:i.root,children:Object(F.jsx)(x.a,{id:"login",variant:"outlined",size:"large",onClick:s,children:"WAX Login"})})},U=n(148),B=Object(r.createContext)({info:null,update:function(){throw new Error("context not set")}}),J=function(e){var t=e.children,n=Object(r.useState)(null),c=Object(h.a)(n,2),o=c[0],i=c[1],s=a.a.useContext(L),u=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var r,a,c,o,s,u,l,f,b,h,x,v;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=0,a=null,e.next=6,j(t.wax,t.accountId);case 6:if(!(c=e.sent)){e.next=19;break}if(e.t0=c,!c){e.next=15;break}return e.next=12,k(c);case 12:e.t1=e.sent,e.next=16;break;case 15:e.t1=null;case 16:e.t2=e.t1,(a={id:e.t0,data:e.t2}).data&&(r+=a.data.difficulty);case 19:return e.next=21,w(t.wax,t.accountId);case 21:if(o=e.sent,s=[],!o){e.next=46;break}u=Object(U.a)(o),e.prev=25,u.s();case 27:if((l=u.n()).done){e.next=36;break}return f=l.value,e.next=31,k(f);case 31:(b=e.sent)&&(r+=b.difficulty),s.push({id:f,data:b});case 34:e.next=27;break;case 36:e.next=41;break;case 38:e.prev=38,e.t3=e.catch(25),u.e(e.t3);case 41:return e.prev=41,u.f(),e.finish(41);case 44:e.next=47;break;case 46:console.debug("ERROR: User must have at least 1 tool!");case 47:if(e.t4=null===n||void 0===n?void 0:n.transaction_ids,e.t4){e.next=53;break}return e.next=51,O(t.wax,t.accountId);case 51:e.t5=e.sent,e.t4=[e.t5];case 53:h=e.t4,x=(null===n||void 0===n?void 0:n.nonce)||"0",v={land:a,tools:s,difficulty:r,nonce:x,transaction_ids:h},console.debug("info:",v),i(Object(p.a)({},v));case 58:case"end":return e.stop()}}),e,null,[[25,38,41,44]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){o||u(s,o);var e=setInterval((function(){u(s,o)}),1e4);return function(){return clearInterval(e)}}),[s,o]),o?Object(F.jsx)(B.Provider,{value:{info:o,update:i},children:t}):Object(F.jsx)("h2",{children:"Loading Alien Worlds Info..."})},N=function(){var e=Object(r.useState)(0),t=Object(h.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(new Date(Date.now()-n)),i=Object(h.a)(o,2),s=i[0],u=i[1],l=Object(r.useState)(new Date),v=Object(h.a)(l,2),j=v[0],m=v[1],w=a.a.useContext(L),y=a.a.useContext(B);Object(r.useEffect)((function(){var e=setInterval((function(){m(new Date)}),500);return function(){return clearInterval(e)}}),[j]);var O=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:if(y.info){e.next=4;break}return e.abrupt("return");case 4:return t=y.info,e.prev=5,e.next=8,E(w.wax,w.accountId,t.difficulty,t.transaction_ids[0]);case 8:(n=e.sent)?((r=Object(f.a)(t.transaction_ids)).unshift(n.transaction_id),y.update(Object(p.a)(Object(p.a)({},t),{},{nonce:n.nonce,transaction_ids:r})),u(new Date),c(S(t.land,t.tools))):console.debug("Unexpected case"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.error(e.t0),alert("Error: Failed to perform mine");case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),g=function(){return j.valueOf()-s.valueOf()};return Object(F.jsx)(x.a,{id:"mine",onClick:O,variant:"outlined",size:"large",disabled:!y||g()<n,children:y&&g()<n?"Mine - Timeout: "+function(e){if(e<=0)return"";var t=n-e,r=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);return r+":"+(a<=9?"0"+a:a)}(g()):"Mine"})},W=Object(i.a)((function(e){return{root:{color:"inherit",maxHeight:"100%",maxWidth:"100%"}}})),K=function(e){var t=W(),n=e.is_land?"Land":"Tool";return Object(F.jsx)("img",{className:t.root,src:e.image_url,alt:n,id:e.id})},q=Object(i.a)((function(e){return{root:{},images:{display:"block",height:"250px",width:"auto",paddingLeft:"0"},actions:{height:"250px",width:"auto",display:"inline"},transactions:{paddingTop:"5px",width:"600px",height:"250px"}}})),G=function(){var e=a.a.useContext(B),t=q(),n=function(e,t,n){var r=(e?null===n||void 0===n?void 0:n.land:((null===n||void 0===n?void 0:n.tools.length)||0)>t?null===n||void 0===n?void 0:n.tools[t]:null)||null;return Object(F.jsx)(K,{id:r?r.id:"",is_land:e,image_url:r&&r.data?"https://gateway.pinata.cloud/ipfs/"+r.data.img:""},r?r.id:e?"land":"tool"+t)};n(!0,0,e.info),n(!1,0,e.info),n(!1,1,e.info),n(!1,2,e.info);return Object(F.jsx)("div",{id:"alienworlds",children:Object(F.jsx)("div",{className:t.actions,children:Object(F.jsx)(N,{})})})},Q=function(){return Object(F.jsx)(J,{children:Object(F.jsx)(G,{})})},X=function(){return Object(F.jsx)("div",{id:"app",children:Object(F.jsx)("header",{className:"App-header",children:Object(F.jsx)(Q,{})})})},H=n(294),V=n(296),Y=n(149),Z=n(295),$=function(e){var t=e.children,n=Object(H.a)("(prefers-color-scheme: dark)"),a=Object(r.useMemo)((function(){return Object(Y.a)({typography:{},palette:{type:n?"dark":"light",primary:{main:"#212121"},secondary:{main:"#ffffff"}}})}),[n]);return Object(F.jsxs)(Z.a,{theme:a,children:[Object(F.jsx)(V.a,{}),t]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsxs)($,{children:[Object(F.jsx)("h1",{children:"Cpu"}),Object(F.jsx)(A,{children:Object(F.jsx)(X,{})})]})}),document.getElementById("root")),ee()}},[[275,1,2]]]);