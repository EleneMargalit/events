var main = function(){
   
    /*if($(window).width() > 944)
    {
        $('.header .menuicon').click(function(e){
       	   
            e.preventDefault();
           
            $('section.innerwrapper').fadeIn(600).css("display", "block");           
          
       	    $('.header .menuicon').css('opacity', '.1');

       	    $('.innerwrapper .innerwrapperul li:first-child').delay(200).animate({'opacity': '1'}, 800);
      
            $('.innerwrapper .innerwrapperul li:nth-child(2)').delay(500).animate({'opacity': '1'}, 800);
       
            $('.innerwrapper .innerwrapperul li:nth-child(3)').delay(800).animate({'opacity': '1'}, 800);

            $('.innerwrapper .innerwrapperul li:nth-child(4)').delay(1100).animate({'opacity': '1'}, 800);

            $('.innerwrapper .innerwrapperul li:nth-child(5)').delay(1400).animate({'opacity': '1'}, 800);
        });

        $(".innerwrapper .x").click(function(e){
            
            e.preventDefault();
           
            $('section.innerwrapper').fadeOut(600);
            
            $('.header .menuicon').css('opacity', '1');

            $('.innerwrapper .innerwrapperul li:first-child').animate({'opacity': '0'}, 10);
      
            $('.innerwrapper .innerwrapperul li:nth-child(2)').animate({'opacity': '0'}, 10);
       
            $('.innerwrapper .innerwrapperul li:nth-child(3)').animate({'opacity': '0'}, 10);

            $('.innerwrapper .innerwrapperul li:nth-child(4)').animate({'opacity': '0'}, 10);

            $('.innerwrapper .innerwrapperul li:nth-child(5)').animate({'opacity': '0'}, 10);
        });
    }
    else
    {      

        $('.header .menuicon').click(function(e){
         
          e.preventDefault();

          $('section.innerwrapper').animate({'left': '0'}, 400);    
        
          $('.header .menuicon').css('opacity', '.1');

          $('.innerwrapper .innerwrapperul li:first-child').delay(200).animate({'opacity': '1'}, 500);
      
          $('.innerwrapper .innerwrapperul li:nth-child(2)').delay(500).animate({'opacity': '1'}, 500);
       
          $('.innerwrapper .innerwrapperul li:nth-child(3)').delay(800).animate({'opacity': '1'}, 500);

          $('.innerwrapper .innerwrapperul li:nth-child(4)').delay(1100).animate({'opacity': '1'}, 500);

          $('.innerwrapper .innerwrapperul li:nth-child(5)').delay(1400).animate({'opacity': '1'}, 500);
        });

         $(".innerwrapper .x").click(function(e){
            
            e.preventDefault();
           
            $('section.innerwrapper').animate({'left': '-50%'}, 400); 
            
            $('.header .menuicon').css('opacity', '1');

            $('.innerwrapper .innerwrapperul li:first-child').animate({'opacity': '0'}, 10);
      
            $('.innerwrapper .innerwrapperul li:nth-child(2)').animate({'opacity': '0'}, 10);
       
            $('.innerwrapper .innerwrapperul li:nth-child(3)').animate({'opacity': '0'}, 10);

            $('.innerwrapper .innerwrapperul li:nth-child(4)').animate({'opacity': '0'}, 10);

            $('.innerwrapper .innerwrapperul li:nth-child(5)').animate({'opacity': '0'}, 10);
        });
    }*/

    $('.header .mynav .firstul li a').click(function(e){

       e.preventDefault();

       $('.header .mynav .firstul li a').removeClass('activee');

       $(this).addClass('activee');
    });

    $('.innerwrapperfooter .innerwrapperfooterul li a').click(function(e){

      e.preventDefault();

      $('.innerwrapper .innerwrapperfooter .innerwrapperfooternav ul li a.activeeee').removeClass('activeeee');

      $(this).addClass('activeeee');
    })

    $(".innerwrapper .innerwrapperul li > a").click(function(e){

         e.preventDefault();
         
         id = $(this).attr("class");

         if (id === "wrapper1link")
         {
             $('section.innerwrapper').fadeOut(600);        
             $('body #nav-icon4').toggleClass("open");
         }

         id = id.replace("link", "");

         console.log(id);

         $('html, body').animate({scrollTop: $("#" + id).offset().top}, 1200);

    }); 

    $("#wrapper1 .main .mainnav .mainnavul > li > a").click(function(e){

      e.preventDefault();

      $(this).next().addClass("activeee");
     
    });

    $(".populareventsul .musika a").click(function(e){

      e.preventDefault();

      $(".populareventsshidaul").toggleClass("activeshida");
   });

   $(".populareventsul .tarigi a").click(function(e){

      e.preventDefault();

      $(".populareventsshidaul2").toggleClass("activeshida");
   });   

   $('#wrapper4 .wrapper4wrapperinner .inner3 a').click(function(e){

      e.preventDefault();
      
      $('#wrapper4 .addevent').fadeIn(500).css("display", "block");

      $('#wrapper4 .wrapper4wrapperinner .inner2 .inner2inner p').css("opacity", ".2");

   });   

   $("#wrapper4 .addevent a").click(function(e){
      
      e.preventDefault();

      $('#wrapper4 .addevent').fadeOut(500);

      $('#wrapper4 .wrapper4wrapperinner .inner2 .inner2inner p').css("opacity", "1");

   });
   $("#wrapper3 a.showmenu").click(function(e){

      e.preventDefault();     

      $("#wrapper3 a.showmenu").fadeOut(500).css("display", "none");

      $("#wrapper3 a.hidemenu").fadeIn(100).css("display", "block");

      $("#wrapper3 a.hidemenu").css("z-index", "99999");

      $("#wrapper3 a.hidemenu").show();

      $("#wrapper3 .music").animate({"width": "30%"}, {queue: false, duration: 700}).animate({"height": "33.3333333%"}, 700);    

      $("#wrapper3 .music").css("display", "block");

      $("#wrapper3 .music").css("z-index", "9999");

      $("#wrapper3 .music .musicshida").css("margin-top", "15%");

      $("#wrapper3 .music .musicshida2").css("margin-top", "15%");

      $("#wrapper3 .ganatleba").animate({"width": "30%"}, 300); 

      $("#wrapper3 .sakvebi").animate({"left": "0"}, 1000);  
      
      $("#wrapper3 .sakvebi").css("width", "30%");

      $("#wrapper3 .sakvebi").css("height", "calc(100%/3)");

      $("#wrapper3 .sakvebi").css("top", "calc(100%/3");

      $("#wrapper3 .sakvebi").css("z-index", "99999");

      $("#wrapper3 .sakvebi .sakvebishida").css("margin-top", "16%");

      $("#wrapper3 .sakvebi .sakvebishida2").css("margin-top", "16%");     

      $("#wrapper3 .ganatleba").css("top", "calc(2*(100%/3))");

      $("#wrapper3 .ganatleba").css("left", "0");   

      $("#wrapper3 .ganatleba").css("height", "calc(100%/3)");  

      $("#wrapper3 .ganatleba").css("display", "block");

      $("#wrapper3 .ganatleba").css("z-index", "9999");

      $("#wrapper3 .ganatleba .ganatlebashida").css("margin-top", "18%");

      $("#wrapper3 .ganatleba .ganatlebashida2").css("margin-top", "18%");      

      $("#wrapper3 .xelovneba").animate({"width": "30%"}, 1200);

      $("#wrapper3 .xelovneba").css("height", "calc(100%/3)");

      $("#wrapper3 .xelovneba").css("display", "block");

      $("#wrapper3 .xelovneba").css("z-index", "9999");

      $("#wrapper3 .xelovneba .xelovnebashida").css("margin-top", "15%");

      $("#wrapper3 .xelovneba .xelovnebashida2").css("margin-top", "15%");

      $("#wrapper3 .sporti").css("width", "30%");

      $("#wrapper3 .sporti").animate({"right": "0"}, 50);

      $("#wrapper3 .sporti").animate({"height": "33.333333333333%"}, 600);     

      $("#wrapper3 .sporti").css("top", "calc(100%/3)");   

      $("#wrapper3 .sporti").css("display", "block");

      $("#wrapper3 .sporti .sportishida").css("margin-top", "15%");

      $("#wrapper3 .sporti .sportishida2").css("margin-top", "15%");  

      $("#wrapper3 .dasveneba").animate({"left": "70%"}, 1400);

      $("#wrapper3 .dasveneba").css("top", "calc(2*(100%/3))");

      $("#wrapper3 .dasveneba").css("height", "calc(100%/3)");

      $("#wrapper3 .dasveneba").css("width", "30%");

      $("#wrapper3 .dasveneba").css("z-index", "9999");

      $("#wrapper3 .dasveneba .dasvenebashida").css("margin-top", "16%");

      $("#wrapper3 .dasveneba .dasvenebashida2").css("margin-top", "16%");

      $("#wrapper3 .wrapper3inner").fadeIn(300).css("display", "block");

      $("#wrapper3 .wrapper3inner").css("z-index", "0");

      $('.wrapper3inner .wrapper3innerul li:first-child').delay(100).animate({'opacity': '1'}, 200);
        
      $('.wrapper3inner .wrapper3innerul li:nth-child(2)').delay(300).animate({'opacity': '1'}, 200);
         
      $('.wrapper3inner .wrapper3innerul li:nth-child(3)').delay(500).animate({'opacity': '1'}, 200);

      $('.wrapper3inner .wrapper3innerul li:nth-child(4)').delay(700).animate({'opacity': '1'}, 200);

      $('.wrapper3inner .wrapper3innerul li:nth-child(5)').delay(900).animate({'opacity': '1'}, 200);
   });

      $("#wrapper3 a.hidemenu").click(function(e){

        e.preventDefault();

        $("#wrapper3 .wrapper3inner").hide();

        $("#wrapper3 a.hidemenu").fadeOut(500).css("display", "none");

        $("#wrapper3 a.hidemenu").css("z-index", "0");

        $("#wrapper3 a.showmenu").fadeIn(500).css("display", "block");

        $("#wrapper3 a.showmenu").css("z-index", "99999");

        $("#wrapper3 .music").animate({"width": "46%"}, {queue: false, duration: 900}).animate({"height": "66%"}, 900);

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 300);

        $("#wrapper3 .xelovneba").animate({"width": "54%"}, 500); 

        $("#wrapper3 .music").css("height", "66%");

        $("#wrapper3 .music").css("display", "inline-block");

        $("#wrapper3 .music .musicshida").css("margin-top", "30%");

        $("#wrapper3 .music .musicshida2").css("margin-top", "30%");

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 500);   

        $("#wrapper3 .ganatleba").css("top", "66%");

        $("#wrapper3 .ganatleba").css("left", "0");   

        $("#wrapper3 .ganatleba").css("height", "34%");  

        $("#wrapper3 .ganatleba").css("display", "inline-block");

        $("#wrapper3 .ganatleba .ganatlebashida").css("margin-top", "13%");

        $("#wrapper3 .ganatleba .ganatlebashida2").css("margin-top", "13%");

        $("#wrapper3 .sakvebi").animate({"left": "46%"}, 900);  
        
        $("#wrapper3 .sakvebi").css("width", "25%");

        $("#wrapper3 .sakvebi").css("height", "33%");

        $("#wrapper3 .sakvebi").css("top", "33%");      

        $("#wrapper3 .xelovneba").css("height", "33%");

        $("#wrapper3 .xelovneba").css("display", "inline-block");

        $("#wrapper3 .xelovneba .xelovnebashida").css("margin-top", "8%");

        $("#wrapper3 .xelovneba .xelovnebashida2").css("margin-top", "8%");

        $("#wrapper3 .sporti").css("width", "29%");

        $("#wrapper3 .sporti").animate({"right": "0"}, 100);

        $("#wrapper3 .sporti").animate({"height": "67%"}, 1100);

        $("#wrapper3 .sporti").css("top", "33%");   

        $("#wrapper3 .sporti").css("display", "inline-block");  

        $("#wrapper3 .sporti .sportishida").css("margin-top", "40%"); 

        $("#wrapper3 .sporti .sportishida2").css("margin-top", "40%"); 

        $("#wrapper3 .dasveneba").animate({"left": "39%"}, 900);

        $("#wrapper3 .dasveneba").css("top", "66%");

        $("#wrapper3 .dasveneba").css("height", "34%");

        $("#wrapper3 .dasveneba").css("width", "32%");

        $("#wrapper3 .dasveneba .dasvenebashida").css("margin-top", "15%");

        $("#wrapper3 .dasveneba .dasvenebashida2").css("margin-top", "15%");

        $('.wrapper3inner .wrapper3innerul li:first-child').animate({'opacity': '0'}, 100);
      
        $('.wrapper3inner .wrapper3innerul li:nth-child(2)').animate({'opacity': '0'}, 100);
       
        $('.wrapper3inner .wrapper3innerul li:nth-child(3)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(4)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(5)').animate({'opacity': '0'}, 100);
   }); 

   $('.innerwrapper .innerwrapperul li:first-child').click(function(e){
        
        e.preventDefault();

       ('#nav-icon4').removeClass('open');

   });

   $('#nav-icon4').click(function(e){

    e.preventDefault();

    $(this).toggleClass('open');    

    e.preventDefault();

    if($(window).width() > 944)
    {
       if( $(this).hasClass("open"))
       {               
          $('section.innerwrapper').fadeIn(600).css("display", "block");           
                
          $('.header .menuicon').css('opacity', '.1');

          $('.innerwrapper .innerwrapperul li:first-child').delay(200).animate({'opacity': '1'}, 800);
            
          $('.innerwrapper .innerwrapperul li:nth-child(2)').delay(500).animate({'opacity': '1'}, 800);
             
          $('.innerwrapper .innerwrapperul li:nth-child(3)').delay(800).animate({'opacity': '1'}, 800);

          $('.innerwrapper .innerwrapperul li:nth-child(4)').delay(1100).animate({'opacity': '1'}, 800);

          $('.innerwrapper .innerwrapperul li:nth-child(5)').delay(1400).animate({'opacity': '1'}, 800);
        }
        else
        {
           $('section.innerwrapper').fadeOut(600);
                
           $('.header .menuicon').css('opacity', '1');

           $('.innerwrapper .innerwrapperul li:first-child').animate({'opacity': '0'}, 10);
          
           $('.innerwrapper .innerwrapperul li:nth-child(2)').animate({'opacity': '0'}, 10);
           
           $('.innerwrapper .innerwrapperul li:nth-child(3)').animate({'opacity': '0'}, 10);

           $('.innerwrapper .innerwrapperul li:nth-child(4)').animate({'opacity': '0'}, 10);

           $('.innerwrapper .innerwrapperul li:nth-child(5)').animate({'opacity': '0'}, 10);
        }
    }
    else
    {
       if($(this).hasClass("open"))
       {
           $('section.innerwrapper').animate({'left': '0'}, 400);    
          
            $('.header .menuicon').css('opacity', '.1');

            $('.innerwrapper .innerwrapperul li:first-child').delay(200).animate({'opacity': '1'}, 500);
        
            $('.innerwrapper .innerwrapperul li:nth-child(2)').delay(500).animate({'opacity': '1'}, 500);
         
            $('.innerwrapper .innerwrapperul li:nth-child(3)').delay(800).animate({'opacity': '1'}, 500);

            $('.innerwrapper .innerwrapperul li:nth-child(4)').delay(1100).animate({'opacity': '1'}, 500);

            $('.innerwrapper .innerwrapperul li:nth-child(5)').delay(1400).animate({'opacity': '1'}, 500);
       }
       else
       {            
              $('section.innerwrapper').animate({'left': '-50%'}, 400); 
              
              $('.header .menuicon').css('opacity', '1');

              $('.innerwrapper .innerwrapperul li:first-child').animate({'opacity': '0'}, 10);
        
              $('.innerwrapper .innerwrapperul li:nth-child(2)').animate({'opacity': '0'}, 10);
         
              $('.innerwrapper .innerwrapperul li:nth-child(3)').animate({'opacity': '0'}, 10);

              $('.innerwrapper .innerwrapperul li:nth-child(4)').animate({'opacity': '0'}, 10);

              $('.innerwrapper .innerwrapperul li:nth-child(5)').animate({'opacity': '0'}, 10);
      }
    }

  });

  $('#nav-icon42').click(function(e){

    e.preventDefault();

    $(this).toggleClass('open');  

    if($(this).hasClass("open"))
    {      

      $("#nav-icon42 ").css("z-index", 99999);  

      $("#wrapper3 .music").animate({"width": "30%"}, {queue: false, duration: 700}).animate({"height": "33.3333333%"}, 700);    

      $("#wrapper3 .music").css("display", "block");

      $("#wrapper3 .music").css("z-index", "9999");

      $("#wrapper3 .music .musicshida").css("margin-top", "15%");

      $("#wrapper3 .music .musicshida2").css("margin-top", "15%");

      $("#wrapper3 .ganatleba").animate({"width": "30%"}, 500); 

      $("#wrapper3 .sakvebi").animate({"left": "0"}, 700);  
      
      $("#wrapper3 .sakvebi").css("width", "30%");

      $("#wrapper3 .sakvebi").css("height", "calc(100%/3)");

      $("#wrapper3 .sakvebi").css("top", "calc(100%/3");

      $("#wrapper3 .sakvebi").css("z-index", "99999");

      $("#wrapper3 .sakvebi .sakvebishida").css("margin-top", "16%");

      $("#wrapper3 .sakvebi .sakvebishida2").css("margin-top", "16%");     

      $("#wrapper3 .ganatleba").css("top", "calc(2*(100%/3))");

      $("#wrapper3 .ganatleba").css("left", "0");   

      $("#wrapper3 .ganatleba").css("height", "calc(100%/3)");  

      $("#wrapper3 .ganatleba").css("display", "block");

      $("#wrapper3 .ganatleba").css("z-index", "9999");

      $("#wrapper3 .ganatleba .ganatlebashida").css("margin-top", "18%");

      $("#wrapper3 .ganatleba .ganatlebashida2").css("margin-top", "18%");      

      $("#wrapper3 .xelovneba").animate({"width": "30%"}, 700);

      $("#wrapper3 .xelovneba").css("height", "calc(100%/3)");

      $("#wrapper3 .xelovneba").css("display", "block");

      $("#wrapper3 .xelovneba").css("z-index", "9999");

      $("#wrapper3 .xelovneba .xelovnebashida").css("margin-top", "15%");

      $("#wrapper3 .xelovneba .xelovnebashida2").css("margin-top", "15%");

      $("#wrapper3 .sporti").css("width", "30%");

      $("#wrapper3 .sporti").animate({"right": "0"}, 50);

      $("#wrapper3 .sporti").animate({"height": "33.333333333333%"}, 600);     

      $("#wrapper3 .sporti").css("top", "calc(100%/3)");   

      $("#wrapper3 .sporti").css("display", "block");

      $("#wrapper3 .sporti .sportishida").css("margin-top", "15%");

      $("#wrapper3 .sporti .sportishida2").css("margin-top", "15%");  

      $("#wrapper3 .dasveneba").animate({"left": "70%"}, 900);

      $("#wrapper3 .dasveneba").css("top", "calc(2*(100%/3))");

      $("#wrapper3 .dasveneba").css("height", "calc(100%/3)");

      $("#wrapper3 .dasveneba").css("width", "30%");

      $("#wrapper3 .dasveneba").css("z-index", "9999");

      $("#wrapper3 .dasveneba .dasvenebashida").css("margin-top", "16%");

      $("#wrapper3 .dasveneba .dasvenebashida2").css("margin-top", "16%");

      $("#wrapper3 .wrapper3inner").fadeIn(300).css("display", "block");

      $("#wrapper3 .wrapper3inner").css("z-index", "0");

      $('.wrapper3inner .wrapper3innerul li:first-child').delay(100).animate({'opacity': '1'}, 200);
          
      $('.wrapper3inner .wrapper3innerul li:nth-child(2)').delay(300).animate({'opacity': '1'}, 200);
           
      $('.wrapper3inner .wrapper3innerul li:nth-child(3)').delay(500).animate({'opacity': '1'}, 200);

      $('.wrapper3inner .wrapper3innerul li:nth-child(4)').delay(700).animate({'opacity': '1'}, 200);

      $('.wrapper3inner .wrapper3innerul li:nth-child(5)').delay(900).animate({'opacity': '1'}, 200);
    
    }
    else  
    {
        $("#wrapper3 .wrapper3inner").hide();

        $("#wrapper3 a.hidemenu").fadeOut(500).css("display", "none");

        $("#wrapper3 a.hidemenu").css("z-index", "0");

        $("#wrapper3 a.showmenu").fadeIn(500).css("display", "block");

        $("#wrapper3 a.showmenu").css("z-index", "99999");

        $("#wrapper3 .music").animate({"width": "46%"}, {queue: false, duration: 900}).animate({"height": "66%"}, 900);

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 300);

        $("#wrapper3 .xelovneba").animate({"width": "54%"}, 500); 

        $("#wrapper3 .music").css("height", "66%");

        $("#wrapper3 .music").css("display", "inline-block");

        $("#wrapper3 .music .musicshida").css("margin-top", "30%");

        $("#wrapper3 .music .musicshida2").css("margin-top", "30%");

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 500);   

        $("#wrapper3 .ganatleba").css("top", "66%");

        $("#wrapper3 .ganatleba").css("left", "0");   

        $("#wrapper3 .ganatleba").css("height", "34%");  

        $("#wrapper3 .ganatleba").css("display", "inline-block");

        $("#wrapper3 .ganatleba .ganatlebashida").css("margin-top", "13%");

        $("#wrapper3 .ganatleba .ganatlebashida2").css("margin-top", "13%");

        $("#wrapper3 .sakvebi").animate({"left": "46%"}, 900);  
        
        $("#wrapper3 .sakvebi").css("width", "25%");

        $("#wrapper3 .sakvebi").css("height", "33%");

        $("#wrapper3 .sakvebi").css("top", "33%");      

        $("#wrapper3 .xelovneba").css("height", "33%");

        $("#wrapper3 .xelovneba").css("display", "inline-block");

        $("#wrapper3 .xelovneba .xelovnebashida").css("margin-top", "8%");

        $("#wrapper3 .xelovneba .xelovnebashida2").css("margin-top", "8%");

        $("#wrapper3 .sporti").css("width", "29%");

        $("#wrapper3 .sporti").animate({"right": "0"}, 100);

        $("#wrapper3 .sporti").animate({"height": "67%"}, 1100);

        $("#wrapper3 .sporti").css("top", "33%");   

        $("#wrapper3 .sporti").css("display", "inline-block");  

        $("#wrapper3 .sporti .sportishida").css("margin-top", "40%"); 

        $("#wrapper3 .sporti .sportishida2").css("margin-top", "40%"); 

        $("#wrapper3 .dasveneba").animate({"left": "39%"}, 900);

        $("#wrapper3 .dasveneba").css("top", "66%");

        $("#wrapper3 .dasveneba").css("height", "34%");

        $("#wrapper3 .dasveneba").css("width", "32%");

        $("#wrapper3 .dasveneba .dasvenebashida").css("margin-top", "15%");

        $("#wrapper3 .dasveneba .dasvenebashida2").css("margin-top", "15%");

        $('.wrapper3inner .wrapper3innerul li:first-child').animate({'opacity': '0'}, 100);
      
        $('.wrapper3inner .wrapper3innerul li:nth-child(2)').animate({'opacity': '0'}, 100);
           
        $('.wrapper3inner .wrapper3innerul li:nth-child(3)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(4)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(5)').animate({'opacity': '0'}, 100);
        }       
  });

  var mn = $("#wrapper3");
  mns = "main-nav-scrolled";

  $(window).scroll(function() {


    if($(window).width() >= 1101)
    {
        if( $(this).scrollTop() > $(window).height() + 1080) 
        {
          mn.addClass(mns);
        } 
        else 
        {
          mn.removeClass(mns);
        }
    }
    else if($(window).width() >= 944)
    {
        if($(this).scrollTop() > $(window).height() + 1900) 
        {
          mn.addClass(mns);
        } 
        else 
        {
          mn.removeClass(mns);
        }
    }

  });

  /*  var mn1 = $("#wrapper1 .main .mainnav");
    mns1 = "main-nav-scrolled1";

  $(window).scroll(function() {
    if( $(this).scrollTop() > 400 && $(this).scrollTop() < 550) {
      mn1.fadeIn(800);
      mn1.addClass(mns1);
    } 
    else if($(this).scrollTop() > 550)
      {
         mn1.fadeOut(800);
      }
      else {
      mn1.removeClass(mns1);
    }
  });*/
  
    $('div#nav-icon43.open').click(function(e)
  {
        e.preventDefault();

        $('div#nav-icon42').toggleClass('open');

        $("#wrapper3 .wrapper3inner").fadeOut(300);

        $("#wrapper3 a.hidemenu").fadeOut(500).css("display", "none");

        $("#wrapper3 a.hidemenu").css("z-index", "0");

        $("#wrapper3 a.showmenu").fadeIn(500).css("display", "block");

        $("#wrapper3 a.showmenu").css("z-index", "99999");

        $("#wrapper3 .music").animate({"width": "46%"}, {queue: false, duration: 900}).animate({"height": "66%"}, 900);

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 300);

        $("#wrapper3 .xelovneba").animate({"width": "54%"}, 500); 

        $("#wrapper3 .music").css("height", "66%");

        $("#wrapper3 .music").css("display", "inline-block");

        $("#wrapper3 .music .musicshida").css("margin-top", "30%");

        $("#wrapper3 .music .musicshida2").css("margin-top", "30%");

        $("#wrapper3 .ganatleba").animate({"width": "39%"}, 500);   

        $("#wrapper3 .ganatleba").css("top", "66%");

        $("#wrapper3 .ganatleba").css("left", "0");   

        $("#wrapper3 .ganatleba").css("height", "34%");  

        $("#wrapper3 .ganatleba").css("display", "inline-block");

        $("#wrapper3 .ganatleba .ganatlebashida").css("margin-top", "13%");

        $("#wrapper3 .ganatleba .ganatlebashida2").css("margin-top", "13%");

        $("#wrapper3 .sakvebi").animate({"left": "46%"}, 900);  
        
        $("#wrapper3 .sakvebi").css("width", "25%");

        $("#wrapper3 .sakvebi").css("height", "33%");

        $("#wrapper3 .sakvebi").css("top", "33%");      

        $("#wrapper3 .xelovneba").css("height", "33%");

        $("#wrapper3 .xelovneba").css("display", "inline-block");

        $("#wrapper3 .xelovneba .xelovnebashida").css("margin-top", "8%");

        $("#wrapper3 .xelovneba .xelovnebashida2").css("margin-top", "8%");

        $("#wrapper3 .sporti").css("width", "29%");

        $("#wrapper3 .sporti").animate({"right": "0"}, 100);

        $("#wrapper3 .sporti").animate({"height": "67%"}, 1100);

        $("#wrapper3 .sporti").css("top", "33%");   

        $("#wrapper3 .sporti").css("display", "inline-block");  

        $("#wrapper3 .sporti .sportishida").css("margin-top", "40%"); 

        $("#wrapper3 .sporti .sportishida2").css("margin-top", "40%"); 

        $("#wrapper3 .dasveneba").animate({"left": "39%"}, 900);

        $("#wrapper3 .dasveneba").css("top", "66%");

        $("#wrapper3 .dasveneba").css("height", "34%");

        $("#wrapper3 .dasveneba").css("width", "32%");

        $("#wrapper3 .dasveneba .dasvenebashida").css("margin-top", "15%");

        $("#wrapper3 .dasveneba .dasvenebashida2").css("margin-top", "15%");

        $('.wrapper3inner .wrapper3innerul li:first-child').animate({'opacity': '0'}, 100);
      
        $('.wrapper3inner .wrapper3innerul li:nth-child(2)').animate({'opacity': '0'}, 100);
       
        $('.wrapper3inner .wrapper3innerul li:nth-child(3)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(4)').animate({'opacity': '0'}, 100);

        $('.wrapper3inner .wrapper3innerul li:nth-child(5)').animate({'opacity': '0'}, 100);     
        
  });

  $.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function()
  {
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function()
  {
    var scrollTop = $window.scrollTop();

    instances.forEach(function(inst)
    {
      inst.update(scrollTop);
    });
    }
  }

  var moveItItem = function(el)
  {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };

  moveItItem.prototype.update = function(scrollTop)
  {
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
  };

  $(function()
  {
    $('[data-scroll-speed]').moveIt();
  });
  
  $("#wrapper3 .link").click(function(e){

    e.preventDefault();
    
    $("html, body").animate({scrollTop: $("#wrapper2").offset().top}, 1000);

    var name = $(this).attr("id");

    console.log(name);

    $("#wrapper2 .populareventsheader .populareventsnav .populareventsul .musika > a").text(name);

  })

  $("#wrapper2 .populareventsheader .populareventsnav .populareventsul li.musika ul li a").click(function(){

    var name2 = $(this).text();

     $("#wrapper2 .populareventsheader .populareventsnav .populareventsul .musika > a").text(name2);
  })
  
  $("#wrapper2 .populareventsheader .populareventsnav .populareventsul li.tarigi ul li a").click(function(){

    var name2 = $(this).text();

     $("#wrapper2 .populareventsheader .populareventsnav .populareventsul .tarigi > a").text(name2);
  })

  $("#wrapper1 .main .mainnav .mainnavul li.meore ul li a").click(function(e){

    e.preventDefault();

    var name2 = $(this).text();

    $("html, body").animate({scrollTop: $("#wrapper2").offset().top}, 1000);

    $("#wrapper2 .populareventsheader .populareventsnav .populareventsul .musika > a").text(name2);
  })

};
$(document).ready(main);