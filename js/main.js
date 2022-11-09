// let language = window.navigator.language;


    // bind hashchange event
    window.addEventListener('hashchange', _render);



        // handle render
        function _render(){
          var _hash = window.location.hash;
          // en
          if(_hash == "#ar"){



            $("#navItem_1, #navItem_2, #navItem_3, #navItem_4, #navItem_4, #navItem_5, #navItem_6").click(function () {
              location.assign("index.html#ar");
            });


            $('#heroBtn_start, #navBtn_sign_in, .logo-link, #footer_1, #footer_2, #footer_3, #footer_4, #footer_5, #dalel, #privacy, #heroBtn_start_1, #registerquestion, .anti-gold-button').each(function(){ 
              if( !this.hash ) this.hash = "#ar";
          });



          
            $.getJSON("languages/arabic.json", function (dictionary) {
              $.each(dictionary, function (id, text) {
                $("#" + id).html(text);
              });
            });



          }

         
       

        
          
          if(_hash == "#en"){
            


            $('#name').attr('placeholder',
            'Name');
      
            $('#companyname').attr('placeholder',
            'Company Name');
      
            $('#phonenumber').attr('placeholder',
            'Phone Number');
      
            $('#emailaddress').attr('placeholder',
            'E-mail Address');
            
            $('#login').attr('value',
            'Login');

            $('#password').attr('value',
            'Password');

            $("#navItem_1, #navItem_2, #navItem_3, #navItem_4, #navItem_4, #navItem_5, #navItem_6").click(function () {
              location.assign("index.html#en");
            });

            $('#heroBtn_start, #navBtn_sign_in, .logo-link, #footer_1, #footer_2, #footer_3, #footer_4, #footer_5, #dalel, #privacy, #heroBtn_start_1, #registerquestion, .anti-gold-button').each(function(){ 
              if( !this.hash ) this.hash = "#en";

              
          });


            $.getJSON("languages/english.json", function (dictionary) {
              $.each(dictionary, function (id, text) {
                $("#" + id).html(text);
              });
              
              

             
            

              header.style.direction = "rtl";
              hero.style.direction = "rtl";
              herotext.style.textAlign = "left";
              heroimg.style.transform = "rotate(180deg)";
              firstSection.style.direction = "rtl";
              servicesText.style.textAlign = "left";
              processSection.style.direction = "rtl";
              processList.style.textAlign = "left";
              featuresSection.style.direction = "rtl";
              specialTitle.style.direction = "initial";
              specialTitle.style.textAlign = "left";
              steplist.style.direction = "rtl";
              stepline.style.right = "130px";
              stepList.scrollTo(-1000, stepList.scrollTop);
              document.getElementById("gateway_4").style.direction = "ltr";
        




            });


          }
          
    
      }
  

      
                
      // init
      _render();
  

      $(window).on('hashchange', function() {



      });

    

/*
      window.onload = function() {
        if(window.location.hash == 'ar') {
            window.location = window.location + 'ar';
            window.location.reload();
        }
    }
*/
  
    

    

$(document).ready(function () {
  var language = "arabic";
 
  $("#navBtn_translate").click(function () {

    language = language === "arabic" ? "english" : "arabic";
    if (language === "arabic") {
      window.location.hash='ar';

      window.location.reload(true);
      
      
      $('#heroBtn_start, #navBtn_sign_in, .logo-link, #footer_1, #footer_2, #footer_3, #footer_4, #footer_5, #dalel, #privacy, #heroBtn_start_1, #registerquestion, .anti-gold-button').each(function(){ 
        if( !this.hash ) this.hash = "#ar";

    });
      
   } else if (language === "english") {

      window.location.hash='en';


  /*
      $('#navItem_1, #navItem_2, #navItem_3, #navItem_4, #navItem_5, ').each(function(){ 
        if( !this.hash ) this.hash = "#en";
        

    });
*/


      $('#heroBtn_start, #navBtn_sign_in, .logo-link, #footer_1, #footer_2, #footer_3, #footer_4, #footer_5, #dalel, #privacy, #heroBtn_start_1, #registerquestion, .anti-gold-button').each(function(){ 
        if( !this.hash ) this.hash = "#en";
        

    });
     

    
    
    }
    
    
    

  

 
  });


});

/*
$(document).ready(function () {
 
$("#navBtn_translate").click(function () {

  language = language === "english";
  if (language === "english") {

    window.location.reload(true);
    
} 

});
});
*/