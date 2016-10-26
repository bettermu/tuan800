/**
 * Created by Administrator on 2016/10/24.
 */

$(function(){

    //顶部收藏隐藏效果
    (function(){
        $('.top_close').on('click',function(){
            $('#top_mk').fadeOut(1000);
        })
    })();

    //搜索框 搜索按鼠标钮悬浮效果
    (function(){
        $('.submit').hover(function(){
            $(this).css('background','url(img/bg_content.png) no-repeat -353px -51px')
        },function(){
            $(this).css('background','none')
        })
    })();

    //导航区域专享团 关闭效果
    (function(){
        $('.mask').on('click',function(){
            $(this).parent().fadeOut(500);
        })
    })();
    //导航菜单鼠标滑入显示效果
    (function(){
        $('#main .first li').hover(function(){
            var index=$(this).index();
            $('#main .hide_box').eq(index).show();
        },function(){
            var index=$(this).index();
            $('#main .hide_box').eq(index).hide();
        })
        $('#main .hide_box').hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        })
    })();

    //轮播图淡入淡出效果
    (function(){
        var timer=setInterval(autoRun,2000);
        var sta=0;
        function autoRun(){
           sta++;
           sta=sta>6? 0:sta;
            change(sta);
        }
        $('.banner').on('mouseover',function(){
            clearInterval(timer);
        }).on('mouseout',function(){
            timer= setInterval(autoRun,2000);
        });
        $('.banner ul li').hover(function(){
            sta=$(this).index();
            change(sta);
        });
        function change(sta){
            $('.banner img').hide().eq(sta).fadeIn(500);
            $('.banner ul li').removeClass('hover').eq(sta).addClass('hover');
        }

    })();

    //小图轮播效果
    (function(){
        var timer=setInterval(autoRun,3000);
        var sta=0;
        function autoRun(){
            sta++;
            sta=sta>4?0:sta;
            var step=sta*230;
            $('.small_slider .pic_box').animate({'left':-step+'px'},100);
        }
        $('.small_slider').on('mouseover',function(){
            clearInterval(timer);
        }).on('mouseout',function(){
            timer=setInterval(autoRun,3000);
        });
        $('.small_slider p a').eq(0).on('click',function(){
            sta--;
            sta=sta<0?4:sta;
            var step=sta*230;
            $('.pic_box').animate({'left':-step+'px'},100);
        }).end().eq(1).on('click',function(){
            autoRun();
        })
    })();

    //商品信息导航鼠标移入效果
    (function(){
        $('#main .tgw_box ul li').on('mouseover',function(){
            var num=$(this).find('.hide_box').attr('num');
            var width=6*num;
            $(this).find('.orange_star').css('width',width);
            $(this).find('.hide_box').show();
        }).on('mouseout',function(){
            $(this).find('.hide_box').hide();
        })
    })();

    //商品区块鼠标移入效果
    (function(){
        $('#main .shop').hover(function(){
            //商品倒计时效果

            setInterval(time,1000);
            var obj = $(this);
            time();
            function time(){
                var end_time=obj.attr('time');
                var now_time=new Date().getTime();

                var diff_time=end_time-now_time;
                var day=Math.floor(diff_time/(24*60*60*1000));

                diff_time=diff_time%(24*60*60*1000);
                var hour=Math.floor(diff_time/(60*60*1000));

                diff_time=diff_time%(60*60*1000);
                var min=Math.floor(diff_time/(60*1000));

                diff_time=diff_time%(60*1000);
                var sec=Math.floor(diff_time/(1000));

                obj.find('.count_down .day').html(day);
                obj.find('.count_down .hour').html(hour);
                obj.find('.count_down .min').html(min);
                obj.find('.count_down .sec').html(sec);
            }

            $(this).addClass('bg_color');
            $(this).find('.place').addClass('place_hover');
            $(this).find('.cover').add($(this).find('.shop_name'))
                .add($(this).find('.count_down'))
                .add($(this).find('.shop_hide_box')).show();
        },function(){
            $(this).removeClass('bg_color');
            $(this).find('.place').removeClass('place_hover');
            $(this).find('.cover').add($(this).find('.shop_name'))
                .add($(this).find('.count_down'))
                .add($(this).find('.shop_hide_box')).hide();
        })
    })();

    //查看更多鼠标悬停效果
    (function(){
        $('#main .l_list_box .look_more').hover(function(){
            $(this).addClass('hover');
        },function(){
            $(this).removeClass('hover');
        })
    })()



})