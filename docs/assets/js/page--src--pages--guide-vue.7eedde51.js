(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4vGZ":function(e,t,s){"use strict";s.r(t);s("pjDv"),s("yXV3"),s("oVuX"),s("+2oP"),s("rB9j"),s("PKPk"),s("UxlC"),s("hByQ"),s("SYor");var n=s("uFwe"),a={metaInfo:function(){return{title:"Guide - Pandasite",meta:[this.social("description","Guide will give you an overview of the language. Set up a Panda development environment and write yuor first app.")]}},mixins:[{data:()=>({searchTerm:""}),computed:{searchResults(){const e=this.searchTerm;return e.length<3?[]:this.$search.search({query:e,limit:8})}},watch:{$route(e,t){this.searchTerm=""}}}],data:function(){return{searchTerm:""}},computed:{searchResults:function(){var e=this.searchTerm;return e.length<1?[]:this.$search.search({query:e,limit:5})}},methods:{normalize:function(e){return e.toLowerCase().replace(" ","-")},getResult:function(e){var t,s=this.searchTerm.trim().toLowerCase(),a=Object(n.a)(this.searchResults);try{for(a.s();!(t=a.n()).done;){if(t.value.id==e.id){for(var r=Array.from(e.content.toLowerCase()),i=[],l=0;l<r.length;l++){var o=r[l];0==i.length?"<"==o&&(i.push("<"),r[l]=" "):(r[l]=" ",">"==o&&i.pop())}r=r.join("");for(var d=e.content,c=-1,u=0;-1!==(c=r.indexOf(s,c));)if(" "!=r[c]){var h=d.substr(c+u,s.length),m='<span style="font-weight: bold; background-color: yellow;">'+h+"</span>";d=d.slice(0,c+u)+m+d.slice(c+u+h.length),u+=m.length-h.length,c+=h.length}else c+=s.length;return{id:e.id,title:e.title,content:d}}}}catch(e){a.e(e)}finally{a.f()}return null}}},r=(s("uJPC"),s("KHd+")),i=null,l=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"guide flex"},[s("div",{staticClass:"panel bg-grey justify-end hidden md_flex"},[s("div",{staticClass:"panel-right panel-width"},[s("div",{staticClass:"panel-content flex flex-col items-center md_items-start overflow-auto panel-width pl-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"px-2 py-1 md_mt-14 mb-3 input",attrs:{id:"search",type:"text",placeholder:"Search"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),s("div",{staticClass:"list pb-16"},e._l(e.$page.allGuidePost.edges,(function(t){return s("div",{key:t.node.id,staticClass:"md_pl-2 w-full"},[s("a",{attrs:{href:"#"+t.node.id}},[t.node.id%100==0?s("p",{staticClass:"mt-4 text-sbase font-bold uppercase"},[e._v(e._s(t.node.title))]):s("p",{staticClass:"md_ml-4 mt-2 text-sbase"},[e._v(e._s(t.node.title))])])])})),0)])])]),s("div",{staticClass:"guide-content markdown flex-1 p-6 md_p-24 pt-7 justify-center mb-40 overflow-x-auto"},[""!=e.searchTerm&&0==e.searchResults.length?s("div",[s("h1",[e._v("Not Found")])]):e._l(e.$page.allGuidePost.edges,(function(t){return s("div",{key:t.node.id},[""==e.searchTerm?s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{id:t.node.id},domProps:{innerHTML:e._s(t.node.content)}}):e._e(),e.getResult(t.node)?s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],attrs:{id:e.getResult(t.node).id},domProps:{innerHTML:e._s(e.getResult(t.node).content)}}):e._e()])}))],2)])}),[],!1,null,null,null);"function"==typeof i&&i(l);t.default=l.exports},"87Ur":function(e,t,s){},uJPC:function(e,t,s){"use strict";var n=s("87Ur");s.n(n).a}}]);