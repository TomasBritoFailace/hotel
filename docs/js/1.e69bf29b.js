(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"hhh lpR fff"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[e("q-toolbar",[e("q-toolbar-title",[e("q-avatar",[e("img",{attrs:{src:"https://i.imgur.com/KkFZ2jU.png"}})]),t._v("\n        Hotel Yatay\n\n      ")],1),t.admin?e("div",[e("q-btn",{attrs:{color:"primary",label:"Admin","q-route-tab":"",to:"/admin"}})],1):t._e(),t.loguin?e("div",[e("div",[e("q-btn",{attrs:{label:t.username,color:"primary"},on:{click:function(a){t.medium=!0}}}),e("q-dialog",{model:{value:t.medium,callback:function(a){t.medium=a},expression:"medium"}},[e("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Cerrar sesión")])]),e("q-card-section",{staticClass:"q-pt-none"},[t._v("\n                      ¿Quiere cerrar la sesión?\n                    ")]),e("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[e("q-btn",{attrs:{flat:"",label:"OK"},on:{click:t.logout}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar"}})],1)],1)],1)],1)]):e("div",[e("q-btn",{attrs:{color:"primary",label:"Iniciar sesión","q-route-tab":"",to:"/login"}})],1)],1),e("q-tabs",{attrs:{align:"center"}},[e("q-route-tab",{attrs:{to:"/",label:"Habitaciones"}}),e("q-route-tab",{attrs:{to:"/reservar",label:"Reservar"}})],1)],1),e("q-page-container",[e("router-view")],1),e("q-footer",{staticClass:"bg-grey-8 text-white",attrs:{elevated:""}},[e("q-toolbar",[e("q-toolbar-title",{staticClass:"text-center"},[e("q-avatar",{staticClass:"q-pt-xs"},[e("img",{attrs:{src:"https://i.imgur.com/KkFZ2jU.png"}})]),e("div",{staticClass:"h6"},[t._v("Hotel Yatay")]),e("h6",{staticClass:"footerText q-ma-none",staticStyle:{"font-size":"12px"}},[t._v("Yatay 240, CABA, Argentina")]),e("h6",{staticClass:"footerText q-ma-none q-pb-sm",staticStyle:{"font-size":"12px"}},[t._v("Tel. 4958-9000 ")])],1)],1)],1)],1)},i=[],s={data:function(){return{sizes:["lg"],medium:!1}},methods:{logout:function(){this.$store.commit("example/login",{username:""}),this.$router.push("/")}},computed:{loguin:function(){return this.$store.getters["example/loggedIn"]},admin:function(){return this.$store.getters["example/isAdmin"]},username:function(){return"Cerrar sesión"}}},o=s,n=e("2877"),l=e("4d5a"),c=e("e359"),u=e("65c6"),m=e("6ac5"),d=e("cb32"),b=e("9c40"),p=e("7867"),g=e("24e8"),q=e("f09f"),v=e("a370"),h=e("4b7e"),f=e("429b"),C=e("09e3"),x=e("7ff0"),w=e("7f67"),Q=e("eebe"),y=e.n(Q),_=Object(n["a"])(o,r,i,!1,null,"4c80a060",null);a["default"]=_.exports;y()(_,"components",{QLayout:l["a"],QHeader:c["a"],QToolbar:u["a"],QToolbarTitle:m["a"],QAvatar:d["a"],QBtn:b["a"],QRouteTab:p["a"],QDialog:g["a"],QCard:q["a"],QCardSection:v["a"],QCardActions:h["a"],QTabs:f["a"],QPageContainer:C["a"],QFooter:x["a"]}),y()(_,"directives",{ClosePopup:w["a"]})}}]);