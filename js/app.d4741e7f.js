(function(t){function e(e){for(var s,r,c=e[0],l=e[1],o=e[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);_&&_(e);while(u.length)u.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/beer-test-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var _=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"3c9d":function(t,e,a){},"3e70":function(t,e,a){"use strict";a("5b75")},"51ac":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main-component")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-component"},[a("beer-card"),a("h1",{staticClass:"main-component__title"},[t._v("А не выпить ли мне пива?")]),a("man-card")],1)},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"beer-card"},[s("img",{staticClass:"beer-card__image",attrs:{src:a("c684")}}),s("div",{staticClass:"beer-card__info"},[s("ul",{staticClass:"beer-card__list"},[s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Название:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.name))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Компания:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.brand))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Стиль:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.style))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Cахар:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.blg))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Алкоголь:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.alcohol))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Хмель:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.hop))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Солод:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.beer.malts))])]),s("li",{staticClass:"beer-card__list-item"},[s("span",{staticClass:"beer-card__list-item-title"},[t._v("Дрожжи:")]),s("span",{staticClass:"beer-card__list-item-value"},[t._v(t._s(t.getYeast))])])]),s("button",{staticClass:"beer-card__button",attrs:{type:"button",disabled:t.isLoading},on:{click:t.onClick}},[t._v(" Другое ")])]),s("img",{staticClass:"beer-card__image",attrs:{src:a("c684")}})])},o=[],_=(a("498a"),a("ac1f"),a("1276"),a("d4ec")),d=a("bee2"),u=(a("d3b7"),function(){function t(e){var a=e.baseUrl;Object(_["a"])(this,t),this._baseUrl=a}return Object(d["a"])(t,[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getData",value:function(){return fetch("".concat(this._baseUrl)).then(this._checkResponse)}}]),t}()),m={baseUrl:"https://random-data-api.com/api/beer/random_beer"},p={baseUrl:"https://random-data-api.com/api/users/random_user"},v=new u(m),b=new u(p),f={name:"BeerCard",data:function(){return{beer:{},isLoading:!1}},methods:{onClick:function(){this.getBeer()},getBeer:function(){var t=this;this.isLoading=!0,v.getData().then((function(e){t.beer=e,t.isLoading=!1})).catch((function(e){console.log("Error: "+e),t.isLoading=!1}))}},computed:{getYeast:function(){var t;return null===(t=this.beer.yeast)||void 0===t?void 0:t.split("-")[1].trim()}},mounted:function(){this.getBeer()}},C=f,h=(a("8f8b"),a("2877")),g=Object(h["a"])(C,l,o,!1,null,"54099916",null),y=g.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("div",{staticClass:"man-card"},[a("div",{staticClass:"man-card__info"},[a("ul",{staticClass:"man-card__list"},[a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Имя:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.getFullname))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Пол:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.man.gender))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Адрес:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.getAddress))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Дата рождения:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.getBirthdayDate))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Email:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.man.email))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Телефон:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.man.phone_number))])]),a("li",{staticClass:"man-card__list-item"},[a("span",{staticClass:"man-card__list-item-title"},[t._v("Должность:")]),a("span",{staticClass:"man-card__list-item-value"},[t._v(t._s(t.man.employment?t.man.employment.title:"none"))])])])]),a("img",{staticClass:"man-card__image",attrs:{src:t.man.avatar}})]):t._e()},O=[],w=(a("99af"),{name:"ManCard",data:function(){return{man:{},isLoading:!1}},methods:{getUser:function(){var t=this;b.getData().then((function(e){t.man=e,t.isLoading=!0})).catch((function(e){t.isLoading=!1,console.log("Error: "+e)}))}},computed:{getFullname:function(){return"".concat(this.man.first_name," ").concat(this.man.last_name)},getAddress:function(){var t,e,a;return"".concat(null===(t=this.man.address)||void 0===t?void 0:t.state,", ").concat(null===(e=this.man.address)||void 0===e?void 0:e.city,", ").concat(null===(a=this.man.address)||void 0===a?void 0:a.street_address)},getBirthdayDate:function(){var t={year:"numeric",month:"long",day:"numeric"},e="ru-RU";return new Date(this.man.date_of_birth).toLocaleDateString(e,t)}},mounted:function(){this.getUser()}}),k=w,x=(a("3e70"),Object(h["a"])(k,j,O,!1,null,"c957e15c",null)),L=x.exports,M={name:"MainComponent",components:{BeerCard:y,ManCard:L}},P=M,U=(a("d429"),Object(h["a"])(P,r,c,!1,null,"adab2922",null)),B=U.exports,D={name:"App",components:{MainComponent:B}},E=D,S=(a("034f"),Object(h["a"])(E,i,n,!1,null,null,null)),$=S.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t($)}}).$mount("#app")},"5b75":function(t,e,a){},"85ec":function(t,e,a){},"8f8b":function(t,e,a){"use strict";a("3c9d")},c684:function(t,e,a){t.exports=a.p+"img/beer-image.cb6d564d.png"},d429:function(t,e,a){"use strict";a("51ac")}});
//# sourceMappingURL=app.d4741e7f.js.map