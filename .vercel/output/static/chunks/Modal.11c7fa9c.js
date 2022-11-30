import{S as J,i as K,s as R,D as L,E as O,p as b,d as g,u as c,a as T,v as m,C as U,F as Z,k as w,n as V,l as C,o as k,r as A,q as S,G as P,x as N,H as F,I as Q,J as W,K as X,t as x,A as Y,b as z,c as p,z as $,g as ee,h as te,m as le,j as se}from"./index.e1c8ffd7.js";function ae(s){let e,t;return{c(){e=L("svg"),t=L("path"),this.h()},l(i){e=O(i,"svg",{width:!0,height:!0,viewBox:!0});var l=b(e);t=O(l,"path",{d:!0,fill:!0}),b(t).forEach(g),l.forEach(g),this.h()},h(){c(t,"d","M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z"),c(t,"fill",s[2]),c(e,"width",s[0]),c(e,"height",s[1]),c(e,"viewBox",s[3])},m(i,l){T(i,e,l),m(e,t)},p(i,[l]){l&4&&c(t,"fill",i[2]),l&1&&c(e,"width",i[0]),l&2&&c(e,"height",i[1]),l&8&&c(e,"viewBox",i[3])},i:U,o:U,d(i){i&&g(e)}}}function ie(s,e,t){let{size:i="1em"}=e,{width:l=i}=e,{height:n=i}=e,{color:r="currentColor"}=e,{viewBox:u="0 0 24 24"}=e;return s.$$set=a=>{"size"in a&&t(4,i=a.size),"width"in a&&t(0,l=a.width),"height"in a&&t(1,n=a.height),"color"in a&&t(2,r=a.color),"viewBox"in a&&t(3,u=a.viewBox)},[l,n,r,u,i]}class ne extends J{constructor(e){super(),K(this,e,ie,ae,R,{size:4,width:0,height:1,color:2,viewBox:3})}}function G(s){let e,t,i,l,n;return l=new ne({}),{c(){e=w("div"),t=w("a"),i=C("Dashboard "),ee(l.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var u=b(e);t=k(u,"A",{href:!0,class:!0});var a=b(t);i=S(a,"Dashboard "),te(l.$$.fragment,a),a.forEach(g),u.forEach(g),this.h()},h(){c(t,"href","/dashboard/projects"),c(t,"class","flex items-center justify-center gap-2 rounded-md border border-gray-500 bg-gray-800 p-4 text-xl text-gray-50 shadow-xl"),c(e,"class","fixed bottom-5 right-5 flex w-[200px] flex-col gap-4")},m(r,u){T(r,e,u),m(e,t),m(t,i),le(l,t,null),n=!0},i(r){n||(x(l.$$.fragment,r),n=!0)},o(r){z(l.$$.fragment,r),n=!1},d(r){r&&g(e),se(l)}}}function re(s){let e,t,i,l,n,r,u,a,y,f,B,v,D,j;const I=s[5].default,d=Z(I,s,s[4],null);let o=s[1]&&G();return{c(){e=w("main"),t=w("div"),d&&d.c(),i=V(),l=w("div"),n=w("button"),r=C("Cancel"),u=V(),a=w("button"),y=C("Save"),B=V(),o&&o.c(),this.h()},l(h){e=k(h,"MAIN",{style:!0,class:!0});var _=b(e);t=k(_,"DIV",{class:!0});var E=b(t);d&&d.l(E),i=A(E),l=k(E,"DIV",{class:!0});var M=b(l);n=k(M,"BUTTON",{class:!0});var H=b(n);r=S(H,"Cancel"),H.forEach(g),u=A(M),a=k(M,"BUTTON",{class:!0});var q=b(a);y=S(q,"Save"),q.forEach(g),M.forEach(g),E.forEach(g),B=A(_),o&&o.l(_),_.forEach(g),this.h()},h(){c(n,"class","flex-1 rounded-md border border-gray-400 bg-gray-500 p-2 text-center"),a.disabled=f=!s[0],c(a,"class","flex-1 rounded-md border border-blue-400 bg-blue-500 p-2 text-center"),c(l,"class","flex gap-4"),c(t,"class","flex w-full max-w-[500px] flex-col gap-2 border border-gray-700 bg-gray-800 p-4 sm:rounded-md"),P(e,"background","rgba(0,0,0,0.5)"),c(e,"class","fixed top-0 left-0 z-20 grid h-full min-h-screen w-full place-items-center")},m(h,_){T(h,e,_),m(e,t),d&&d.m(t,null),m(t,i),m(t,l),m(l,n),m(n,r),m(l,u),m(l,a),m(a,y),m(e,B),o&&o.m(e,null),v=!0,D||(j=[N(n,"click",function(){F(s[2])&&s[2].apply(this,arguments)}),N(a,"click",function(){F(s[3])&&s[3].apply(this,arguments)}),N(e,"click",s[6]),N(e,"keypress",oe)],D=!0)},p(h,[_]){s=h,d&&d.p&&(!v||_&16)&&Q(d,I,s,s[4],v?X(I,s[4],_,null):W(s[4]),null),(!v||_&1&&f!==(f=!s[0]))&&(a.disabled=f),s[1]?o?_&2&&x(o,1):(o=G(),o.c(),x(o,1),o.m(e,null)):o&&(Y(),z(o,1,1,()=>{o=null}),p())},i(h){v||(x(d,h),x(o),v=!0)},o(h){z(d,h),z(o),v=!1},d(h){h&&g(e),d&&d.d(h),o&&o.d(),D=!1,$(j)}}}const oe=()=>null;function fe(s,e,t){let{$$slots:i={},$$scope:l}=e,{editsMade:n=!1}=e,{links:r=!1}=e,{close:u}=e,{save:a}=e;const y=f=>{f.target?.tagName==="MAIN"&&!n&&u()};return s.$$set=f=>{"editsMade"in f&&t(0,n=f.editsMade),"links"in f&&t(1,r=f.links),"close"in f&&t(2,u=f.close),"save"in f&&t(3,a=f.save),"$$scope"in f&&t(4,l=f.$$scope)},[n,r,u,a,l,i,y]}class ue extends J{constructor(e){super(),K(this,e,fe,re,R,{editsMade:0,links:1,close:2,save:3})}}export{ue as M};
