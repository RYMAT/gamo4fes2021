function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{h1OB:function(n,t,e){"use strict";e.r(t),e.d(t,"FoodPageModule",(function(){return j}));var o=e("ofXK"),c=e("tyNb"),i=e("2Vo4"),a=e("pLZG"),l=e("SLWe"),d=e("vX6Q"),g=e("fXoL"),r=e("sIEE"),s=e("jhN1"),p=e("9Wam"),h=e("oW1M"),b=e("jQpT"),m=e("qmXU"),_=e("FKr1"),f=["shopModalTemplate"];function O(n,t){if(1&n){var e=g.Ub();g.Rb(0),g.Tb(1,"article",11),g.bc("click",(function(){g.rc(e);var n=t.$implicit;return g.dc().onShowFoodModal(n)})),g.Pb(2,"div",12),g.Tb(3,"span",13),g.zc(4),g.Sb(),g.Sb(),g.Qb()}if(2&n){var o=t.$implicit;g.Bb(2),g.wc("background-image","url("+o.food_image_path+")",g.Hb),g.Bb(2),g.Ac(o.name)}}function P(n,t){1&n&&g.Pb(0,"div",14)}function C(n,t){1&n&&(g.Rb(0),g.Pb(1,"i",34),g.Pb(2,"i",35),g.zc(3," \u30a4\u30fc\u30c8\u30a4\u30f3\u30fb\u30c6\u30a4\u30af\u30a2\u30a6\u30c8OK "),g.Qb())}function u(n,t){1&n&&(g.Rb(0),g.Pb(1,"i",34),g.zc(2," \u30a4\u30fc\u30c8\u30a4\u30f3OK "),g.Qb())}function M(n,t){1&n&&(g.Rb(0),g.Pb(1,"i",35),g.zc(2," \u30c6\u30a4\u30af\u30a2\u30a6\u30c8OK "),g.Qb())}function x(n,t){if(1&n&&(g.Tb(0,"p",36),g.zc(1),g.Sb()),2&n){var e=g.dc(2);g.Bb(1),g.Bc(" ",null==e.selectedShop$||null==e.selectedShop$.value?null:e.selectedShop$.value.shop_description," ")}}function v(n,t){if(1&n&&(g.Tb(0,"a",37),g.Pb(1,"i",38),g.Sb()),2&n){var e=g.dc(2);g.ic("href",null==e.selectedShop$||null==e.selectedShop$.value?null:e.selectedShop$.value.web_url,g.tc)}}function S(n,t){if(1&n&&(g.Tb(0,"a",37),g.Pb(1,"i",39),g.Sb()),2&n){var e=g.dc(2);g.ic("href",null==e.selectedShop$||null==e.selectedShop$.value?null:e.selectedShop$.value.instagram_url,g.tc)}}function y(n,t){if(1&n&&(g.Tb(0,"a",37),g.Pb(1,"i",40),g.Sb()),2&n){var e=g.dc(2);g.ic("href",null==e.selectedShop$||null==e.selectedShop$.value?null:e.selectedShop$.value.twitter_url,g.tc)}}function w(n,t){if(1&n&&(g.Tb(0,"a",37),g.Pb(1,"i",41),g.Sb()),2&n){var e=g.dc(2);g.ic("href",null==e.selectedShop$||null==e.selectedShop$.value?null:e.selectedShop$.value.facebook_url,g.tc)}}function k(n,t){if(1&n){var e=g.Ub();g.Tb(0,"div",15),g.Tb(1,"div",16),g.Tb(2,"button",17),g.bc("click",(function(){return g.rc(e),g.dc().onModalClose()})),g.Pb(3,"span",18),g.Sb(),g.Sb(),g.Tb(4,"div",19),g.Tb(5,"div",20),g.Pb(6,"figure",21),g.Sb(),g.Tb(7,"div",22),g.Tb(8,"div",23),g.zc(9),g.Sb(),g.Tb(10,"div",24),g.Tb(11,"span",25),g.xc(12,C,4,0,"ng-container",26),g.xc(13,u,3,0,"ng-container",26),g.xc(14,M,3,0,"ng-container",26),g.Sb(),g.Tb(15,"address",27),g.Tb(16,"a",28),g.Pb(17,"i",29),g.zc(18),g.Sb(),g.Sb(),g.Sb(),g.Tb(19,"div",30),g.xc(20,x,2,1,"p",31),g.Sb(),g.Tb(21,"div",32),g.xc(22,v,2,1,"a",33),g.xc(23,S,2,1,"a",33),g.xc(24,y,2,1,"a",33),g.xc(25,w,2,1,"a",33),g.Sb(),g.Sb(),g.Sb(),g.Sb()}if(2&n){var o=g.dc();g.Bb(6),g.wc("background-image","url("+(null==o.selectedShop$?null:o.selectedShop$.value.food_image_path)+")",g.Hb),g.Bb(3),g.Bc(" ",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.name," "),g.Bb(3),g.ic("ngIf",(null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.is_eat_in)&&(null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.is_take_out)),g.Bb(1),g.ic("ngIf",(null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.is_eat_in)&&!(null!=o.selectedShop$&&null!=o.selectedShop$.value&&o.selectedShop$.value.is_take_out)),g.Bb(1),g.ic("ngIf",!(null!=o.selectedShop$&&null!=o.selectedShop$.value&&o.selectedShop$.value.is_eat_in)&&(null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.is_take_out)),g.Bb(2),g.ic("href",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.google_map_url,g.tc),g.Bb(2),g.Bc(" ",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.address," "),g.Bb(2),g.ic("ngIf",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.shop_description),g.Bb(2),g.ic("ngIf",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.web_url),g.Bb(1),g.ic("ngIf",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.instagram_url),g.Bb(1),g.ic("ngIf",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.twitter_url),g.Bb(1),g.ic("ngIf",null==o.selectedShop$||null==o.selectedShop$.value?null:o.selectedShop$.value.facebook_url)}}var $,T,z=c.e.forChild([{path:"",component:($=function(){function n(t,e,o,c,a,l,d,g){_classCallCheck(this,n),this.jsonConvertService=t,this.titleService=e,this.sanitizer=o,this.state=c,this.el=a,this.renderer=l,this.document=d,this.modalService=g,this.selectedShop$=new i.a(null)}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.fetchShops(),this.selectedShop$.pipe(Object(a.a)((function(n){return!!n}))).subscribe((function(){n.openModal()}));var t=l.b.FOOD;this.titleService.setTitle("".concat(t.data.description," | ").concat(l.a.PROJECT_TITLE));var e=this.el.nativeElement.querySelectorAll(".bg-image");e?d(e,{background:!0}).on("done",(function(){n.state.isLoaded.next(!0),n.document.body.scrollTop=0})):this.state.isLoaded.next(!0)}},{key:"ngOnDestroy",value:function(){this.selectedShop$.closed||this.selectedShop$.unsubscribe()}},{key:"onShowFoodModal",value:function(n){this.selectedShop$.next(n)}},{key:"fetchShops",value:function(){var n=this;this.jsonConvertService.fetchShops().subscribe((function(t){return n.shops=t}))}},{key:"openModal",value:function(){this.modalRef=this.modalService.show(this.modalTemplate,{class:"modal-lg"})}},{key:"onModalClose",value:function(){this.modalRef.hide()}}]),n}(),$.\u0275fac=function(n){return new(n||$)(g.Ob(r.a),g.Ob(s.d),g.Ob(s.b),g.Ob(p.a),g.Ob(g.l),g.Ob(g.E),g.Ob(o.d),g.Ob(h.a))},$.\u0275cmp=g.Ib({type:$,selectors:[["app-food-page"]],viewQuery:function(n,t){var e;1&n&&g.vc(f,!0),2&n&&g.oc(e=g.cc())&&(t.modalTemplate=e.first)},decls:15,vars:2,consts:[["id","parallax",1,"detail-page-content"],[1,"main-image","bg-image"],["data-speed-y","-20","data-offset","0",1,"title-text","parallax-el"],[1,"main-content"],[1,"heading-text"],[1,"inner-content","container"],[1,"card-content"],[4,"ngFor","ngForOf"],["class","food empty hidden-md",4,"ngIf"],[1,"app-footer"],["shopModalTemplate",""],["matRipple","",1,"food",3,"click"],[1,"food-image","bg-image"],[1,"food-name"],[1,"food","empty","hidden-md"],[1,"modal-inner"],[1,"heading-content","text-right"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"cross-mark"],[1,"modal-body"],[1,"left-content"],[1,"image-content"],[1,"right-content"],[1,"name-content"],[1,"information-content"],[1,"shop-type"],[4,"ngIf"],[1,"address"],["target","_blank",3,"href"],[1,"icomoon-map-marker-alt-solid"],[1,"description-content"],["class","description-text",4,"ngIf"],[1,"sns-link-contents"],["class","sns-link","target","_blank","rel","noreferrer",3,"href",4,"ngIf"],[1,"icomoon-utensils-solid"],[1,"icomoon-hamburger-solid"],[1,"description-text"],["target","_blank","rel","noreferrer",1,"sns-link",3,"href"],[1,"icomoon-laptop-solid"],[1,"icomoon-instagram-brands"],[1,"icomoon-twitter-brands"],[1,"icomoon-facebook-brands"]],template:function(n,t){1&n&&(g.Tb(0,"div",0),g.Tb(1,"div",1),g.Tb(2,"div",2),g.zc(3,"Food"),g.Sb(),g.Sb(),g.Tb(4,"section",3),g.Tb(5,"h2",4),g.zc(6,"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u5fdc\u63f4\u30e1\u30cb\u30e5\u30fc\u53c2\u52a0\u5e97"),g.Sb(),g.Tb(7,"div",5),g.Tb(8,"div",6),g.xc(9,O,5,3,"ng-container",7),g.xc(10,P,1,0,"div",8),g.Sb(),g.Sb(),g.Sb(),g.Pb(11,"app-footer",9),g.Sb(),g.Pb(12,"app-scroll-top-button"),g.xc(13,k,26,13,"ng-template",null,10,g.yc)),2&n&&(g.Bb(9),g.ic("ngForOf",t.shops),g.Bb(1),g.ic("ngIf",(null==t.shops?null:t.shops.length)%4==3))},directives:[o.j,o.k,b.a,m.a,_.a],styles:['.detail-page-content[_ngcontent-%COMP%]{background-color:#fafafa}.main-image[_ngcontent-%COMP%]{position:relative;height:450px;background-repeat:no-repeat;background-size:cover;background-position:50%}.main-image[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{position:absolute;height:90px;margin:auto;top:0;bottom:0;left:0;right:0;text-align:center;color:#fff;font-size:90px;font-family:Lilita One,sans-serif;letter-spacing:.2em;line-height:1}.main-content[_ngcontent-%COMP%]{padding-bottom:64px}.main-content[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]{margin:0;padding:16px 0;font-size:20px;color:#fff;text-align:center;font-family:mamelon,sans-serif;background-color:#3cbae8;background:linear-gradient(20deg,#3cbae8,#33b2d6)}.card-content[_ngcontent-%COMP%]{width:100%;margin-top:64px;padding:48px;background-color:#fff;border-radius:8px;box-shadow:0 3px 8px rgba(0,0,0,.1);text-align:center}@media screen and (max-width:992px){.main-image[_ngcontent-%COMP%]{height:300px}.main-image[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{height:65px;font-size:60px}.main-content[_ngcontent-%COMP%]{padding-bottom:64px}.main-content[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]{font-size:16px}.main-content[_ngcontent-%COMP%]   .inner-content.container[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.card-content[_ngcontent-%COMP%]{width:100%;padding:32px 0;border-radius:8px}}.modal-inner[_ngcontent-%COMP%]{width:100%}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]{padding:4px 8px}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{padding:4px;color:#333;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;background:transparent}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   .cross-mark[_ngcontent-%COMP%]{display:inline-block;width:30px;height:30px;position:relative;transform:rotate(45deg)}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   .cross-mark[_ngcontent-%COMP%]:hover{opacity:.9}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   .cross-mark[_ngcontent-%COMP%]:before{content:"";display:inline-block;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:100%;height:1px;background-color:#666}.modal-inner[_ngcontent-%COMP%]   .heading-content[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]   .cross-mark[_ngcontent-%COMP%]:after{content:"";display:inline-block;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;width:1px;height:100%;background-color:#666}.modal-body[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:50%;padding:0 24px 0 0}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{width:100%;height:400px;display:inline-block;background-size:cover;background-position:50%;background-repeat:no-repeat;border-radius:8px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{position:relative;width:50%;padding-bottom:40px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .name-content[_ngcontent-%COMP%]{font-size:26px;letter-spacing:.05em;margin-bottom:8px;padding:0 0 4px;border-bottom:1px solid #aaa;font-weight:300;font-family:Noto Sans JP,sans-serif}.modal-body[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]{position:absolute;bottom:4px;left:0;font-size:16px}.modal-body[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]   .sns-link[_ngcontent-%COMP%]{display:inline-block;text-decoration:none;color:#666;margin-right:16px}.modal-body[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]   .sns-link[_ngcontent-%COMP%]   .icomoon-laptop-solid[_ngcontent-%COMP%]{font-size:13px}.modal-body[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]   .sns-link[_ngcontent-%COMP%]:hover{opacity:.8}.modal-body[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]{min-height:250px;padding:8px 8px 0 0;display:flex;align-items:center;font-size:13px}.modal-body[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%]{margin:0;color:#666;white-space:pre-line;letter-spacing:.05em;line-height:1.8}@media screen and (max-width:992px){.modal-body[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]{width:100%;padding-bottom:8px}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .name-content[_ngcontent-%COMP%]{font-size:26px;letter-spacing:.05em;margin-bottom:4px;font-weight:300;font-family:Noto Sans JP,sans-serif}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]{font-size:12px;color:#666;text-align:right}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]{display:inline-block;margin-left:8px;vertical-align:middle}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]   .stage-name[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;vertical-align:middle}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]   .stage-name[_ngcontent-%COMP%]   .stage-text[_ngcontent-%COMP%]{vertical-align:middle;font-weight:700;font-family:sans-serif}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]   .stage-name[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:4px;vertical-align:middle}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]   .stage-time[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:100%;padding:0 0 16px}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{width:100%;height:400px;display:inline-block}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:100%;padding-bottom:32px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .name-content[_ngcontent-%COMP%]{font-size:22px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]{min-height:40px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]{width:100%;text-align:right}}@media screen and (max-width:480px){.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]{padding-bottom:8px}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .name-content[_ngcontent-%COMP%]{font-size:24px;margin-bottom:4px}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]{font-size:11px}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]{margin-left:8px}.modal-body[_ngcontent-%COMP%]   .heading-wrapper[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .information-top-content[_ngcontent-%COMP%]   .stage-content[_ngcontent-%COMP%]   .stage-name[_ngcontent-%COMP%]{margin-right:8px}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{padding:0}.modal-body[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .image-content[_ngcontent-%COMP%]{height:250px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{width:100%;padding-bottom:32px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .description-content[_ngcontent-%COMP%]{min-height:40px;font-size:12px}.modal-body[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .sns-link-contents[_ngcontent-%COMP%]{width:100%;text-align:right}}.main-image[_ngcontent-%COMP%]{background-image:url(/2019/assets/images/pages/food-top.jpg)}.main-content[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%]{background-color:#ee6352;background:linear-gradient(20deg,#ee6352,#ff4141)}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]{position:relative;display:inline-block;width:200px;height:200px;margin:20px;border-radius:8px;background-color:#fafafa;box-shadow:0 1px 8px rgba(0,0,0,.05);overflow:hidden;cursor:pointer}.card-content[_ngcontent-%COMP%]   .food.empty[_ngcontent-%COMP%]{background-color:transparent;box-shadow:none;visibility:hidden}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-image[_ngcontent-%COMP%]{width:100%;height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat;transition:transform .3s ease 0s;will-change:transform;transform:scale(1);border-radius:8px}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]:hover   .food-image[_ngcontent-%COMP%]{transform:scale(1.2)}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-name[_ngcontent-%COMP%]{position:absolute;display:block;left:0;right:0;bottom:0;padding:10px;color:#fff;font-size:12.5px;text-align:left;background-color:rgba(238,99,82,.8);border-bottom-left-radius:8px;border-bottom-right-radius:8px;letter-spacing:.05em;width:100%}.modal-body[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{margin:4px 0 0;font-size:12px;letter-spacing:.05em}.modal-body[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}.modal-body[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:4px}.modal-body[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .shop-type[_ngcontent-%COMP%]{font-size:12px}.modal-body[_ngcontent-%COMP%]   .information-content[_ngcontent-%COMP%]   .shop-type[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#666;margin-right:4px}@media screen and (max-width:992px){.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]{margin:8px;width:300px;height:300px}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]:after{width:0;height:100%}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-image[_ngcontent-%COMP%]{width:100%;height:100%}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-name[_ngcontent-%COMP%]{padding:8px;font-size:12px;letter-spacing:.03em}}@media screen and (max-width:730px){.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]{margin:4px;width:221px;height:221px}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]:after{width:0;height:100%}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .artist-name[_ngcontent-%COMP%]{padding:8px;font-size:12px;letter-spacing:.03em}}@media screen and (max-width:480px){.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]{margin:4px;width:calc(50vw - 17px);height:calc(50vw - 17px)}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]:after{width:0;height:100%}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-image[_ngcontent-%COMP%]{width:100%;height:100%}.card-content[_ngcontent-%COMP%]   .food[_ngcontent-%COMP%]   .food-name[_ngcontent-%COMP%]{padding:8px 4px;font-size:12px;letter-spacing:.03em}}']}),$)}]),B=e("cNqA"),I=e("vzOA"),j=((T=function n(){_classCallCheck(this,n)}).\u0275mod=g.Mb({type:T}),T.\u0275inj=g.Lb({factory:function(n){return new(n||T)},imports:[[o.c,z,B.a,_.b,I.a]]}),T)}}]);