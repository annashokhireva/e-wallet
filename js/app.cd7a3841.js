(function(r){function t(t){for(var a,i,s=t[0],o=t[1],d=t[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a]);l&&l(t);while(v.length)v.shift()();return c.push.apply(c,d||[]),e()}function e(){for(var r,t=0;t<c.length;t++){for(var e=c[t],a=!0,s=1;s<e.length;s++){var o=e[s];0!==n[o]&&(a=!1)}a&&(c.splice(t--,1),r=i(i.s=e[0]))}return r}var a={},n={app:0},c=[];function i(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=a,i.d=function(r,t,e){i.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:e})},i.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},i.t=function(r,t){if(1&t&&(r=i(r)),8&t)return r;if(4&t&&"object"===typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var a in r)i.d(e,a,function(t){return r[t]}.bind(null,a));return e},i.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return i.d(t,"a",t),t},i.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},i.p="/e-wallet/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=o;c.push([0,"chunk-vendors"]),e()})({0:function(r,t,e){r.exports=e("56d7")},"0496":function(r,t,e){},"18e7":function(r,t,e){r.exports=e.p+"img/chip-light.5bf3177c.svg"},"26ca":function(r,t,e){r.exports=e.p+"img/bitcoin.6d450848.svg"},"4e13":function(r,t,e){},"533a":function(r,t,e){"use strict";e("bf71")},5492:function(r,t,e){r.exports=e.p+"img/chip-dark.fc147077.svg"},"562b":function(r,t,e){},"56d7":function(r,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],i={},s=i,o=(e("5c0b"),e("ea6f"),e("2877")),d=Object(o["a"])(s,n,c,!1,null,"0a362fc8",null),l=d.exports,u=e("8c4f"),v=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("top-header",{attrs:{header:"E-WALLET"}}),r.noCards?e("h2",[r._v(" Your wallet is empty. Please add a new card. ")]):[r.primaryCard?e("credit-card",{attrs:{card:r.primaryCard,msg:"active card","show-delete":!0}}):r._e(),e("card-stack",{staticClass:"main-card",attrs:{cards:r.cardStack}})],e("button",{staticClass:"light"},[e("h3",[e("router-link",{attrs:{to:"/add-card"}},[r._v(" add a new card ")])],1)])],2)},p=[],f=(e("4de4"),function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",r._l(r.cards,(function(r){return e("credit-card",{key:r.id,staticClass:"single-card",attrs:{card:r}})})),1)}),h=[],m=function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("div",{staticClass:"card-container"},[a("h2",[r._v(" "+r._s(r.msg)+" ")]),a("div",{staticClass:"card"},[r.showDelete?a("span",{on:{click:r.deleteCard}},[a("img",{staticClass:"delete",attrs:{src:e("d739"),alt:"X",width:"40"}})]):r._e(),a("div",{staticClass:"card-inner"},[a("transition-group",{attrs:{name:"flip"}},[r.showBack?a("div",{key:"back",staticClass:"card-back",style:{backgroundColor:r.cardBackground}},[a("div",{staticClass:"stripe"}),a("div",{staticClass:"cvv-field"},[a("p",{staticClass:"signature"},[r._v(r._s(r.card.cardholder))]),a("div",{staticClass:"cvv"},[r._v(r._s(r.card.cvv||"cvv"))])])]):a("div",{key:"front",staticClass:"card-front",style:{backgroundColor:r.cardBackground},on:{click:r.primaryCard}},[a("div",{staticClass:"top-part"},[r.cardVendor.length<=0?a("img",{attrs:{src:e("5492"),alt:"chip"}}):a("img",{attrs:{src:e("18e7"),alt:"chip"}}),"Bitcoin Inc"===r.card.vendor?a("img",{staticClass:"icon",attrs:{src:e("26ca"),height:"50",alt:""}}):r._e(),"Ninja Bank"===r.card.vendor?a("img",{staticClass:"icon",attrs:{src:e("6fbc"),height:"50",alt:""}}):r._e(),"Block Chain Inc"===r.card.vendor?a("img",{staticClass:"icon",attrs:{src:e("5b0f"),height:"50",alt:""}}):r._e(),"Evil Corp"===r.card.vendor?a("img",{staticClass:"icon",attrs:{src:e("95db"),height:"50",alt:""}}):r._e()]),a("div",{staticClass:"card-number",class:r.textColor},[a("p",[r._v(" "+r._s(r.splitDigits()||"XXXX XXXX XXXX XXXX")+" ")])]),a("div",{staticClass:"details",class:r.textColor},[a("div",{staticClass:"cardholder"},[a("h4",[r._v("cardholder name")]),a("p",[r._v(" "+r._s(r.cardholder||"firstname lastname")+" ")])]),a("div",{staticClass:"expiry-date"},[a("h4",[r._v("valid thru")]),a("p",[r._v(" "+r._s(r.month||"MM")+"/"+r._s(r.year||"YY")+" ")])])])])])],1)])])},g=[],b=(e("4160"),e("c975"),e("fb6a"),e("a434"),e("0d03"),e("d3b7"),e("ac1f"),e("25f0"),e("5319"),e("159b"),a["a"].observable({cards:[]}));if(localStorage){var C=localStorage.getItem("creditCards");C&&(b.cards=JSON.parse(C))}var y=b,_={data:function(){return{colors:{light:"light",dark:"dark"}}},props:{msg:String,showBack:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!1},card:{type:Object,required:!0}},computed:{cardVendor:function(){return this.card.vendor},cardNumber:function(){return this.card.number},cardholder:function(){return this.card.cardholder},month:function(){return this.card.month},year:function(){return this.card.year.toString().slice(2)},cardBackground:function(){var r="rgb(204, 204, 204)";return"Bitcoin Inc"===this.card.vendor?r="rgb(235, 182, 69)":"Ninja Bank"===this.card.vendor?r="rgb(54, 50, 50)":"Block Chain Inc"===this.card.vendor?r="rgb(118, 65, 204)":"Evil Corp"===this.card.vendor&&(r="rgb(197, 36, 76)"),r},textColor:function(){var r;return r="Bitcoin Inc"!=this.card.vendor&&""!=this.card.vendor?this.colors.light:this.colors.dark,r}},methods:{splitDigits:function(){var r=this.cardNumber,t=r.replace(/(\d{4}(?!\s))/g,"$1 ");return t},primaryCard:function(){y.cards.forEach((function(r){return r.primary=!1})),this.card.primary=!0},deleteCard:function(){var r=confirm("Are you sure you want to delete ".concat(this.card.vendor," card from your wallet?"));if(!r)return!1;var t=y.cards.indexOf(this.card);y.cards.splice(t,1)}}},k=_,w=(e("cab7"),Object(o["a"])(k,m,g,!1,null,"a74da132",null)),x=w.exports,X={components:{CreditCard:x},props:{cards:{type:Array,required:!0}}},O=X,j=(e("7e96"),Object(o["a"])(O,f,h,!1,null,"68cb586e",null)),B=j.exports,S=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("h1",[r._v(" "+r._s(r.header)+" ")])},N=[],E={props:{header:{type:String,requierd:!0}}},$=E,P=Object(o["a"])($,S,N,!1,null,"52e49e12",null),A=P.exports,D={components:{CardStack:B,TopHeader:A,CreditCard:x},computed:{primaryCard:function(){var r=y.cards.filter((function(r){return r.primary}));return r.length?r[0]:null},cardStack:function(){return y.cards.filter((function(r){return!r.primary}))},noCards:function(){return!this.primaryCard&&!this.cardStack.length}}},I=D,q=(e("a6d7"),Object(o["a"])(I,v,p,!1,null,"672b313c",null)),M=q.exports,T=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("top-header",{attrs:{header:"ADD A NEW BANK CARD"}}),e("card-form"),e("button",{staticClass:"light"},[e("h3",[e("router-link",{attrs:{to:"/"}},[r._v(" cancel ")])],1)])],1)},V=[],F=function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("div",{staticClass:"form-container"},[a("div",{on:{mouseenter:function(t){r.showBack=!0},mouseleave:function(t){r.showBack=!1}}},[a("credit-card",{attrs:{msg:"new card",card:r.card,"show-back":r.showBack}})],1),a("form",{on:{submit:function(t){return t.preventDefault(),r.onSubmit(t)}}},[a("div",{staticClass:"field-container"},[a("label",{attrs:{for:"vendors"}},[r._v("vendor")]),a("select",{directives:[{name:"model",rawName:"v-model",value:r.card.vendor,expression:"card.vendor"}],staticClass:"options",attrs:{id:"Vendors"},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(r){return r.selected})).map((function(r){var t="_value"in r?r._value:r.value;return t}));r.$set(r.card,"vendor",t.target.multiple?e:e[0])}}},r._l(r.vendors,(function(t,e){return a("option",{key:e,domProps:{value:t}},[r._v(" "+r._s(t)+" ")])})),0)]),a("div",{staticClass:"field-container"},[a("label",{attrs:{for:r.card.id}},[r._v("card number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:r.card.number,expression:"card.number"}],attrs:{id:r.card.id,value:"card.number",autocomplete:"off",pattern:"[0-9]*",inputmode:"numeric",maxlength:"16",minlength:"16",placeholder:"XXXX XXXX XXXX XXXX"},domProps:{value:r.card.number},on:{keypress:r.onlyNumber,input:function(t){t.target.composing||r.$set(r.card,"number",t.target.value)}}})]),a("div",{staticClass:"field-container"},[a("label",{attrs:{for:r.card.cardholder}},[r._v("name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:r.card.cardholder,expression:"card.cardholder"}],attrs:{id:r.card.cardholder,maxlength:"20",type:"text",placeholder:"FIRSTNAME LASTNAME"},domProps:{value:r.card.cardholder},on:{input:function(t){t.target.composing||r.$set(r.card,"cardholder",t.target.value)}}})]),a("div",{staticClass:"validation"},[a("div",{staticClass:"field-container"},[a("label",{attrs:{for:r.card.month}},[r._v("month")]),a("select",{directives:[{name:"model",rawName:"v-model",value:r.card.month,expression:"card.month"}],staticClass:"small options",attrs:{name:"month",id:r.card.month},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(r){return r.selected})).map((function(r){var t="_value"in r?r._value:r.value;return t}));r.$set(r.card,"month",t.target.multiple?e:e[0])}}},r._l(r.months,(function(t,e){return a("option",{key:e,domProps:{value:t}},[r._v(" "+r._s(t)+" ")])})),0)]),a("div",{staticClass:"field-container"},[a("label",{attrs:{for:r.card.year}},[r._v("year")]),a("select",{directives:[{name:"model",rawName:"v-model",value:r.card.year,expression:"card.year"}],staticClass:"small options",attrs:{id:r.card.year},on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,(function(r){return r.selected})).map((function(r){var t="_value"in r?r._value:r.value;return t}));r.$set(r.card,"year",t.target.multiple?e:e[0])}}},r._l(r.years,(function(t,e){return a("option",{key:e,domProps:{value:t}},[r._v(" "+r._s(t)+" ")])})),0)]),a("div",{staticClass:"field-container"},[a("label",{attrs:{for:r.card.cvv}},[r._v("cvv")]),a("input",{directives:[{name:"model",rawName:"v-model",value:r.card.cvv,expression:"card.cvv"}],staticClass:"small",attrs:{id:r.card.cvv,maxlength:"3",minlength:"3",autocomplete:"off",inputmode:"numeric"},domProps:{value:r.card.cvv},on:{keypress:r.onlyNumber,input:function(t){t.target.composing||r.$set(r.card,"cvv",t.target.value)}}})])]),r.errors.length?a("div",{staticClass:"error-box"},[a("img",{attrs:{src:e("89ca"),alt:"!",width:"50"}}),a("ul",r._l(r.errors,(function(t,e){return a("li",{key:e,staticClass:"error-message"},[r._v(r._s(t))])})),0)]):r._e(),r._m(0)])])},J=[function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("button",{staticClass:"dark",attrs:{type:"submit"}},[e("h3",[r._v("add card")])])}],Y=e("11c1"),L={components:{CreditCard:x},data:function(){return{months:["01","02","03","04","05","06","07","08","09","10","11","12"],years:["2021","2022","2023","2024","2025","2026","2027"],vendors:["Bitcoin Inc","Ninja Bank","Block Chain Inc","Evil Corp"],errors:[],card:this.cardDefinition(),showBack:!1}},methods:{onSubmit:function(){this.checkForm()&&(this.addCard(),this.$router.push({name:"activeCards"}))},onlyNumber:function(r){var t=r.keyCode?r.keyCode:r.which;(t<48||t>57)&&r.preventDefault()},cardDefinition:function(){return{cardholder:"",vendor:"",number:"",month:"",year:"",cvv:"",primary:!1}},addCard:function(){this.card.id=Object(Y["v4"])(),y.cards.unshift(this.card),localStorage.setItem("creditCards",JSON.stringify(y.cards)),this.card=this.cardDefinition()},checkForm:function(){return this.errors=[],this.card.vendor||this.errors.push("Vendor required."),this.card.number||this.errors.push("Card number required."),this.card.cardholder||this.errors.push("Full name required."),this.card.month||this.errors.push("Month required."),this.card.year||this.errors.push("Year required."),this.card.cvv||this.errors.push("CVV required."),!this.errors.length}}},H=L,R=(e("da89"),Object(o["a"])(H,F,J,!1,null,"1d990ff7",null)),W=R.exports,K={components:{TopHeader:A,CardForm:W}},z=K,G=(e("533a"),Object(o["a"])(z,T,V,!1,null,"030efff6",null)),Q=G.exports;a["a"].use(u["a"]);var U=[{path:"/",name:"activeCards",component:M},{path:"/add-card",name:"addCard",component:Q}],Z=new u["a"]({routes:U}),rr=Z,tr=e("9612");a["a"].use(tr["a"]),a["a"].config.productionTip=!1,new a["a"]({router:rr,render:function(r){return r(l)}}).$mount("#app")},"5b0f":function(r,t,e){r.exports=e.p+"img/vendor-blockchain.a2171465.svg"},"5c0b":function(r,t,e){"use strict";e("9c0c")},"6fbc":function(r,t,e){r.exports=e.p+"img/vendor-ninja.046254ea.svg"},"7e96":function(r,t,e){"use strict";e("e104")},"89ca":function(r,t,e){r.exports=e.p+"img/exclamation.86b6755b.svg"},"95db":function(r,t,e){r.exports=e.p+"img/vendor-evil.1c4415c7.svg"},"9c0c":function(r,t,e){},"9d72":function(r,t,e){},a6d7:function(r,t,e){"use strict";e("0496")},bf71:function(r,t,e){},cab7:function(r,t,e){"use strict";e("4e13")},d739:function(r,t,e){r.exports=e.p+"img/delete.eceeec15.svg"},da89:function(r,t,e){"use strict";e("9d72")},e104:function(r,t,e){},ea6f:function(r,t,e){"use strict";e("562b")}});
//# sourceMappingURL=app.cd7a3841.js.map