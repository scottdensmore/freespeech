import{S as oe,i as ae,s as pe,e as ie,a,t as G,b as $,c as fe,d as n,f as X,g as ce,h as _e,m as me,j as ye,k as b,l as O,n as k,o as j,p as U,q as R,r as w,u as f,v as g,w as I,x as E,y as K,z as de,A as Pe,B as J}from"./chunks/index.e1c8ffd7.js";import{E as Y,L as Z,C as ue}from"./chunks/stores.8cf13533.js";import{M as be}from"./chunks/Modal.11c7fa9c.js";function ne(r){let o,u;return o=new be({props:{editsMade:r[5],links:!0,close:r[19],save:r[8],$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){ce(o.$$.fragment)},l(t){_e(o.$$.fragment,t)},m(t,s){me(o,t,s),u=!0},p(t,s){const l={};s&32&&(l.editsMade=t[5]),s&64&&(l.close=t[19]),s&2097343&&(l.$$scope={dirty:s,ctx:t}),o.$set(l)},i(t){u||(G(o.$$.fragment,t),u=!0)},o(t){$(o.$$.fragment,t),u=!1},d(t){ye(o,t)}}}function je(r){let o,u,t,s,l,v,p,h,_,N,d,m,L,S,z,q,y,A,T,B,D,P,H,c,C,Q,V,M,W,x;return{c(){o=b("h1"),u=O("Settings"),t=k(),s=b("p"),l=O("Project Name"),v=k(),p=b("input"),h=k(),_=b("p"),N=O("Project Description"),d=k(),m=b("input"),L=k(),S=b("p"),z=O("Project Columns"),q=k(),y=b("input"),A=k(),T=b("p"),B=O("Project Rows"),D=k(),P=b("input"),H=k(),c=b("span"),C=b("p"),Q=O("Private Project"),V=k(),M=b("input"),this.h()},l(e){o=j(e,"H1",{class:!0});var i=U(o);u=R(i,"Settings"),i.forEach(n),t=w(e),s=j(e,"P",{class:!0});var ee=U(s);l=R(ee,"Project Name"),ee.forEach(n),v=w(e),p=j(e,"INPUT",{class:!0,type:!0}),h=w(e),_=j(e,"P",{class:!0});var te=U(_);N=R(te,"Project Description"),te.forEach(n),d=w(e),m=j(e,"INPUT",{class:!0,type:!0}),L=w(e),S=j(e,"P",{class:!0});var se=U(S);z=R(se,"Project Columns"),se.forEach(n),q=w(e),y=j(e,"INPUT",{class:!0,type:!0}),A=w(e),T=j(e,"P",{class:!0});var le=U(T);B=R(le,"Project Rows"),le.forEach(n),D=w(e),P=j(e,"INPUT",{class:!0,type:!0}),H=w(e),c=j(e,"SPAN",{class:!0});var F=U(c);C=j(F,"P",{class:!0});var re=U(C);Q=R(re,"Private Project"),re.forEach(n),V=w(F),M=j(F,"INPUT",{class:!0,type:!0}),F.forEach(n),this.h()},h(){f(o,"class","text-2xl font-bold"),f(s,"class","text-gray-300"),f(p,"class","gb-gray-100 rounded-md border-gray-200 p-2 text-gray-700"),f(p,"type","text"),f(_,"class","text-gray-300"),f(m,"class","gb-gray-100 rounded-md border-gray-200 p-2 text-gray-700"),f(m,"type","text"),f(S,"class","text-gray-300"),f(y,"class","gb-gray-100 rounded-md border-gray-200 p-2 text-gray-700"),f(y,"type","number"),f(T,"class","text-gray-300"),f(P,"class","gb-gray-100 rounded-md border-gray-200 p-2 text-gray-700"),f(P,"type","number"),f(C,"class","text-gray-300"),f(M,"class","gb-gray-100 rounded-md border-gray-200 p-2 text-gray-700"),f(M,"type","checkbox"),f(c,"class","flex justify-between")},m(e,i){a(e,o,i),g(o,u),a(e,t,i),a(e,s,i),g(s,l),a(e,v,i),a(e,p,i),I(p,r[0]),a(e,h,i),a(e,_,i),g(_,N),a(e,d,i),a(e,m,i),I(m,r[1]),a(e,L,i),a(e,S,i),g(S,z),a(e,q,i),a(e,y,i),I(y,r[2]),a(e,A,i),a(e,T,i),g(T,B),a(e,D,i),a(e,P,i),I(P,r[3]),a(e,H,i),a(e,c,i),g(c,C),g(C,Q),g(c,V),g(c,M),M.checked=r[4],W||(x=[E(p,"input",r[9]),E(p,"input",r[10]),E(m,"input",r[11]),E(m,"input",r[12]),E(y,"input",r[13]),E(y,"input",r[14]),E(P,"input",r[15]),E(P,"input",r[16]),E(M,"change",r[17]),E(M,"input",r[18])],W=!0)},p(e,i){i&1&&p.value!==e[0]&&I(p,e[0]),i&2&&m.value!==e[1]&&I(m,e[1]),i&4&&K(y.value)!==e[2]&&I(y,e[2]),i&8&&K(P.value)!==e[3]&&I(P,e[3]),i&16&&(M.checked=e[4])},d(e){e&&n(o),e&&n(t),e&&n(s),e&&n(v),e&&n(p),e&&n(h),e&&n(_),e&&n(d),e&&n(m),e&&n(L),e&&n(S),e&&n(q),e&&n(y),e&&n(A),e&&n(T),e&&n(D),e&&n(P),e&&n(H),e&&n(c),W=!1,de(x)}}}function ve(r){let o,u,t=r[6]==="settings"&&ne(r);return{c(){t&&t.c(),o=ie()},l(s){t&&t.l(s),o=ie()},m(s,l){t&&t.m(s,l),a(s,o,l),u=!0},p(s,[l]){s[6]==="settings"?t?(t.p(s,l),l&64&&G(t,1)):(t=ne(s),t.c(),G(t,1),t.m(o.parentNode,o)):t&&(Pe(),$(t,1,1,()=>{t=null}),fe())},i(s){u||(G(t),u=!0)},o(s){$(t),u=!1},d(s){t&&t.d(s),s&&n(o)}}}function he(r,o,u){let t,s,l;X(r,Z,c=>u(20,t=c)),X(r,Y,c=>u(6,s=c)),X(r,ue,c=>u(7,l=c));let v=l.name,p=l.description,h=l.columns,_=l.rows,N=l.visibility==="private",d=!1;const m=async()=>{if(!d){alert("Please fill out all fields");return}J(Z,t=!0,t);const C=await(await fetch("/api/v1/project/edit.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l.id,name:v,description:p,columns:h,rows:_,visibility:N?"private":"public"})})).json();C.success&&(J(ue,l={...l,...C.project},l),J(Y,s="",s)),J(Z,t=!1,t)};function L(){v=this.value,u(0,v)}const S=()=>{u(5,d=v!==l.name)};function z(){p=this.value,u(1,p)}const q=()=>{u(5,d=p!==l.description)};function y(){h=K(this.value),u(2,h)}const A=()=>{u(5,d=h!==l.columns)};function T(){_=K(this.value),u(3,_)}const B=()=>{u(5,d=_!==l.rows)};function D(){N=this.checked,u(4,N)}return[v,p,h,_,N,d,s,l,m,L,S,z,q,y,A,T,B,D,()=>{u(5,d=N!==(l.visibility==="private"))},()=>J(Y,s="",s)]}class Ne extends oe{constructor(o){super(),ae(this,o,he,ve,pe,{})}}export{Ne as default};
