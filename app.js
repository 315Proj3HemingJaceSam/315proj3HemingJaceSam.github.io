/*jslint node: true */
/*global $, jQuery, alert */

"use strict";

var facebook = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var apple = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var yahoo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var google = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var amazon = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AMZN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var twitter = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22TWTR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var jp = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22JPM%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var goldman = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GS%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var boa = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22BAC%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

function QuoteSearch() {
  var name = $('select').val(),
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + name + "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
    stocks = function (data) {
      $('select').change();
      $(".stock-name").html(data.query.results.quote.Symbol);
      $(".result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
      $(".result").hide().fadeIn(500);
      $(".time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
      $(".change").html("Change: " + data.query.results.quote.Change);
      $(".percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
      $(".year-low").html("Year Low: " + data.query.results.quote.YearLow);
      $(".year-high").html("Year High: " + data.query.results.quote.YearHigh);
      if (data.query.results.quote.Change < 0) {
        $(".change").css({color: "red"});
        $(".percent").css({color: "red"});
      } else if (data.query.results.quote.Change > 0) {
        $(".change").css({color: "#90EE90"});
        $(".percent").css({color: "#90EE90"});
      }
    };

  $.getJSON(url, stocks);
  setTimeout(QuoteSearch, 6000);
}
QuoteSearch();

function QuotesYahoo() {
  var stocks = function (data) {
    $(".y-stock-name").html(data.query.results.quote.Name);
    $(".y-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".y-result").hide().fadeIn(500);
    $(".y-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".y-change").html("Change: " + data.query.results.quote.Change);
    $(".y-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".y-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".y-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".y-change").css({color: "red"});
      $(".y-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".y-change").css({color: "#90EE90"});
      $(".y-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(yahoo, stocks);
  setTimeout(QuotesYahoo, 6000);
}
QuotesYahoo();

function quotesGoogle() {
  var stocks = function (data) {
    $(".g-stock-name").html(data.query.results.quote.Name);
    $(".g-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".g-result").hide().fadeIn(500);
    $(".g-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".g-change").html("Change: " + data.query.results.quote.Change);
    $(".g-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".g-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".g-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".g-change").css({color: "red"});
      $(".g-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".g-change").css({color: "#90EE90"});
      $(".g-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(google, stocks);
  setTimeout(quotesGoogle, 6000);
}
quotesGoogle();

function quotesGoldman() {
  var stocks = function (data) {
    $(".gd-stock-name").html(data.query.results.quote.Name);
    $(".gd-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".gd-result").hide().fadeIn(500);
    $(".gd-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".gd-change").html("Change: " + data.query.results.quote.Change);
    $(".gd-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".gd-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".gd-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".gd-change").css({color: "red"});
      $(".gd-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".gd-change").css({color: "#90EE90"});
      $(".gd-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(goldman, stocks);
  setTimeout(quotesGoldman, 6000);
}
quotesGoldman();

function quotesApple() {
  var stocks = function (data) {
    $(".a-stock-name").html(data.query.results.quote.Name);
    $(".a-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".a-result").hide().fadeIn(500);
    $(".a-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".a-change").html("Change: " + data.query.results.quote.Change);
    $(".a-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".a-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".a-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".a-change").css({color: "red"});
      $(".a-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".a-change").css({color: "#90EE90"});
      $(".a-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(apple, stocks);
  setTimeout(quotesApple, 6000);
}
quotesApple();

function quotesAmazon() {
  var stocks = function (data) {
    $(".am-stock-name").html(data.query.results.quote.Name);
    $(".am-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".am-result").hide().fadeIn(500);
    $(".am-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".am-change").html("Change: " + data.query.results.quote.Change);
    $(".am-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".am-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".am-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".am-change").css({color: "red"});
      $(".am-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".am-change").css({color: "#90EE90"});
      $(".am-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(amazon, stocks);
  setTimeout(quotesAmazon, 6000);
}
quotesAmazon();

function quotesJump() {
  var stocks = function (data) {
    $(".j-stock-name").html(data.query.results.quote.Name);
    $(".j-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".j-result").hide().fadeIn(500);
    $(".j-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".j-change").html("Change: " + data.query.results.quote.Change);
    $(".j-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".j-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".j-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".j-change").css({color: "red"});
      $(".j-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".j-change").css({color: "#90EE90"});
      $(".j-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(jp, stocks);
  setTimeout(quotesJump, 6000);
}
quotesJump();

function quotesTwitter() {
  var stocks = function (data) {
    $(".t-stock-name").html(data.query.results.quote.Name);
    $(".t-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".t-result").hide().fadeIn(500);
    $(".t-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".t-change").html("Change: " + data.query.results.quote.Change);
    $(".t-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".t-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".t-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".t-change").css({color: "red"});
      $(".t-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".t-change").css({color: "#90EE90"});
      $(".t-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(twitter, stocks);
  setTimeout(quotesTwitter, 6000);
}
quotesTwitter();

function quotesFacebook() {
  var stocks = function (data) {
    $(".f-stock-name").html(data.query.results.quote.Name);
    $(".f-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".f-result").hide().fadeIn(500);
    $(".f-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".f-change").html("Change: " + data.query.results.quote.Change);
    $(".f-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".f-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".f-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".f-change").css({color: "red"});
      $(".f-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".f-change").css({color: "#90EE90"});
      $(".f-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(facebook, stocks);
  setTimeout(quotesFacebook, 6000);
}
quotesFacebook();

function quotesBoa() {
  var stocks = function (data) {                  
    $(".b-stock-name").html(data.query.results.quote.Name);
    $(".b-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".b-result").hide().fadeIn(500);
    $(".b-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".b-change").html("Change: " + data.query.results.quote.Change);
    $(".b-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".b-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".b-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".b-change").css({color: "red"});
      $(".b-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".b-change").css({color: "#90EE90"});
      $(".b-percent").css({color: "#90EE90"});
    }
  };
  $.getJSON(boa, stocks);
  setTimeout(quotesBoa, 6000);
}
quotesBoa();


/*
function requestMap(){
  if(!navigator.geolocation) throw "Geolocation not Supported!";
  var image = document.createElement("img");
  navigator.geolocation.getCurrentPosition(setMapURL);
  return image;
}

function setMapURL(pos){
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;
  var accuracy = pos.coords.accuracy;

  var url = "http://maps.google.com/maps/api/staticmap" +
  "?center=" + latitude + "," + "longitude" + "&size=640x640&sensor=true";

  var zoomlevel = 20;
  if(accuracy >80)
    zoomlevel -= Math.round(Math.log(accuracy/50)/Math.LN2);
  url += "&zoom=" + zoomlevel;

  image.src = url;
}
*/