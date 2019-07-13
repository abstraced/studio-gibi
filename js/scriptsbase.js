//////////////IIFE,
var filmRepository=(function () {

loadListfromApi() {


}
displaytothedomandevent aka modalContainer
globalevent


}



  return {
// function

  };



  })();

//////////////Before (function() {
  'use strict';

}());
console.log("test");

//    Jquery request







var $listFilm=$('.ListofFilms');
var $modal_container= $('.modal-container');

// get the list of object from the API
var $filmList =$.ajax('https://ghibliapi.herokuapp.com/films', { dataType: 'json' })
.then(function (responseJSON) {
  // for each object in the list create a li class and an eventListener
  $(responseJSON).each(function(i){


    //  Create the list and the events
    var $newElement = $('<li  > <button class="button">' + responseJSON[i].title   +'</button></li>')
    .click(function() {
      $modal_container.addClass('is-visible');

      // Create the modal elements
      var closeButtonElement= $('<button class="modal-close" > Close </button>').click(function(){
        hideModal();
      });
      var title=$('<div class="Title">  Title:   '+ responseJSON[i].title +'</div>' );
      var director=$('<div class="Director">  Director:   '+ responseJSON[i].director +'</div>' );
      var description=$('<div class="Description"> Description:   '+ responseJSON[i].description +'</div>' );


      //Delete the previous content
      $modal_container.empty();


      //Append it to the container
      $($modal_container).append(closeButtonElement);
      $($modal_container).append(title);
      $($modal_container).append(director);
      $($modal_container).append(description);







      console.log(responseJSON[i]);


    });;


    // add the elements to the list
    $($listFilm).append($newElement);

  });


});




function hideModal () {

$($modal_container).removeClass("is-visible");

}





// var $listFilm=$('.ListofFilms');
// var $modal_container= $('.modal-container');
//
// // get the list of object from the API
// var $filmList =$.ajax('https://ghibliapi.herokuapp.com/films', { dataType: 'json' })
// .then(function (responseJSON) {
//   // for each object in the list create a li class and an eventListener
//   $(responseJSON).each(function(i){
//
//
//     //  Create the list and the events
//     var $newElement = $('<li  > <button class="button">' + responseJSON[i].title   +'</button></li>')
//     .click(function() {
//       $modal_container.addClass('is-visible');
//
//       // Create the modal elements
//       var closeButtonElement= $('<button class="modal-close" > Close </button>').click(function(){
//         hideModal();
//       });
//       var title=$('<div class="Title">  Title:   '+ responseJSON[i].title +'</div>' );
//       var director=$('<div class="Director">  Director:   '+ responseJSON[i].director +'</div>' );
//       var description=$('<div class="Description"> Description:   '+ responseJSON[i].description +'</div>' );
//
//
//       //Delete the previous content
//       $modal_container.empty();
//
//
//       //Append it to the container
//       $($modal_container).append(closeButtonElement);
//       $($modal_container).append(title);
//       $($modal_container).append(director);
//       $($modal_container).append(description);
//
//
//
//
//
//
//
//       console.log(responseJSON[i]);
//
//
//     });;
//
//
//     // add the elements to the list
//     $($listFilm).append($newElement);
//
//   });
//
//   // This is the parsed JSON response
// });
//
//
//
//
// function hideModal () {
//
// $($modal_container).removeClass("is-visible");
//
// }
