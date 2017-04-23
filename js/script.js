var x=12;
var y=0;

$(window).load(function() {

    var jh,jw,fh,fw;


    jh = ($('.imgfon').height());
    $(".usy").css('max-height', 0.3*jh + 'px');
    jw = ($('.imgfon').width());
    $(".usy").css('max-width', 0.3*jw + 'px');

    fh = ($('.imgfonus').height());
    $("#us1").css('top', 0.344*fh + 'px');
    $("#us2").css('top', 0.261*fh + 'px');
    $("#us3").css('top', 0.4705*fh + 'px');
    $("#us4").css('top', 0.2583*fh + 'px');
    $("#us5").css('top', 0.3735*fh + 'px');
    $("#us6").css('top', 0.153*fh + 'px');
    $("#us7").css('top', 0.5689*fh + 'px');
    $("#us8").css('top', 0.578*fh + 'px');
    $("#us9").css('top', 0.8484*fh + 'px');
    $("#us10").css('top', 0.70381*fh + 'px');
    $("#us11").css('top', 0.1325*fh + 'px');
    $("#us12").css('top', 0.4719*fh + 'px');

    fw = ($('.imgfonus').width());
    $("#us1").css('left', 0.38682*fw + 'px');
    $("#us2").css('left', 0.59722*fw + 'px');
    $("#us3").css('left', 0.5904*fw + 'px');
    $("#us4").css('left', 0.1864*fw + 'px');
    $("#us5").css('left', 0.7965*fw + 'px');
    $("#us6").css('left', 0.4176*fw + 'px');
    $("#us7").css('left', 0.7383*fw + 'px');
    $("#us8").css('left', 0.372*fw + 'px');
    $("#us9").css('left', 0.4136*fw + 'px');
    $("#us10").css('left', 0.58809*fw + 'px');
    $("#us11").css('left', 0.7611*fw + 'px');
    $("#us12").css('left', 0.1499*fw + 'px');


    $(window).resize(function () {
        jh = ($('.imgfon').height());
        $(".usy").css('max-height', 0.3*jh + 'px');
        jw = ($('.imgfon').width());
        $(".usy").css('max-width', 0.3*jw + 'px');

        fh = ($('.imgfonus').height());
        $("#us1").css('top', 0.344*fh + 'px');
        $("#us2").css('top', 0.261*fh + 'px');
        $("#us3").css('top', 0.4705*fh + 'px');
        $("#us4").css('top', 0.2583*fh + 'px');
        $("#us5").css('top', 0.3735*fh + 'px');
        $("#us6").css('top', 0.153*fh + 'px');
        $("#us7").css('top', 0.5689*fh + 'px');
        $("#us8").css('top', 0.578*fh + 'px');
        $("#us9").css('top', 0.8484*fh + 'px');
        $("#us10").css('top', 0.70381*fh + 'px');
        $("#us11").css('top', 0.1325*fh + 'px');
        $("#us12").css('top', 0.4719*fh + 'px');

        fw = ($('.imgfonus').width());
        $("#us1").css('left', 0.38682*fw + 'px');
        $("#us2").css('left', 0.59722*fw + 'px');
        $("#us3").css('left', 0.5904*fw + 'px');
        $("#us4").css('left', 0.1864*fw + 'px');
        $("#us5").css('left', 0.7965*fw + 'px');
        $("#us6").css('left', 0.4176*fw + 'px');
        $("#us7").css('left', 0.7383*fw + 'px');
        $("#us8").css('left', 0.372*fw + 'px');
        $("#us9").css('left', 0.4136*fw + 'px');
        $("#us10").css('left', 0.58809*fw + 'px');
        $("#us11").css('left', 0.7611*fw + 'px');
        $("#us12").css('left', 0.1499*fw + 'px');

    }).resize();


    $("#us1").draggable({revert:'invalid',start:function(){--x;}});
    $("#us2").draggable({revert:'invalid',start:function(){--x;}});
    $("#us3").draggable({revert:'invalid',start:function(){--x;}});
    $("#us4").draggable({revert:'invalid',start:function(){--x;}});
    $("#us5").draggable({revert:'invalid',start:function(){--x;}});
    $("#us6").draggable({revert:'invalid',start:function(){--x;}});
    $("#us7").draggable({revert:'invalid',start:function(){--x;}});
    $("#us8").draggable({revert:'invalid',start:function(){--x;}});
    $("#us9").draggable({revert:'invalid',start:function(){--x;}});
    $("#us10").draggable({revert:'invalid',start:function(){--x;}});
    $("#us11").draggable({revert:'invalid',start:function(){--x;}});
    $("#us12").draggable({revert:'invalid',start:function(){--x;}});

    $("#andr").droppable({ accept:'#us1',
        drop: function () {
            $("#us1").css("display","none");
            $("#andr .imgfon").attr("src","img/andrus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#franko").droppable({ accept:'#us2',
        drop: function () {
            $("#us2").css("display","none");
            $("#franko .imgfon").attr("src","img/frankous.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#gera").droppable({ accept:'#us3',
        drop: function () {
            $("#us3").css("display","none");
            $("#gera .imgfon").attr("src","img/geraus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#gogol").droppable({ accept:'#us4',
        drop: function () {
            $("#us4").css("display","none");
            $("#gogol .imgfon").attr("src","img/gogolus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#hvyl").droppable({ accept:'#us5',
        drop: function () {
            $("#us5").css("display","none");
            $("#hvyl .imgfon").attr("src","img/hvylus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#kots").droppable({ accept:'#us6',
        drop: function () {
            $("#us6").css("display","none");
            $("#kots .imgfon").attr("src","img/kotsus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#kru").droppable({ accept:'#us7',
        drop: function () {
            $("#us7").css("display","none");
            $("#kru .imgfon").attr("src","img/kruus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#lysh").droppable({ accept:'#us8',
        drop: function () {
            $("#us8").css("display","none");
            $("#lysh .imgfon").attr("src","img/lyshus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#proh").droppable({ accept:'#us9',
        drop: function () {
            $("#us9").css("display","none");
            $("#proh .imgfon").attr("src","img/prohus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#shev").droppable({ accept:'#us10',
        drop: function () {
            $("#us10").css("display","none");
            $("#shev .imgfon").attr("src","img/shevus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#star").droppable({ accept:'#us11',
        drop: function () {
            $("#us11").css("display","none");
            $("#star .imgfon").attr("src","img/starus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });
    $("#voron").droppable({ accept:'#us12',
        drop: function () {
            $("#us12").css("display","none");
            $("#voron .imgfon").attr("src","img/voronus.png");
            ++x;
            ++y;
            if (y==12){
                $('#fon').css("display", "none");
                if(x==1){
                    $("#finishimg").attr("src","img/1.png");
                }
                if(x==2){
                    $("#finishimg").attr("src","img/2.png");
                }
                if(x==3){
                    $("#finishimg").attr("src","img/3.png");
                }
                if(x==4){
                    $("#finishimg").attr("src","img/4.png");
                }
                if(x==5){
                    $("#finishimg").attr("src","img/5.png");
                }
                if(x==6){
                    $("#finishimg").attr("src","img/6.png");
                }
                if(x==7){
                    $("#finishimg").attr("src","img/7.png");
                }
                if(x==8){
                    $("#finishimg").attr("src","img/8.png");
                }
                if(x==9){
                    $("#finishimg").attr("src","img/9.png");
                }
                if(x==10){
                    $("#finishimg").attr("src","img/10.png");
                }
                if(x==11){
                    $("#finishimg").attr("src","img/11.png");
                }
                if(x==12){
                    $("#finishimg").attr("src","img/12.png");
                }
                $('#finish').css("display", "block");
            }
        }
    });



    });
