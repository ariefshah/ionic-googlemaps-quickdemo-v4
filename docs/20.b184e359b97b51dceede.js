(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{kEHw:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("tBOM"),a=(t("OO+k"),function(n,l,t,u){return new(t||(t=Promise))(function(o,a){function e(n){try{i(u.next(n))}catch(l){a(l)}}function r(n){try{i(u.throw(n))}catch(l){a(l)}}function i(n){n.done?o(n.value):new t(function(l){l(n.value)}).then(e,r)}i((u=u.apply(n,l||[])).next())})}),e=function(){function n(n){this.platform=n}return n.prototype.ngOnInit=function(){return a(this,void 0,void 0,function(){return function(n,l){var t,u,o,a,e={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,u&&(o=2&a[0]?u.return:a[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,a[1])).done)return o;switch(u=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return e.label++,{value:a[1],done:!1};case 5:e.label++,u=a[1],a=[0];continue;case 7:a=e.ops.pop(),e.trys.pop();continue;default:if(!(o=(o=e.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){e=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){e.label=a[1];break}if(6===a[0]&&e.label<o[1]){e.label=o[1],o=a;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(a);break}o[2]&&e.ops.pop(),e.trys.pop();continue}a=l.call(n,e)}catch(r){a=[6,r],u=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){var n=this,l=new o.a([{position:{lat:41.79883,lng:140.75675},iconData:"./assets/imgs/Number-1-icon.png"},{position:{lat:41.799240000000005,lng:140.75875000000002},iconData:"https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-2-icon.png"},{position:{lat:41.797650000000004,lng:140.75905},iconData:{url:"https://mapsplugin.github.io/ionic-googlemaps-quickdemo-v4/assets/imgs/Number-3-icon.png",size:{width:24,height:24}}},{position:{lat:41.79637,lng:140.76018000000002},title:"4",iconData:"blue"},{position:{lat:41.79567,lng:140.75845},title:"5",iconData:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACVUlEQVRIS8WWjVXCMBRGwwTqBMIEuAG4ARuIE6gTKBOgEyAT4AbABjKBMIE/C+h3m6S2pWlJ8BzfOTkpad6770teEzom3bZy/VbrpYTopDjJZ6w2c77X6p9j46SCUXvuYDxHq04BZ2rPHXa3y/DRqlPAmdqZW+hrkMZEq44F52q3oGTdrjEpqmPBudoxKVBVKqsU1THgPbW+klNUt4GHCn6idqEGuMveerUeXFGtNTCvah9qaz+n2gMmKMGBnLrfjPFcMirZ7231XUF19RUJkIhPZqXnT8AM9Osy62v0VPihUqIfjWwx1RkJvbxIpjArhabfbEJ6zQYwysiiT3CW8kJ6Q4BgqMALEnqVNAqQZGSkM/R7nMOBLhZ/B/ZQeg9V/1EsrpLy5dIqP8aAXV6WlQIlZrWq/wzeBK0DM3Y0vA0aAh8FPwTaBC7B2W8+qUOMT4l9dYUUrJK2k4tCOHl7O7zK+Xx69nbWU/iebgKz1+9E+OYPToR1fqOe+SquujeBWdzlYGBPohhjW9b2lGbRa72bwLdyml5d2auvaPyeTOzIw4MxzCkal8h8no3cqT3WJd0ExuFmOjXmlhRIXbnfKZQ7hfJ4HDTM8wVIMi6xJ01y3mV8E5glGlDRGIEKS75DrAtFn/0DA3x/b0ddZbPgGt23JnBW0agpKPzUGCvhoT4iv1HG9Zodtc6HGBTYnoXAXc3UR5SbBwK1d8y+8RUAzxNwU2orOwQeyolF/lLT7mUqQ8BqCj4Bt+j1lR0Cs3Sopt8GFLYNF/2JU7K2k6stePL7fwP/AER2xy+mY1/QAAAAAElFTkSuQmCC"}]),t=l.map(function(n,l){return console.log(n),n.position});this.map=o.c.create("map_canvas",{camera:{target:t}}),l.forEach(function(l){l.disableAutoPan=!0;var t=n.map.addMarkerSync(l);t.on(o.e.MARKER_CLICK).subscribe(n.onMarkerClick),t.on(o.e.INFO_CLICK).subscribe(n.onMarkerClick)})},n.prototype.onMarkerClick=function(n){var l=n[1],t=l.get("iconData");l.setIcon(t)},n}(),r=function(){return function(){}}(),i=t("pMnS"),c=t("ra/t"),b=t("ntG5"),p=t("YxxD"),s=u.nb({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:90%}"]],data:{}});function h(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,10,"ion-header",[],null,null,null,c.u,c.e)),u.ob(1,49152,null,0,b.w,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,c.F,c.p)),u.ob(3,49152,null,0,b.vb,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.s,c.c)),u.ob(5,49152,null,0,b.g,[],null,null),(n()(),u.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.A,c.l)),u.ob(7,49152,null,0,b.M,[u.h,u.k],null,null),(n()(),u.pb(8,0,null,0,2,"ion-title",[],null,null,null,c.E,c.o)),u.ob(9,49152,null,0,b.tb,[u.h,u.k],null,null),(n()(),u.Db(-1,0,[" marker "])),(n()(),u.pb(11,0,null,null,6,"ion-content",[["padding",""]],null,null,null,c.t,c.d)),u.ob(12,49152,null,0,b.p,[u.h,u.k],null,null),(n()(),u.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/marker/marker.page.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),u.Db(-1,null,["[source code]"])),(n()(),u.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.Db(-1,null,["Click on markers!"])),(n()(),u.pb(17,0,null,0,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}function f(n){return u.Eb(0,[(n()(),u.pb(0,0,null,null,1,"app-marker",[],null,null,null,h,s)),u.ob(1,114688,null,0,e,[p.a],null,null)],function(n,l){n(l,1,0)},null)}var g=u.lb("app-marker",e,f,{},{},[]),m=t("Ip0R"),d=t("gIcY"),w=t("95zI"),k=t("9opb"),A=t("apKv"),v=t("B4/3"),y=t("ZYCi");t.d(l,"MarkerPageModuleNgFactory",function(){return M});var M=u.mb(r,[],function(n){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,g]],[3,u.j],u.x]),u.wb(4608,m.k,m.j,[u.u,[2,m.q]]),u.wb(4608,d.d,d.d,[]),u.wb(4608,w.a,w.a,[u.z,u.g]),u.wb(4608,k.a,k.a,[w.a,u.j,u.q]),u.wb(4608,A.a,A.a,[w.a,u.j,u.q]),u.wb(1073742336,m.b,m.b,[]),u.wb(1073742336,d.c,d.c,[]),u.wb(1073742336,d.a,d.a,[]),u.wb(1073742336,v.a,v.a,[]),u.wb(1073742336,y.o,y.o,[[2,y.u],[2,y.m]]),u.wb(1073742336,r,r,[]),u.wb(1024,y.k,function(){return[[{path:"",component:e}]]},[])])})}}]);