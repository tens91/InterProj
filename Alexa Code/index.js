"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "HelloIntent": function () {
    this.response.speak("Hi Patrick, How are you? Busy day in work?"); 
    this.emit(':responseReady');
  },
   'LaunchRequest': function() {
    this.response.speak("Hi, Welcome to Pick It Up. What would you like to add to your shopping list?")
        .listen("Is there anything to go on your shopping list?");
    this.emit(':responseReady');
  },
   'AMAZON.StopIntent': function() {
      this.response.speak('Ok, well, I\'m here if you need me.');
      this.emit(':responseReady');
  },

   'AMAZON.AddAction<object@Event>': function() {
      this.response.speak('No problem, is there anything else?')
      this.emit(':responseReady');
   },

  // Cancel
   'AMAZON.CancelIntent': function() {
      this.response.speak('Ok, well, I\'m here if you need me.');
      this.emit(':responseReady');
  },
  //Repeat
   'AMAZON.RepeatIntent': function() {
      this.response.speak('No problem');
      this.emit(':responseReady');
   }
      }

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};