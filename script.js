

/* !!!! ABOUT OVERLAY !!! */

// Function to show the overlay
$("#showAboutButton").click(function () {
  $("#about").fadeIn();
});

// Function to hide the overlay
$("#closeAboutButton").click(function () {
  $("#about").fadeOut();
});



/* !!!! REVIEWS OVERLAY !!! */

let itemCount = 0;
let cartCount = 0;

$(".review").each((i, el) => {
  const review = $(el);
  const reviewBody = $(el).find(".reviewBody");
  const items = $(el).find(".item");
  /*   const overlayNights = $(el).find(".overlayNights");
  const overlayServices = $(el).find(".overlayServices"); */
  const buttons = $(el).find(".reviewButton");
  const buttonText = $(buttons).find(".AddCart");
  const proceedButton = $(buttons).find(".proceedButton");
  const closeButton = $(buttons).find(".closeButton");
  const deleteButton = $(buttons).find(".deleteButton");

  const nights = $(el).find(".nightsNum");
  const minusButton = $(el).find(".nightsMinus");
  const plusButton = $(el).find(".nightsPlus");

  const servicesList = $(el).find(".services-list");

  let itemCounter = 0;
  let nightsnum = 0;

  const removeItem = () => {
    itemCount--;
    if (itemCount === 0) {
      $("#itemCount").html("").css("display", "inline");
    } else {
      $("#itemCount").html(itemCount).css("display", "inline");
    }
    $(".checkout").removeClass("bluecheckoutButton");
  };

  const resetItem = () => {
    nightsnum = 0;
    $(nights).html(nightsnum);
    $(servicesList).removeClass("clicked");
  };

  const flow = (items) => {
    console.log(itemCount)
    if (itemCount >= 4) {
      console.log('four items')
        $(".checkout a").css("color", "blue");
      $(".checkout a").css("text-decoration", "none");
        $(".checkout a").css("display", "block");
      }
    if (itemCounter === 0) {
      itemCount++;
      $("#itemCount").html(itemCount).css("display", "inline");

      $(items[itemCounter]).removeClass("hidden");
      itemCounter++;
      buttonText.addClass("hidden");
      proceedButton.removeClass("hidden");
      closeButton.removeClass("hidden");
      $(buttons).css("justify-content", "space-between");
      $(buttons).css("background-color", "#0000FF");
      $(buttons).css("color", "white");
    } else if (itemCounter > 0 && itemCounter < items.length) {
      $(items[itemCounter - 1]).addClass("hidden");
      $(items[itemCounter]).removeClass("hidden");
      itemCounter++;
    } else {
      $(items[itemCounter - 1]).addClass("hidden");
      itemCounter = 0;
      $(buttons).css("background-color", "#0000FF");
      $(buttons).css("color", "white");
      deleteButton.removeClass("hidden");
      closeButton.addClass("hidden");
      proceedButton.addClass("hidden");
      $(buttons).css("justify-content", "flex-end");
      reviewBody.css("opacity", 0.5);
      review.css("justify-content", "space-between");
    }
  };

  $(buttonText).on("click", () => {
    flow(items);
  });

  $(proceedButton).on("click", () => {
    flow(items);
  });

  $(closeButton).click(function () {
    $(items[itemCounter - 1]).addClass("hidden");
    itemCounter = 0;
    buttonText.removeClass("hidden");
    proceedButton.addClass("hidden");
    closeButton.addClass("hidden");
    $(buttons).removeAttr("style");
    removeItem();
    resetItem();
  });

  $(deleteButton).click(function () {
    itemCounter = 0;
    deleteButton.addClass("hidden");
    buttonText.removeClass("hidden");
    proceedButton.addClass("hidden");
    closeButton.addClass("hidden");
    $(reviewBody).removeAttr("style");
    $(buttons).removeAttr("style");
    removeItem();
    resetItem();
  });

  $(minusButton).click(function () {
    if (nightsnum > 0) {
      nightsnum--;
    }
    $(nights).html(nightsnum);
  });

  $(plusButton).click(function () {
    nightsnum++;
    $(nights).html(nightsnum);
  });

  $(servicesList).click(function () {
    $(this).toggleClass("clicked");
  });
});

/*Dropdown Menu TO*/

$(document).ready(function () {
  // When the dropdown button is clicked
  $(".dropdown-toggle").click(function () {
    $(".dropdown-menu").toggleClass("open");
    // Toggle the visibility of the dropdown menu
    $(".dropdown-menu").slideToggle();
  });

  // When a dropdown menu item is clicked
  $(".dropdown-item").click(function () {
    // Get the text of the clicked item
    var selectedOption = $(this).text();
    var arrowSpan = $("dropdown-arrow");

    // Update the button text
    $(".dropdown-toggle").text(selectedOption).append(arrowSpan);
    $(".dropdown-toggle").css("color", "#968774");
    // Hide the dropdown menu
    $(".dropdown-menu").slideUp();
  });
});

/*Dropdown Menu HOW*/

$(document).ready(function () {
  // When the dropdown button is clicked
  $(".dropdown-toggle-how").click(function () {
    $(".dropdown-menu-how").toggleClass("open");
    // Toggle the visibility of the dropdown menu
    $(".dropdown-menu-how").slideToggle();
  });

  // When a dropdown menu item is clicked
  $(".dropdown-item-how").click(function () {
    // Get the text of the clicked item
    var selectedOption = $(this).text();
    var arrowSpan = $("dropdown-arrow");

    // Update the button text
    $(".dropdown-toggle-how").text(selectedOption).append(arrowSpan);
    $(".dropdown-toggle-how").css("color", "#968774");

    // Hide the dropdown menu
    $(".dropdown-menu-how").slideUp();
  });
});

window.onload = function () {
  console.log("loaded");
  const search = document.querySelector(".search-element");
  search.addEventListener("click", function () {
    let destinazione = document.querySelector("button.dropdown-toggle");
    destinazione = destinazione.textContent
    console.log(destinazione);
    if(destinazione.startsWith("SELECT")){
      console.log("nessuna selezione")
    }else if(destinazione.startsWith("ROMA")){
      console.log("selezionato roma")
      open("dolcevita.html", "_self")
    }else if(destinazione.startsWith("RISHIKESH")){
      console.log("selezionato rishikesh")
      open("retreat.html", "_self")
    }else if(destinazione.startsWith("USHUAIA")){
      console.log("selezionato ushusaia")
      open("lastchance.html", "_self")
    }

  });
};

/* !!!! REFUND OVERLAY !!! */

// Function to show the overlay LC
$("#RefundButtonLC").click(function () {
  $("#refund").fadeIn();
});

// Function to hide the overlay
$("#closeAboutButton").click(function () {
  $("#refund").fadeOut();
});

// Function to show the overlay RT
$("#RefundButtonRT").click(function () {
  $("#refund").fadeIn();
});

// Function to hide the overlay
$("#closeAboutButton").click(function () {
  $("#refund").fadeOut();
});

// Function to show the overlay DV
$("#RefundButton").click(function () {
  $("#refund").fadeIn();
});

// Function to hide the overlay
$("#closeAboutButton").click(function () {
  $("#refund").fadeOut();
});
