(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{129:function(t,e,a){t.exports={container:"Chart_container__2dVLZ"}},134:function(t,e,a){t.exports={formControl:"CountryPicker_formControl__2lHwD"}},135:function(t,e,a){t.exports={container:"GlobalStats_container__1q5Pi",image:"GlobalStats_image__1iOU1"}},136:function(t,e,a){t.exports={container:"IndiaStats_container__3z5hb",image:"IndiaStats_image__27X_p"}},138:function(t,e,a){t.exports={container:"App_container___FWUB",image:"App_image__3fEfh"}},30:function(t,e,a){t.exports={container:"Cards_container__1SgbK",card:"Cards_card__18VTY",infected:"Cards_infected__33UAh",recovered:"Cards_recovered__J-HP2",deaths:"Cards_deaths__9LS0D"}},322:function(t,e,a){},325:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(0),c=a(128),o=a.n(c),s=a(9),i=a(56),u=a(6),d=a(84),l=a.n(d),j=a(4),h=a.n(j),f=a(11),b=a(342),p=a(346),O=a(343),x=a(344),v=a(59),m=a.n(v),g=a(60),S=a.n(g),y=a(30),_=a.n(y),k=a(36),C=a.n(k),w="https://covid19.mathdro.id/api",N="".concat(w,"/countries/India"),I=function(){var t=Object(f.a)(h.a.mark((function t(e){var a,n,r,c,o,s,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=w,e&&(a="".concat(w,"/countries/").concat(e)),t.prev=2,t.next=5,C.a.get(a);case 5:return n=t.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:t.prev=14,t.t0=t.catch(2),console.error("Error while fetching data ".concat(t.t0));case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=Object(f.a)(h.a.mark((function t(){var e,a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("".concat(w,"/daily"));case 3:return e=t.sent,a=e.data,n=a.map((function(t){return{confirmed:t.confirmed.total,deaths:t.deaths.total,date:t.reportDate}})),t.abrupt("return",n);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(f.a)(h.a.mark((function t(){var e,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("".concat(w,"/countries"));case 3:return e=t.sent,a=e.data.countries,console.log("".concat(w,"/countries")),t.abrupt("return",a.map((function(t){return t.name})));case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),A=function(){var t=Object(f.a)(h.a.mark((function t(){var e,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("".concat("https://api.covid19india.org/v4/min/timeseries.min.json"));case 3:return e=t.sent,a=e.data,localStorage.setItem("IndiaStats",JSON.stringify(a)),t.abrupt("return",Object.keys(a).map((function(t){return t})));case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),T=function(){var t=Object(f.a)(h.a.mark((function t(e){var a,n,r,c,o,s,i,u,d,l,j,f,b,p;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=13;break}return console.log("State selected "+e),a=JSON.parse(localStorage.getItem("IndiaStats")),n=a[e].dates,r=Object.keys(n),c=r[r.length-1],console.log(n[c].total),o=n[c].total,s=o.confirmed,i=o.deceased,u=o.recovered,o.tested,console.log(s),t.abrupt("return",{confirmed:s,recovered:u,deaths:i,lastUpdate:c});case 13:return t.next=15,C.a.get(N);case 15:return d=t.sent,l=d.data,j=l.confirmed,f=l.recovered,b=l.deaths,p=l.lastUpdate,t.abrupt("return",{confirmed:j,recovered:f,deaths:b,lastUpdate:p});case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(0),console.error(t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,24]])})));return function(e){return t.apply(this,arguments)}}(),U=a(85),L=a(129),M=a.n(L),R={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},B=function(t){var e=t.data,a=e.confirmed,c=e.deaths,o=e.recovered,i=t.country,u=t.IndState,d=Object(r.useState)([]),l=Object(s.a)(d,2),j=l[0],p=l[1],O=Object(r.useState)([]),x=Object(s.a)(O,2),v=(x[0],x[1]);Object(r.useEffect)((function(){var t=function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,D();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();u?function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("India Daily data"),t.t0=v,t.next=4,T();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()():t()}),[]);var m=j.length?Object(n.jsx)(U.Line,{data:{labels:j.map((function(t){return t.date})),datasets:[{data:j.map((function(t){return t.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:j.map((function(t){return t.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0,0,0.5)",fill:!0}]}}):null,g=a?Object(n.jsx)(U.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["#99f2c8","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:i?[a.value,o.value,c.value]:[a,o,c]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(i||R[u])}}}):null;return Object(n.jsx)(b.a,{className:M.a.container,children:i||u?g:m})},G=function(t){var e=t.data,a=e.confirmed,r=e.recovered,c=e.deaths,o=e.lastUpdate,s=(t.country,t.IndState);return a?Object(n.jsxs)(b.a,{children:[Object(n.jsx)(b.a,{item:!0,component:p.a,xs:12,className:S()(_.a.card,_.a.infected),children:Object(n.jsxs)(O.a,{style:{backgroundColor:"#99f2c8"},children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(m.a,{start:0,end:s?a:a.value,duration:2.5,seperator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of active cases of Covid 19"})]})}),Object(n.jsx)(b.a,{item:!0,component:p.a,xs:12,className:S()(_.a.card,_.a.recovered),children:Object(n.jsxs)(O.a,{style:{backgroundColor:"rgba(0, 255, 0, 0.5)"},children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(m.a,{start:0,end:s?r:r.value,duration:2.5,seperator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of recoveries from Covid 19"})]})}),Object(n.jsx)(b.a,{item:!0,component:p.a,xs:12,className:S()(_.a.card,_.a.deaths),children:Object(n.jsxs)(O.a,{style:{backgroundColor:"#c31432"},children:[Object(n.jsx)(x.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(x.a,{variant:"h5",children:Object(n.jsx)(m.a,{start:0,end:s?c:c.value,duration:2.5,seperator:","})}),Object(n.jsx)(x.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(x.a,{variant:"body2",children:"Number of deaths Covid 19"})]})})]}):"Loading ..."},J=a(347),H=a(345),E=a(134),K=a.n(E),V=function(t){var e=t.handleCountryChange,a=t.handleStateChange,c=t.Region,o=Object(r.useState)([]),i=Object(s.a)(o,2),u=i[0],d=i[1],l=Object(r.useState)([]),j=Object(s.a)(l,2),b=j[0],p=j[1];return Object(r.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("IndiaStats"!==c){t.next=8;break}return t.t0=p,t.next=4,A();case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 8:return t.t2=d,t.next=11,P();case 11:t.t3=t.sent,(0,t.t2)(t.t3);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[d,p]),Object(n.jsx)(J.a,{className:K.a.formControl,children:"IndiaStats"===c?Object(n.jsxs)(H.a,{defaultValue:"",onChange:function(t){return a(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"India"}),b.map((function(t,e){if("UN"!==t&&"TT"!==t)return Object(n.jsx)("option",{value:t,children:R[t]},e)}))]}):Object(n.jsxs)(H.a,{defaultValue:"",onChange:function(t){return e(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Global"}),u.map((function(t,e){return Object(n.jsx)("option",{value:t,children:t},e)}))]})})},z=a(135),W=a.n(z),Y=function(){var t=Object(r.useState)({}),e=Object(s.a)(t,2),a=e[0],c=e[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],l=function(){var t=Object(f.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(e);case 2:a=t.sent,console.log(a),c(a),d(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,I();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:W.a.container,children:[Object(n.jsx)(V,{handleCountryChange:l}),Object(n.jsxs)(b.a,{container:!0,children:[Object(n.jsx)(G,{data:a,country:u}),Object(n.jsx)(B,{data:a,country:u})]})]})},Z=a(136),q=a.n(Z),F=function(){var t=Object(r.useState)({}),e=Object(s.a)(t,2),a=e[0],c=e[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],l=function(){var t=Object(f.a)(h.a.mark((function t(e){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:a=t.sent,console.log(a),c(a),d(e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){(function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,T();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:q.a.container,children:[Object(n.jsx)(V,{handleStateChange:l,Region:"IndiaStats"}),Object(n.jsxs)(b.a,{container:!0,children:[Object(n.jsx)(G,{data:a,IndState:u}),Object(n.jsx)(B,{data:a,IndState:u})]})]})},X=(a(322),a.p+"static/media/corona.46957fb8.jpg"),Q=Object(u.f)((function(t){var e=Object(r.useState)(!1),a=Object(s.a)(e,2),c=a[0],o=a[1],i=Object(r.useState)(!1),u=Object(s.a)(i,2),d=u[0],j=u[1],h=Object(r.useState)((function(){return!1})),f=Object(s.a)(h,2),b=f[0],p=f[1],O=function(t){var e=["m-item"];return c&&e.push("open-".concat(t)),e.join(" ")};Object(r.useEffect)((function(){var t=window.location.pathname;j("/"!==t)}),[]);var x=function(e){t.history.push(e),o(!1),j("/"!==e)};return Object(n.jsxs)("div",{className:d?"MenuRight":"Menu",children:[Object(n.jsx)("div",{className:"m-item m-logo",onClick:function(){return o(!c)},children:Object(n.jsx)("img",{style:{width:"50px",marginTop:"5px"},alt:"COVID-19",src:X})}),Object(n.jsx)("div",{className:O(1),onClick:function(){return x("/IndiaStats")},children:"India Stats"}),Object(n.jsx)("div",{className:O(2),onClick:function(){return x("/GlobalStats")},children:"Global Stats"}),Object(n.jsx)("div",{className:O(3),onClick:function(){return x("/")},children:"Sign out"}),Object(n.jsx)("div",{className:O(4),children:Object(n.jsx)(l.a,{onChange:p,checked:b,size:80})})]})})),$=a(138),tt=a.n($),et=function(){var t=Object(r.useState)((function(){return!1})),e=Object(s.a)(t,2);e[0],e[1];return Object(n.jsx)(i.a,{className:tt.a.container,children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(Q,{}),Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/GlobalStats",component:Y}),Object(n.jsx)(u.a,{exact:!0,path:"/IndiaStats",component:F}),Object(n.jsx)(u.a,{path:"/",component:null})]})]})})};o.a.render(Object(n.jsx)(et,{}),document.getElementById("root"))}},[[325,1,2]]]);
//# sourceMappingURL=main.d44f31b5.chunk.js.map