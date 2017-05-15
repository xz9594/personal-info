$(function(){
  $("#fullpage").fullpage({
    sectionsColor:['#4b85a0','#a29971','#4B5F8E','#87b0a5'],  //section的背景颜色
    // controlArrows:false   滑动箭头控制，默认true
    verticalCentered:false, //页面类容默认垂直居中，默认为true
    scrollingSpeed:800,  //   滑动页面切换速度 默认700毫秒
    anchors:['page1','page2','page3','page4'],
    fixedElements:'#nav',
    navigation:true,position:'right',navigationTooltips:['个人简介','我的经历','专业技能','自我评价'],
    afterLoad:function(link, index){
      switch (index) {
        case 1:
           $("#mingyan").animate({fontSize:"1.5em",opacity:'1.0'},1500,function(){
             $("#mingzi").animate({fontSize:"1.5em",opacity:'1.0'},1000,function(){
               $("#zhiwei").animate({fontSize:"1.5em",opacity:'1.0'},1000,function(){
                 $("#youxiang").animate({fontSize:"1.5em",opacity:'1.0'},1000);
                 });
               });
             });
          break;
        case 2:
            move('.jingli_1').ease('in-out').x(2000).duration(500).end(function(){
              move('.jingli_2').ease('in-out').x(2000).duration(1000).end(function(){
                move('.jingli_3').ease('in-out').x(2000).duration(1000).end(function(){
                  move('.jingli_4').ease('in-out').x(2000).duration(1000).end();
                });
              });
            });
          break;
        case 3:
        move('#javascript').rotate(360).duration(500).end(function(){
           move('#HTML').rotate(360).duration(500).end(function(){
             move('#CSS').rotate(360).duration(500).end(function(){
                 move('#jquery').rotate(-360).duration(500).end(function(){
                    move('#AJAX').rotate(-360).duration(500).end(function(){
                       move('#ES6').rotate(-360).duration(500).end()
                            })
                        })
                     })
                 });
            });
          break;
        case 4:
          move('.zwpj').ease('in-out').x(-1992).scale(1.2).duration(800).end(function(){
            move('.pjnr').ease('in-out').x(-2100).duration(900).end();
          });
          break;
        default:
          break;
      }
    },
    onLeave:function(link, index){
      switch (index) {
        case 1:
            $("#mingyan").animate({fontSize:"1.0em",opacity:'0.7'});
            $("#mingzi").animate({fontSize:"1.0em",opacity:'0.7'});
            $("#zhiwei").animate({fontSize:"1.0em",opacity:'0.7'});
            $("#youxiang").animate({fontSize:"1.0em",opacity:'0.7'});
          break;
        case 2:
          move('.jingli_1').ease('in').x(-2000).duration(10).end();
          move('.jingli_2').ease('in').x(-2000).duration(10).end();
          move('.jingli_3').ease('in').x(-2000).duration(10).end();
          move('.jingli_4').ease('in').x(-2000).duration(10).end();
          break;
        case 3:
          move('#javascript').rotate(-360).duration(1).end();
          move('#HTML').rotate(-360).duration(1).end();
          move('#CSS').rotate(-360).duration(1).end();
          move('#jquery').rotate(360).duration(1).end();
          move('#AJAX').rotate(360).duration(1).end();
          move('#ES6').rotate(360).duration(1).end();
          break;
        case 4:
            move('.zwpj').ease('in-out').x(2000).scale(1.0).end();
            move('.pjnr').ease('in-out').x(2000).end();
          break;
        default:
          break;
      }
    }
  });

})
