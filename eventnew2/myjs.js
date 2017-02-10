var main = function(){

    
    var height = $(".gverdi").height();

    $("#wrapper").css("height", height*1.32);


    //$('.playerr').hide();
    //$('.playerr').first().show();
    
    $('#button2').click(function(e){

    	     e.preventDefault();
           
           var activediv = $(".active");
           var nextdiv = activediv.next();

           if(nextdiv.length == 0)
           {
           	  nextdiv = $('.playerr').first();
           }
           activediv.fadeOut(800).removeClass('active');
           nextdiv.fadeIn(800).addClass('active'); 
                            

    });
    $("#button1").click(function(e){

    	   e.preventDefault();

    	   var activediv = $('.active');
    	   var prevdiv = activediv.prev();

    	   if(prevdiv.length == 0)
    	   {
    	   	  prevdiv = $('.playerr').last();
         }
          activediv.fadeOut(800).removeClass('active');
        prevdiv.fadeIn(800).addClass('active');
    	   
    });

    
};
$(document).ready(main);