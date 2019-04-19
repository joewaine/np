$('#navigation__toggle--open').click(function(){


    window.location.href = "https://www.npr.org/music/";


});




$('.share-tools__service--facebook').click(function(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://kind-golick-e2382d.netlify.com/');
    return false;
  });


  $('.share-tools__service--twitter').click(function(){
    window.open('https://twitter.com/share?url=https://kind-golick-e2382d.netlify.com/');
    return false;
  });







$('.button.condensed-playback-button').click(function(){
  var audio = new Audio('where.mp3');
audio.play();
});
