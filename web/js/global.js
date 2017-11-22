
$(function(){

	$('html').screenAdaptation(); //适配

});

//扩展jq.fn
$.extend($.fn, {

	//屏幕适配 ***
	screenAdaptation : function(){
		var that = $(this);
		var iWidth = document.documentElement.getBoundingClientRect().width;
		iWidth=iWidth>640?640:iWidth;
		iWidth=iWidth<320?320:iWidth;
		that[0].style.fontSize=iWidth/6.4+"px";
	},

	//数量+- ***
	addlesNum : function(opts){
		var def = {
			  addCls : ".add",
			  lesCls : ".les",
			  numCls : ".num"
		};
		var that = $(this);
		var setting = $.extend(def,opts);

		that.find(setting.addCls).bind("click",fnAdd);
		that.find(setting.lesCls).bind("click",fnLes);
		that.find(setting.numCls).bind("input",fnInput);

		function fnAdd(){
			var val = that.find(setting.numCls).val();
			that.find(setting.numCls).val(parseInt(val) + 1);
			if($.trim(val) == 0){
				that.find(setting.numCls).val(1);
			}
			return false;
		}

		function fnLes(){
			var val = that.find(setting.numCls).val();
			val > 0 ? that.find(setting.numCls).val(parseInt(val) - 1) : that.find(setting.numCls).val(0);
			return false;
		}

		function fnInput(){
			$(this).val($(this).val().replace(/[^0-9-]+/,''));
		}
	}
});