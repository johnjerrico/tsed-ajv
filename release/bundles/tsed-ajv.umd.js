!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tsed-ajv",[],t):"object"==typeof exports?exports["tsed-ajv"]=t():e["tsed-ajv"]=t()}(global,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(1)},function(e,t,r){"use strict";var o=s(r(2)),n=s(r(3)),i=s(r(4)),u=s(r(5)),c=s(r(6));function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});const a=r(7),f=r(8),l=r(9),d=r(10);let p=class extends a.ValidationService{constructor(e,t,r){super(),this.jsonSchemaService=e,this.serverSettingsService=t,this.converterService=r;const o=t.get("ajv")||{};this.options=(0,n.default)({verbose:!1},o.options||{}),this.errorFormatter=o.errorFormat?o.errorFormat:this.defaultFormatter}validate(e,t,r){const n=this.jsonSchemaService.getSchemaDefinition(t);if(n&&null!==e&&void 0!==e){const i=r?e:[e],u={ignoreCallback:(e,t)=>t===Date,checkRequiredValue:!1},c=e=>{const r=new l(this.options);if(!r.validate(n,e))throw this.buildErrors(r.errors,t)};(0,o.default)(i).forEach(e=>{c(this.converterService.deserialize(i[e],t,void 0,u))})}return!0}buildErrors(e,t){d.$log.debug("AJV errors: ",e),e.map(e=>(e.modelName=f.nameOf(t),this.errorFormatter.call(this,e))).join("/n")}defaultFormatter(e){let t="";return this.options.verbose&&(t=`, value "${e.data}"`),`At ${e.modelName}${e.dataPath}${t} ${e.message}`}};p=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=(0,c.default)(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&(0,u.default)(t,r,s),s}([a.OverrideService(a.ValidationService),function(e,t){if("object"==typeof Reflect&&"function"==typeof i.default)return(0,i.default)(e,t)}("design:paramtypes",[a.JsonSchemesService,a.ServerSettingsService,a.ConverterService])],p),t.AjvService=p},function(e,t){e.exports=require("babel-runtime/core-js/object/keys")},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t){e.exports=require("babel-runtime/core-js/reflect/metadata")},function(e,t){e.exports=require("babel-runtime/core-js/object/define-property")},function(e,t){e.exports=require("babel-runtime/core-js/object/get-own-property-descriptor")},function(e,t){e.exports=require("@tsed/common")},function(e,t){e.exports=require("@tsed/core")},function(e,t){e.exports=require("ajv")},function(e,t){e.exports=require("ts-log-debug")}])});