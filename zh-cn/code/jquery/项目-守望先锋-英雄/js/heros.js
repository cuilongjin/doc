$(function() {

    var $lis = $(".main .nav li");
    $lis.eq(0).children("span").show();

    // 给每个li添加图标
    var $zz1 = window.zzIcon.clone();
    $lis.eq(1).prepend($zz1);
    var $sc1 = window.scIcon.clone();
    $lis.eq(2).prepend($sc1);
    var $zy1 = window.zyIcon.clone();
    $lis.eq(3).prepend($zy1);

    // lis 鼠标 enter 事件
    $lis.mouseenter(function() {

        // lis 鼠标 enter 颜色变白
        $(this).children("span").stop().fadeIn();
    });

    // lis 鼠标 leave 事件
    $lis.mouseleave(function() {

        // lis 鼠标 leave 颜色恢复
        if (!$(this).hasClass("checked")) {
            $(this).children("span").stop().fadeOut();
        }
    });

    // lis 鼠标点击事件
    $lis.click(function() {

        // lis 鼠标点击变色
        $(this).addClass("checked").siblings().removeClass("checked");
        $(this).siblings().children("span").stop().fadeOut();

        // click 图标变色
        $(this).children("svg").addClass("deep");
        $(this).siblings().children("svg").removeClass("deep");

    });

    // 英雄列表部分动画
    // 获取所有 heros
    var $herosLis = $(".main .heros li");

    // heros 鼠标 enter 事件
    $herosLis.mouseenter(function() {

    	$(this).css({
    		// 提高层级
            zIndex: 2,
    	});
        $(this).children("img").stop().animate({

            // 图片变大动画
            width: 180,
        }, 200);
        // var w = $(this).children("img").width();
        $(this).children("span").addClass("w").stop().animate({

            // span 变大动画
            width: 180,
            bottom: -18,
            height: 90,

        }, 200);

    });

    // heros 鼠标 leave 事件
    $herosLis.mouseleave(function() {
    	$(this).css({
    		// 层级恢复
            zIndex: 1,
    	});
        $(this).children("span").removeClass("w").stop().animate({

            // span 变大动画
            width: 160,
            bottom: -0,
            height: 80,

        }, 100);

        $(this).children("img").stop().animate({

            // 图片恢复
            width: 160,
        }, 80);

    });

    /////////////////////////////////////////
    // 点击英雄跳转
    $dva = $(".main .heros .dva");
    $dva.click(function() {

        // 要跳转的url地址
        window.open("");
    });
    $dva.siblings().click(function() {
    	window.open("zz.html");
    });
    ////////////////////////////////////////////

    // lis 鼠标点击切换英雄排序事件

    // 获取对应类型的英雄
    var $zzHheros = $(".main .heros li.zz");
    var $scHheros = $(".main .heros li.sc");
    var $zyHheros = $(".main .heros li.zy");

    var $herosUl = $(".main .heros ul");

    // 添加标记，重复点击一个按钮多次只触发一次事件
    var flag0 = true, flag1 = true, flag2 = true, flag3 = true;

    $lis.eq(0).click(function() {
    	if(flag0) {

			// 恢复默认
			$herosLis.removeClass("opacity");
			$herosLis.children("span").removeClass("b");

	    	$zzHheros.stop().hide(5, function() {

	    		// 添加到最前边
	    		$zzHheros.prependTo($herosUl);
	    		$zzHheros.fadeIn(200);
	    	});

			$scHheros.stop().hide(100).fadeIn(500);
			$zyHheros.stop().hide(100).fadeIn(500);
    	}
    	flag0 = false;
    	flag1 = true;
    	flag2 = true;
    	flag3 = true;
    });

    // var
    $lis.eq(1).click(function() {
    	if(flag1) {

	    	// 全部隐藏
	    	$scHheros.stop(true, false).hide(100);
	    	$zyHheros.hide(100);
	    	$zzHheros.hide(5, function() {

	    		// 添加到最前边
	    		$zzHheros.prependTo($herosUl);

	    		// 修改透明度
				$herosLis.removeClass("opacity");
				$herosLis.children("span").removeClass("b");
	    		// 全部显示
	    		$zzHheros.children("span").addClass("b");
	    		$zzHheros.fadeIn(200);
	    		$scHheros.addClass("opacity").fadeIn(500);
				$zyHheros.addClass("opacity").fadeIn(500);

	    	});
    	}
    	flag1 = false;
    	flag0 = true;
    	flag2 = true;
    	flag3 = true;
    });

    $lis.eq(2).click(function() {
    	if(flag2) {

	    	// 全部隐藏
	    	$zzHheros.stop(true, false).hide(100);
	    	$zyHheros.hide(100);
	    	$scHheros.hide(5, function() {

	    		// 添加到最前边
	    		$scHheros.prependTo($herosUl);

	    		// 修改透明度
				$herosLis.removeClass("opacity");
				$herosLis.children("span").removeClass("b");
	    		// 全部显示
	    		$scHheros.children("span").addClass("b");
	    		$scHheros.fadeIn(200);
	    		$zzHheros.addClass("opacity").fadeIn(200);
				$zyHheros.addClass("opacity").fadeIn(200);

	    	});
    	}
    	flag2 = false;
    	flag0 = true;
    	flag1 = true;
    	flag3 = true;
    });

    $lis.eq(3).click(function() {
    	if(flag3) {

	    	// 全部隐藏
	    	$zzHheros.stop(true, false).hide(100);
	    	$scHheros.hide(100);
	    	$zyHheros.hide(5, function() {

	    		// 添加到最前边
	    		$zyHheros.prependTo($herosUl);

	    		// 修改透明度
				$herosLis.removeClass("opacity");
				$herosLis.children("span").removeClass("b");
	    		// 全部显示
	    		$zyHheros.children("span").addClass("b");
	    		$zyHheros.fadeIn(200);
	    		$zzHheros.addClass("opacity").fadeIn(200);
				$scHheros.addClass("opacity").fadeIn(200);

	    	});
    	}
    	flag3 = false;
    	flag0 = true;
    	flag1 = true;
    	flag2 = true;
    });



    // 给英雄添加类型图标

    // 分别 获取 $zz $sc $zy 类型英雄
    var $zzHherossp = $zzHheros.children("span");
    var $scHherossp = $scHheros.children("span");
    var $zyHherossp = $zyHheros.children("span");
    // 分别 克隆 $zz $sc $zy 类型 图标
    var $zz = window.zzIcon.clone();
    var $sc = window.scIcon.clone();
    var $zy = window.zyIcon.clone();

    // 将对应图标添加到对应类型英雄中
    $zzHherossp.append($zz);
    $scHherossp.append($sc);
    $zyHherossp.append($zy);
});