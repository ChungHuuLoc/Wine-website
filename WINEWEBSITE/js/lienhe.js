$(document).ready(function(){

    var yourname= $('#yourname');
    var valid_yourname= $('#valid_yourname');
    
    
    var youremail= $('#youremail');
    var valid_youremail= $('#valid_youremail');
    
    var Subject= $('#Subject');
    var valid_Subject= $('#valid_Subject');
    
    var YourMessage= $('#YourMessage');
    var valid_YourMessage= $('#valid_YourMessage');
    
  
    
    var guidangky = $("#gui");
    
        
    guidangky.click(function(){
            var isvali = true;


            if(yourname.val() == ""){
                isvali = false;
                valid_yourname.text("Bạn phải nhập Your Name");
                yourname.css({'border':'1px solid red'});
            } else {
                valid_yourname.text("");
                yourname.css({'border':'1px solid #a9a9a9'});
            }



    // your mail
            function email_Valid(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              }
    
                if(youremail.val() == ""){
                isvali = false;
                valid_youremail.text("Bạn phải nhập Your Email");
                youremail.css({'border':'1px solid red'});
             } 
             
             else if(!email_Valid(youremail.val())) {
                isvali = false;
                valid_youremail.text("Bạn chưa nhập dúng Your Email");
                youremail.css({'border':'1px solid red'});
            }     
             else {
                valid_youremail.text("");
                youremail.css({'border':'1px solid #a9a9a9'});
            }
    
    // your mail

    
    
            if(Subject.val() == ""){
                isvali = false;
                valid_Subject.text("Bạn phải nhập Subject");
                Subject.css({'border':'1px solid red'});
                
             }                               
             else {
                valid_Subject.text("");
                Subject.css({'border':'1px solid #a9a9a9'});
            }
    
    // 
            
            if(YourMessage.val() == ""){
                isvali = false;
                YourMessage.css({'border':'1px solid red'});
                valid_YourMessage.text("Bạn phải nhập Your Message");
                
             }
                                 
             else {
                valid_YourMessage.text("");
                YourMessage.css({'border':'1px solid #a9a9a9'});
            }
    
    
            
    
    


    
    
            if(isvali){
                $("#gui_lienhe").css({"display": 'none'});
                $('#guimail').html('<p>ĐÃ GỬI EMAIL!</p>');
                $("#guimail").css({"line-height": '198px',"font-size":"30px","color":"#818181"});
    
    
               
            }
            
        });
    
    
    
    
    });