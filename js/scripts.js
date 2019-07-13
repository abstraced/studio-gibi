console.log("test");

var Sequence = (function sequenceIIFE() {

  // Private variable to store current counter value.
  var $listFilm=$('.ListofFilms');
  var $modal_container= $('.modal-container');

  function  importAndRenderAll() {


    var $listFilm=$('.ListofFilms');


    // get the list of object from the API
    var $filmList =$.ajax( { url:"https://ghibliapi.herokuapp.com/films" ,dataType: 'json' })  //js/films.json
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
          var year=$('<div class="year"> Year:   '+ responseJSON[i].release_date +'</div>' );
         console.log(responseJSON[i]);

          //Delete the previous elements
          $modal_container.empty();


          //Append the elements to the container
          $($modal_container).append(closeButtonElement);
          $($modal_container).append(title);
          $($modal_container).append(director);
          $($modal_container).append(description);
          $($modal_container).append(year);



        });;


        // add the elements to the list
        $($listFilm).append($newElement);

      });

    });


  }



  function hideModal () {

  $($modal_container).removeClass("is-visible");

  }


  // function to move up when scrolling
  function moveModalWhenScrolling () {
    window.onscroll = function() {myFunction()};

    // Get the header

    var offSet= $($modal_container).offset();

    // Get the offset position of the navbar
    var stickyJ = $($modal_container).offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset - 100 > offSet.top  ) {
      //  modalContainer.classList.add("sticky");
        $modal_container.addClass('sticky');
      } else {
      // modalContainer.classList.remove("sticky");
        $modal_container.removeClass('sticky');
      }
    }

  }
  function addGlobalEvent () {

    var $modalContainer= document.querySelector('.modal-container');
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        Sequence.hideModal();
      }
    });



    var allScreen =document.querySelector('body');
    var selectorPoke = document.querySelector('li');
    allScreen.addEventListener('click', (e) => {

      // Since this is also triggered when clicking INSIDE the modal container,
      // We only want to close if the user clicks directly on the overlay
      var target = e.target.type;
      var targetBis= e.target;


      if ($modalContainer.classList.contains('is-visible')
      && target !== 'submit'
      && targetBis.classList.contains('container')) {
         Sequence.hideModal();

      }
      });



  }


  // Object that's returned from the IIFE.
  return {
    importAndRenderAll:importAndRenderAll,
    hideModal:hideModal,
    addGlobalEvent:addGlobalEvent,
    moveModalWhenScrolling: moveModalWhenScrolling,
  };

}());
Sequence.importAndRenderAll();
Sequence.addGlobalEvent();
Sequence.moveModalWhenScrolling();
