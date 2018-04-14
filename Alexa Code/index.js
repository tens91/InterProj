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
    "AddItemIntent": function(){
      const { slots } = this.event.request.intent;
      
      if (!slots.listItem.value) {
      const slotToElicit = 'listItem';
      const speechOutput = 'What would you like me to add to your list?';
      return this.emit(':elicitSlot', slotToElicit, speechOutput);
    }
    else if (slots.listItem.confirmationStatus !== 'CONFIRMED') {

      if (slots.listItem.confirmationStatus !== 'DENIED') {
        // slot status: unconfirmed
        const slotToConfirm = 'listItem';
        const speechOutput = `Add ${slots.listItem.value} to you shopping list, correct?`;
        const repromptSpeech = speechOutput;
        return this.emit(':confirmSlot', slotToConfirm, speechOutput, repromptSpeech);
      }
    }
    }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
