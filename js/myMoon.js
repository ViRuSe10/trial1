$(document).ready(function(){
    $(".YaraMoon").click(function(){
    var ymoon = document.getElementById("YaraMoon");
    $(".Mdiv").fadeOut(1400);
    $(".Fullmoondiv").fadeOut(1400);
    setTimeout(function(){
        ymoon.style.width = "100%";
        $(".Ydiv").fadeOut();
        setTimeout(function(){
            $("#Yarapics").fadeIn(1000);
            Yslide();
        },1000)    
    },1000);
   });
  });



  $(document).ready(function(){
    $(".MohamedMoon").click(function(){
    var Mmoon = document.getElementById("MohamedMoon");
    $(".Ydiv").fadeOut(1400);
    $(".Fullmoondiv").fadeOut(1400);
    setTimeout(function(){
        Mmoon.style.width = "100%";
        $(".Mdiv").fadeOut();
        setTimeout(function(){
            $("#Mohamedpics").fadeIn(1000);
            Mslide();
        },1000)    
        
    },1000);
   });
  });

  $(document).ready(function(){
    $(".Fullmoondiv").click(function(){
    var fmoon = document.getElementById("FullMoon");
    $(".Mdiv").fadeOut(1400);
    $(".Ydiv").fadeOut(1400);
    setTimeout(function(){
        fmoon.style.width = "100%";
        $(".Fullmoondiv").fadeOut();
        setTimeout(function(){
            $("#bothpics").fadeIn(1000);
            Bslide();
        },1000)    
    },1000);
   });
  });


  $(document).ready(function(){
    $("#Mohamedpics").click(function(){
    var ymoon = document.getElementById("MohamedMoon");
    var Mmoon = document.getElementById("YaraMoon");
    var fmoon = document.getElementById("FullMoon");
    $("#Mohamedpics").hide();
    $("#Yarapics").hide();
    $("#bothpics").hide();
    $("#mlast").fadeOut(1000);
    $("#ylast").fadeOut(1000);
    $("#blast").fadeOut(1000);
    $(".Mdiv").fadeIn(2000);
    $(".Ydiv").fadeIn(2000);
    $(".Fullmoondiv").fadeIn(2000);
    Mmoon.style.width = "25%";
    ymoon.style.width = "25%";
   });
  });

  $(document).ready(function(){
    $("#Yarapics").click(function(){
    var ymoon = document.getElementById("MohamedMoon");
    var Mmoon = document.getElementById("YaraMoon");
    var fmoon = document.getElementById("FullMoon");
    $("#Mohamedpics").hide();
    $("#Yarapics").hide();
    $("#bothpics").hide();
    $("#mlast").fadeOut(1000);
    $("#ylast").fadeOut(1000);
    $("#blast").fadeOut(1000);
    $(".Mdiv").fadeIn(2000);
    $(".Ydiv").fadeIn(2000);
    $(".Fullmoondiv").fadeIn(2000);
    Mmoon.style.width = "25%";
    ymoon.style.width = "25%";
    fmoon.style.width = "25%";
   });
  });
  $(document).ready(function(){
    $("#bothpics").click(function(){
    var ymoon = document.getElementById("MohamedMoon");
    var Mmoon = document.getElementById("YaraMoon");
    var fmoon = document.getElementById("FullMoon");
    $("#Mohamedpics").hide();
    $("#Yarapics").hide();
    $("#bothpics").hide();
    $("#mlast").fadeOut(1000);
    $("#ylast").fadeOut(1000);
    $("#blast").fadeOut(1000);
    $(".Mdiv").fadeIn(2000);
    $(".Ydiv").fadeIn(2000);
    $(".Fullmoondiv").fadeIn(2000);
    Mmoon.style.width = "25%";
    ymoon.style.width = "25%";
    fmoon.style.width = "25%";
   });
  });

function Mslide(){

    $("#mfirst").fadeIn();
    setTimeout(function(){ 
        $("#mfirst").fadeOut(1000); 
        setTimeout(function(){$("#msecond").fadeIn(1000);},1000)
    },3000)
    setTimeout(function(){ 
        $("#msecond").fadeOut(1000); 
        setTimeout(function(){$("#mthird").fadeIn(1000);},1000)
    },6000)
    setTimeout(function(){ 
        $("#mthird").fadeOut(1000); 
        setTimeout(function(){$("#mfourth").fadeIn(1000);},1000)
    },9000)
    setTimeout(function(){ 
        $("#mfourth").fadeOut(1000); 
        setTimeout(function(){$("#mlast").fadeIn(1000);},1000)
    },12000)
}

function Yslide(){

    $("#yfirst").fadeIn();
    setTimeout(function(){ 
        $("#yfirst").fadeOut(1000); 
        setTimeout(function(){$("#ysecond").fadeIn(1000);},1000)
    },3000);
    setTimeout(function(){ 
        $("#ysecond").fadeOut(1000); 
        setTimeout(function(){$("#ythird").fadeIn(1000);},1000)
    },6000);
    setTimeout(function(){ 
        $("#ythird").fadeOut(1000); 
        setTimeout(function(){$("#yfourth").fadeIn(1000);},1000)
    },9000);
    setTimeout(function(){ 
        $("#yfourth").fadeOut(1000); 
        setTimeout(function(){$("#yfifth").fadeIn(1000);},1000)
    },12000);
    setTimeout(function(){ 
        $("#yfifth").fadeOut(1000); 
        setTimeout(function(){$("#ysixth").fadeIn(1000);},1000)
    },15000);
    setTimeout(function(){ 
        $("#ysixth").fadeOut(1000); 
        setTimeout(function(){$("#yseventh").fadeIn(1000);},1000)
    },18000);
    setTimeout(function(){ 
        $("#yseventh").fadeOut(1000); 
        setTimeout(function(){$("#ylast").fadeIn(1000);},1000)
    },21000);
    
    
}

function Bslide(){

    $("#bfirst").fadeIn();
    setTimeout(function(){ 
        $("#bfirst").fadeOut(1000); 
        setTimeout(function(){$("#bsecond").fadeIn(1000);},1000)
    },3000);
    setTimeout(function(){ 
        $("#bsecond").fadeOut(1000); 
        setTimeout(function(){$("#bthird").fadeIn(1000);},1000)
    },6000);
    setTimeout(function(){ 
        $("#bthird").fadeOut(1000); 
        setTimeout(function(){$("#bfourth").fadeIn(1000);},1000)
    },9000);
    setTimeout(function(){ 
        $("#bfourth").fadeOut(1000); 
        setTimeout(function(){$("#bfifth").fadeIn(1000);},1000)
    },12000);
    setTimeout(function(){ 
        $("#bfifth").fadeOut(1000); 
        setTimeout(function(){$("#bsixth").fadeIn(1000);},1000)
    },15000);
    setTimeout(function(){ 
        $("#bsixth").fadeOut(1000); 
        setTimeout(function(){$("#bseventh").fadeIn(1000);},1000)
    },18000);
    setTimeout(function(){ 
        $("#bseventh").fadeOut(1000); 
        setTimeout(function(){$("#beightth").fadeIn(1000);},1000)
    },21000);
    setTimeout(function(){ 
        $("#beightth").fadeOut(1000); 
        setTimeout(function(){$("#bninth").fadeIn(1000);},1000)
    },24000);
    setTimeout(function(){ 
        $("#bninth").fadeOut(1000); 
        setTimeout(function(){$("#blast").fadeIn(1000);},1000)
    },27000);
    
}
