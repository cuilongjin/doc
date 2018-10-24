$(function() {
    // 函数封装 开始
    // 封装 显示隐藏函数
    var $sj = $(".nav-bar .sj");
    // move sj
    var movesj = function(tar1, tar2, tar3) {
        $sj.css({
            top: tar1[0].offsetTop + tar2,
            left: tar1[0].offsetLeft + tar3
        });
    };

    // 函数 显示内容
    var display = function(tar1, card, cardUl, left) {
        movesj(tar1, 31, left);
        $sj.show();
        card.show();
        cardUl.fadeIn(1000);
        $bg.show();
        $navbar.css("backgroundColor", "rgba(31, 34, 42, .8)");
    };

    // 函数 隐藏内容
    var unDisplay = function(card, cardUl) {
        $sj.hide();
        card.hide();
        cardUl.hide();
        $bg.hide();
        // "rgba(2,25,72,.3)"
        $navbar.css("backgroundColor", "rgba(2,25,72,.3)");
    };
    // 函数封装结束

    // game click 显示隐藏开始

    // 获取元素
    var $bg = $(".nav-bar .bg");
    var $navbar = $(".nav-bar");
    var $game = $(".nav-bar .inner .itemL li").eq(0);
    var $gameCard = $(".nav-bar .game");
    var $gameCardUl = $(".nav-bar .game ul");
    var $gamei = $game.children("i");


    // game 点击事件
    $game.click(function() {

        // 将其他两个 card 隐藏
        unDisplay($sportCard, $sportCardUl);
        unDisplay($passCard, $passCarddiv);

        // 切换字体图标指向
        $gamei.toggleClass("fa-angle-down");
        $gamei.toggleClass("fa-angle-up");

        // 判断显示 隐藏
        if ($gamei.hasClass("fa-angle-up")) {
            display($game, $gameCard, $gameCardUl, 30);
        } else {
            unDisplay($gameCard, $gameCardUl);
        }
        return false;
    });


    // gamelis hover 渐变动画 开始
    var $card = $(".game li");
    $card.mouseenter(function() {
        $(this).stop().animate({
            "opacity": 1,
        }, 100);
    });
    $card.mouseleave(function() {
        $(this).stop().animate({
            "opacity": 0.8,
        }, 100);
    });
    // gamelis hover 渐变动画 结束
    // game click 显示隐藏结束

    // 电子竞技 click 显示隐藏开始

    // 获取元素
    var $sport = $(".nav-bar .inner .itemL li").eq(3);
    var $sportCard = $(".nav-bar .sport");
    var $sportCardUl = $(".nav-bar .sport .items a");
    var $sporti = $sport.children("i");


    // 电子竞技按钮 点击事件
    $sport.click(function() {

        // 将其他两个 card 隐藏
        unDisplay($gameCard, $gameCardUl);
        unDisplay($passCard, $passCarddiv);

        // 切换字体图标指向
        $sporti.toggleClass("fa-angle-down");
        $sporti.toggleClass("fa-angle-up");

        // 判断显示 隐藏
        if ($sporti.hasClass("fa-angle-up")) {
            display($sport, $sportCard, $sportCardUl, 62);
        } else {
            unDisplay($sportCard, $sportCardUl);
        }
        return false;
    });
    // 电子竞技 click 显示隐藏结束


    // 电子竞技内部inn
    $sportCardUl.eq(0).mouseenter(function() {
    	$(this).stop(true, true).animate({
    		width: 288,
    	});
    	$(this).parent().stop().animate({
    		width: 1066,
    	});
    });

    $sportCardUl.eq(0).mouseleave (function() {
    	// if()
    	$(this).stop().animate({
    		width: 192,
    	});
    	$(this).parent().stop().animate({
    		width: 970,
    	});
    });


    // 通行证开始


    // // 通行证按钮 click 显示隐藏开始

    // 获取元素
    var $pass = $(".nav-bar .inner .itemR li").eq(1);
    var $passCard = $(".nav-bar .pass");
    var $passCarddiv = $(".nav-bar .pass div");
    var $passi = $pass.children("i");

    // 通行证按钮 点击事件
    $pass.click(function() {

        // 将其他两个 card 隐藏
        unDisplay($gameCard, $gameCardUl);
        unDisplay($sportCard, $sportCardUl);

        // 切换字体图标指向
        $passi.toggleClass("fa-angle-down");
        $passi.toggleClass("fa-angle-up");

        // 判断显示 隐藏
        if ($passi.hasClass("fa-angle-up")) {
            display($pass, $passCard, $passCarddiv, 80);
        } else {
            unDisplay($passCard, $passCarddiv);
        }
        return false;
    });

    // 通行证结束


    // 点击空白处隐藏导航
    $(document).click(function() {

        if ($gamei.hasClass("fa-angle-up")) {
            unDisplay($gameCard, $gameCardUl);
            $gamei.toggleClass("fa-angle-down");
            $gamei.toggleClass("fa-angle-up");
        }

        if ($sporti.hasClass("fa-angle-up")) {
            unDisplay($sportCard, $sportCardUl);
            $sporti.toggleClass("fa-angle-down");
            $sporti.toggleClass("fa-angle-up");
        }

        if ($passi.hasClass("fa-angle-up")) {
            unDisplay($passCard, $passCarddiv);
            $passi.toggleClass("fa-angle-down");
            $passi.toggleClass("fa-angle-up");
        }
    });

    // 阻止冒泡
    $gameCard.click(function(event) {
        event.stopPropagation();
    });
    $sportCard.click(function(event) {
        event.stopPropagation();
    });
    $passCard.click(function(event) {
        event.stopPropagation();
    });


    // mainNav 卷曲效果
    // 获取 navbar 及其高度
    // $navbar 以获取过
    var $navbarH = $navbar.height();

    // 获取 mainnav
    var $mainNav = $(".mainNav");

    // 设置标记
    var flag = false;

    $(window).scroll(function() {

        // 获取网页卷曲的高度
        var $scrollTop = $(window).scrollTop();

        // 卷曲高度大于 $navbarH 将 $mainNav 固定
        if ($scrollTop > $navbarH && flag == false) {

            $mainNav.stop().animate({
                width: "100%",
                top: 0,
            }, 200);
            flag = true;

            // 卷曲高度小于 $navbarH 恢复 $mainNav
        } else if ($scrollTop < $navbarH && flag == true) {
            $mainNav.stop().animate({
                width: "96%",
                top: 64,
            }, 200);
            flag = false;
        }
    });



    // $(window).scroll(function () {

    // 	// 获取网页卷曲的高度
    // 	var $scrollTop = $(window).scrollTop();

    // 	if ($scrollTop > $navbarH) {
    // 		flag = false;
    // 		$mainNav.stop().animate({
    // 			width: "100%",
    // 			top: 0,
    // 		}, 200);
    // 	}else if ($scrollTop < $navbarH) {
    // 		flag = true;
    // 		$mainNav.stop().animate({
    // 			width: "96%",
    // 			top: 64,
    // 		}, 200);
    // 	}
    // });

});