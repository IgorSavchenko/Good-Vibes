window.addEventListener("DOMContentLoaded", function () {

  const autocompleteText = ["good", "good mood", "good vibes"];

  document.addEventListener("keyup", function () {
    autocomplete();
    showContent();
  });

  //===========================================================
  function showContent () {
    let inputText = document.querySelector(".input").value;
    console.log("input = " + inputText);
    document.querySelectorAll('.img').forEach( function (item) {
      if (inputText == item.dataset.atr) {
        item.classList.remove('hide');
        item.classList.add('show');
      }
      else {
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  }
  //===========================================================
  function autocomplete () {
    for (let i=0; i<autocompleteText.length; i++) {
      var str = autocompleteText[i];
      let inputText = document.querySelector(".input").value;
      document.querySelector(".placeholder").innerText = "";

      console.log("autocompleteText = " + str);
      console.log("str.search(inputText) = " + str.search(inputText));

      if (str.search(inputText) != -1) {
        document.querySelector(".placeholder").innerText = str;
        document.addEventListener("keydown", function(event) {
          // If the arrow RIGHT key is pressed
          if (event.keyCode == 39) {
            document.querySelector(".input").value = str;
            console.log("str = " + str);
          }
        });
        break;
      }
    }
  }
  //===========================================================

});
