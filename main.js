//start contact
var fname=document.getElementById('in'),
    email=document.getElementById('in1'),
    msg=document.getElementById('in2');
    fname.onfocus=function(){
        fname.placeholder=''
    }
    fname.onblur=function(){
        fname.placeholder='enter your name'
    }
    email.onfocus=function(){
        email.placeholder=''
    }
    email.onblur=function(){
        email.placeholder='enter your email'
    }
    msg.onfocus=function(){
        msg.placeholder=''
    }
    msg.onblur=function(){
        msg.placeholder='enter your message'
    }
    // end contact
$(document).ready(function(){
    // start navbar
    $(".navbarr li ").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    //end navbar
    // start properties
    $(".properties .pro ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        // end class="active"
    })
    $
})
// start properties
var App = new Vue({
    el : ".properties",
    data:{
        load :false,
        p :"and typesetting industry. Lorem Ipsum has been the industry d typesetting industry. Lorem Ipsum has been the industrs" 
            
    },
})
//end properties