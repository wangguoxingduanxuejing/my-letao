$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});
// var baseURL = "http://localhost:3000/";
var baseURL = "http://fullstack.net.cn:3000/";

$.fn.serializeToJson = function() {
    var formAry = this.serializeArray();
    var result = {};
    formAry.forEach(function(item) {
        result[item.name] = item.value;
    });
    return result;
}

// 跨域session cookie设置
$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});