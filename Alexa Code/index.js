"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Alright Patrick, yeah"); 
    this.emit(':responseReady');
  },
   'LaunchRequest': function() {
    this.response.speak("Hi, Welcome to Pick It Up. What would you like to add to your shopping list?")
        .listen("Is there anything to go on your shopping list?");
    this.emit(':responseReady');
  },

};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
