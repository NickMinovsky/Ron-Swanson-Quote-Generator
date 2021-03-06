// General variables for jQuery and URL

let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let $xhr = $("#xhr");
let $fetch = $("#fetch");
let $jquery = $("#jquery");
let $axios = $("#axios");
let $quote = $("#quote");

// ===== XHR request

let XHR = new XMLHttpRequest();

$xhr.on("click", () => {
  XHR.open("GET", url);
  XHR.send();
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4) {
      if (XHR.status == 200) {
        let data = XHR.responseText;
        $quote.text(data.substring(2, data.length - 2));
      } else {
        console.log("there was a problem, status code: " + XHR.status);
      }
    }
  };
});

// ===== FETCH request

$fetch.on("click", () => {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(data => {
      $quote.text(data);
    })
    .catch(() => {
      alert("Fetch Error!");
    });
});

// ===== jQuery
$jquery.on("click", () => {
  $.getJSON(url).done(data => {
    $quote.text(data);
  });
});

// ==== Axios
$axios.on("click", () => {
  axios
    .get(url)
    .then(function(response) {
      $quote.text(response.data);
    })
    .catch(() => {
      console.log("Axios Error!");
    });
});
