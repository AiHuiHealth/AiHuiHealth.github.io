/**
 * Created by aihui082 on 2018/6/20.
 */
$(function () {
    var width = $(document).width()
    console.log(width)
    if (width < 1000) {
        $('#pc-header').css({"display":"none"})
        $('#phone-header').css({"display":"block"})
    } else {
        $('#pc-header').css({"display":"block"})
        $('#phone-header').css({"display":"none"})
        $('.sidenav').css({"display":"none"})
        $('.phone-footer').css({"display":"none"})
    }
    $(".tab-wrap li:nth-child(5),.index-main ul li:nth-child(1)").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        window.location.href = 'index.html'
    })
    $(".tab-wrap li:nth-child(4),.index-main ul li:nth-child(2)").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        window.location.href = 'product.html'
    })
    // $(".tab-wrap li:nth-child(4),.index-main ul li:nth-child(3)").on("click", function () {
    //     $(this).addClass('selected').siblings().removeClass('selected')
    //     window.location.href = 'aboutus.html'
    // })
    $(".tab-wrap li:nth-child(3),.index-main ul li:nth-child(3)").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        window.location.href = 'news.html'
    })
    $(".tab-wrap li:nth-child(2),.index-main ul li:nth-child(4)").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        window.location.href = 'add.html'
    })
    $(".tab-wrap li:nth-child(1),.index-main ul li:nth-child(5)").on("click", function () {
        $(this).addClass('selected').siblings().removeClass('selected')
        window.location.href = 'cooperate.html'
    })

    // 手机端
    $(".menu").on("click", function () {
        $('.sidenav').fadeIn(200)
    })
    $(".close").on("click", function () {
        $('.sidenav').fadeOut(200)
    })
    $('.sidenav ul li:nth-child(1)').on("click", function () {
        window.location.href = 'index.html'
    })
    $('.sidenav ul li:nth-child(2)').on("click", function () {
        window.location.href = 'product.html'
    })
    $('.sidenav ul li:nth-child(3)').on("click", function () {
        window.location.href = 'news.html'
    })
    // $('.sidenav ul li:nth-child(4)').on("click", function () {
    //     window.location.href = 'aboutus.html'
    // })
    $('.sidenav ul li:nth-child(4)').on("click", function () {
        window.location.href = 'add.html'
    })
    $('.sidenav ul li:nth-child(5)').on("click", function () {
        window.location.href = 'cooperate.html'
    })
    $('.sidenav ul li').on("click", function () {
        $('.sidenav').fadeOut(200)
    })
    $('.back-top').on("click", function (){
        $('body,html').animate({scrollTop:0},1000);
    })

    getMap = function () {
        // 百度地图API功能
        var map = new BMap.Map("map");
        var point = new BMap.Point(116.417854,39.921988);
        map.centerAndZoom(point,12);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("上海市浦东新区龙东大道3000号张江集电港1号楼602室", function(point){
            if (point) {
                map.centerAndZoom(point, 15);
                map.addOverlay(new BMap.Marker(point));
                map.panBy(200, 200); // 标注点偏移多少像素
                // var opts = {
                //     width : 200,     // 信息窗口宽度
                //     height: 100,     // 信息窗口高度
                //     // title : "上海爱汇健康科技有限公司" , // 信息窗口标题
                //     enableMessage:true,//设置允许信息窗发送短息
                //     message:"欢迎加入爱汇！"
                // }
                // var infoWindow = new BMap.InfoWindow("地址：上海市浦东新区龙东大道3000号张江集电港1号楼602", opts);  // 创建信息窗口对象
                // map.openInfoWindow(infoWindow,point);
                // new BMap.Marker(point).addEventListener("click", function(){
                //     map.openInfoWindow(infoWindow,point); //开启信息窗口
                // });
            }else{
                alert("您选择地址没有解析到结果!");
            }
        }, "上海市");
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }

    $(document).on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if (delta > 0) {
            // 向上滚
            $("#pc-header").fadeIn(300)
        } else if (delta < 0) {
            // 向下滚
            $('#pc-header').fadeOut(300)
        }
    });
})