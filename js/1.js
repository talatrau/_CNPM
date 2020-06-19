function construct() {
    document.getElementById("aboutUs_title").innerHTML = about_us.title;
    document.getElementById("aboutUs_des").innerHTML = about_us.description;
}
if (!String.prototype.format) {
    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
  }
$(function () {       
    $('.menu-home').click(function (e) { 
        e.preventDefault();        
        pos = 0;
        $('html').animate({scrollTop: pos}, 1500, "easeOutBack");
    });
    $('.menu-news').click(function (e) { 
        e.preventDefault();   
        pos = $('.news').offset().top;     
        $('html').animate({scrollTop: pos}, 1500, "easeOutBack");
    });
    $('.menu-menu').click(function (e) { 
        e.preventDefault();   
        pos = $('.menu').offset().top;     
        $('html').animate({scrollTop: pos}, 1500, "easeOutBack");
    });
    $('.menu-about').click(function (e) { 
        e.preventDefault();   
        pos = $('.about-us').offset().top;     
        $('html').animate({scrollTop: pos}, 1500, "easeOutBack");
    });
    construct();
    a = JSON.parse(1);
    console.log(a);
    
});

var about_us = {
    title: "About Us",
    description: "Hoang her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
}


