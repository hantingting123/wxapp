!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("./storage"));else if("function"==typeof define&&define.amd)define(["./storage"],e);else{var o=e("object"==typeof exports?require("./storage"):t["./storage"]);for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(this,function(t){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}({0:function(t,e,o){t.exports=o(193)},193:function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(194),i=r(n),u=new i.default("portfolio");e.default={getPortfolioList:function(){return u.getItem().catch(function(){return["SH000001","SZ399001","SZ399006","SH601519"]})},addPortfolio:function(t){return this.getPortfolioList().then(function(e){var o=e.filter(function(e){return e!==t});return o.unshift(t),u.setItem(o)})},removePortfolio:function(t){return this.getPortfolioList().then(function(e){return u.setItem(e.filter(function(e){return e!==t}))})},inPortfolio:function(t){return this.getPortfolioList().then(function(e){return e.indexOf(t)>=0})},onPortfolioChanged:function(t){return u.on("update",t)}}},194:function(t,e){t.exports=require("./storage")}})});