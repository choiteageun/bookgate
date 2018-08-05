$(document).ready((e)=>{
    for(let i =0; i < 5; i++)
    {
        for(let j=1; j< 8; j++)
        {
            //1일 시작하는 요일 변수
            //(0:일요일, 1:월요일, 2:화요일, 3:수요일, 4:목요일, 5:금요일, 6:토요일)
            let startDay = 0;

            let day = i*7+j + "일";
            $(".day_"+(i*7+j+startDay)).html(day);
            if((i*7+j) >= 31)
            {
                break;
            }
        }
    }

    // $(".talkContentContainer").html("<div class='contentRow'><div class='nickName'>ss</div><div class='talkContent'></div><div class='talkTime'><%=time%></div></div>");
    
    
        

    $(document).on("click",".navContent", ()=>{
        $(".calender").css("display", "block");
    });

    let currentScroll = $(window).scrollTop();
    
    // $(window).scroll(function(e)
    // {
    //     let startScroll = $(window).scrollTop();
    //     let test = document.getElementById("loginContent");
    //     let test2 = document.getElementById("allContainer");

    //     const functionTest = (obj,index)=>{
    //         // $('body,html').animate({ scrollTop: index}, 800);
    //         // console.log(obj);
    //         console.log("함수접근");
    //         $('body,html').animate({scrollTop: index}, 800);
    //     };
    //     console.log(startScroll);
    //     if(startScroll < 50)
    //     {
    //         ($(test)).css("opacity", "1");
    //         ($(test)).css("transition", "opacity 1s");
    //     }
    //     else if( startScroll > 160 && startScroll < 180)
    //     {
    //         console.log("350접근");
    //         ($(test)).css("opacity", "0");
    //         ($(test)).css("transition", "opacity 0s");
    //         window.scrollTo(0, 400);
    //     }
    //     else if(startScroll > 220 && startScroll < 240 )
    //     {   
    //         console.log("0접근");
    //         window.scrollTo(0, 0);
    //         // ($(test2)).css("top", "0");
    //     }
    //     else
    //     {
    //         console.log("뭐냐 이건");
    //     }
    // });
});