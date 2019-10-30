$(document).ready(function(){

var ten_truoc= $('#tentruoc');
var validtentruoc= $('#valid_tentruoc');


var ten_sau= $('#tensau');
var validten_sau= $('#valid_tensau');

var emaildangky= $('#emaildangky');
var valid_emaildangky= $('#valid_emaildangky');

var passdangky= $('#passdangky');
var valid_passdangky= $('#valid_passdangky');

var matkhau= $('#matkhau');
var valid_matkhau= $('#valid_matkhau');

var xnmatkhau= $('#xnmatkhau');
var valid_xnmatkhau= $('#valid_xnmatkhau');


var guidangky = $("#gui");

    
guidangky.click(function(){
        var isvali = true;
        if(ten_truoc.val() == ""){
            isvali = false;
            validtentruoc.text("Bạn phải nhập Tên Trước");
            ten_truoc.css({'border':'1px solid red'});
        } else {
            validtentruoc.text("");
            ten_truoc.css({'border':'1px solid #a9a9a9'});
        }
        if(ten_sau.val() == ""){
            isvali = false;
            validten_sau.text("Bạn phải nhập Tên sau");
            ten_sau.css({'border':'1px solid red'})
        } else {
            validten_sau.text("");
            ten_sau.css({'border':'1px solid #a9a9a9'});
        }

        function email_Valid(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          }


        if(emaildangky.val() == ""){
            isvali = false;
            valid_emaildangky.text("Bạn phải nhập Email");
            emaildangky.css({'border':'1px solid red'});
         } 
         
         else if(!email_Valid(emaildangky.val())) {
            isvali = false;
            valid_emaildangky.text("Bạn chưa nhập dúng Email");
            emaildangky.css({'border':'1px solid red'});
        }     
         else {
            valid_emaildangky.text("");
            emaildangky.css({'border':'1px solid #a9a9a9'});
        }



        if(passdangky.val() == ""){
            isvali = false;
            valid_passdangky.text("Bạn phải nhập Password");
            passdangky.css({'border':'1px solid red'});
            
         }
         else if(passdangky.val().length < 8) {
                isvali = false;
                valid_passdangky.text("Bạn phải nhập password lớn hơn 8 ký tự");
                passdangky.css({'border':'1px solid red'});
            }                
                
         else {
            valid_passdangky.text("");
            passdangky.css({'border':'1px solid #a9a9a9'});
        }


        // mat khau
        if(matkhau.val() == ""){
            isvali = false;
            matkhau.css({'border':'1px solid red'});
            valid_matkhau.text("Bạn phải nhập Mật Khẩu");
            
         }
         else if(matkhau.val().length < 8) {
                isvali = false;
                matkhau.css({'border':'1px solid red'});
                valid_matkhau.text("Bạn phải nhập Mật Khẩu lớn hơn 8 ký tự"); }
                
         else {
            valid_matkhau.text("");
            matkhau.css({'border':'1px solid #a9a9a9'});
        }

// xac nhan mat khau
        if(xnmatkhau.val() == ""){
            isvali = false;
            xnmatkhau.css({'border':'1px solid red'});
            valid_xnmatkhau.text("Bạn phải nhập Xác nhận mật khẩu");
            
        }
        else if(matkhau.val() != xnmatkhau.val()) {
                isvali = false;
                xnmatkhau.css({'border':'1px solid red'});
                valid_xnmatkhau.text("Mật khẩu xác nhận phải trùng với Mật khẩu ");}
                
        else {
            valid_xnmatkhau.text("");
            xnmatkhau.css({'border':'1px solid #a9a9a9'});
        }


        


console.log(email_Valid(emaildangky.val()));




        if(isvali){
            $("#dangky_form").css({"display": 'none'});
            $('#form-rong').html('<p>ĐĂNG KÝ THÀNH CÔNG!</p>');
            $("#form-rong").css({"line-height": '198px',"font-size":"30px","color":"#818181"});


           
        }
        
    });




});