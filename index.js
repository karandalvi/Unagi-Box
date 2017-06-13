/*
Author: Karan Dalvi
Skill Link: https://www.amazon.com/dp/B072QW69ND/ref=lp_14284846011_1_1?s=digital-skills&ie=UTF8&qid=1497381190&sr=1-1
Description: Alexa Skill that returns episode name of popular TV series FRIENDS. 
The request contains a season number & episode number and correct title is returned as a speechlet. 
*/

'use strict';

const Alexa = require('alexa-sdk');
const data = require('/data.js');

const APP_ID = 'amzn1.ask.skill.a11330b2-fea1-42ee-a62d-8182f5c67242';  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": data.EN;
}

const handlers = {
    'LaunchRequest': function () {
        const speechOutput = this.t('WELCOME_MESSAGE');
        const reprompt = this.t('WELCOME_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'EndRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'GetEpisodeName': function () {
        const episodeName = this.t('EPISODES');
        
        var eIdx = getIndex(this.event.request.intent.slots.episode.value);
        var sIdx = getIndex(this.event.request.intent.slots.season.value);
        
        var speechOutput;
        
        if ((sIdx < 1) || (sIdx > 10)) {
            speechOutput = 'There is no season number ' + sIdx + ' as far as I know.';  
        }
        else {
            if (eIdx >= episodeName[sIdx].length)
                speechOutput = 'Season ' + sIdx + ' Episode ' + eIdx + ' does not exist'; 
            else
                speechOutput = episodeName[sIdx][eIdx];
        }
        
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), speechOutput);
    },
    'GetTwentyEpisodeName': function () {
        const episodeName = this.t('EPISODES');
        var eIdx;
        if (this.event.request.intent.slots.episode.value === '')
            eIdx = 20;
        else
            eIdx = 20 + getIndex(this.event.request.intent.slots.episode.value);
        var sIdx = getIndex(this.event.request.intent.slots.season.value);
        
        var speechOutput;
        
        if ((sIdx < 1) || (sIdx > 10)) {
            speechOutput = 'There is no season number ' + sIdx + ' as far as I know.';  
        }
        else {
            if (eIdx >= episodeName[sIdx].length)
                speechOutput = 'Season ' + sIdx + ' Episode ' + eIdx + ' does not exist'; 
            else
                speechOutput = episodeName[sIdx][eIdx];
        }
        
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//function to convert spoken number to integer

function getIndex(textNumber) {
    var index;
    switch(textNumber) {
        case "first":
        case "one":
        case "1st":
        case "1":    
            index = 1;
            break;
        case "second":
        case "two":
        case "2nd":
        case "2":
            index = 2;
            break;
        case "third":
        case "three":
        case "3rd":
        case "3":    
            index = 3;
            break;
        case "fourth":
        case "four":
        case "4th":
        case "4":    
            index = 4;
            break;
        case "fifth":
        case "five":
        case "5th":
        case "5":    
            index = 5;
            break;
        case "sixth":
        case "six":
        case "6th":
        case "6":    
            index = 6;
            break;
        case "seventh":
        case "seven":
        case "7th":
        case "7":    
            index = 7;
            break;
        case "eighth":
        case "eight":
        case "8th":
        case "8":    
            index = 8;
            break;
        case "ninth":
        case "nine":
        case "9th":
        case "9":    
            index = 9;
            break;
        case "tenth":
        case "ten":
        case "10th":
        case "10":    
            index = 10;
            break;
        case "eleventh":
        case "eleven":
        case "11th":
        case "11":    
            index = 11;
            break;
        case "twelfth":
        case "twelve":
        case "12th":
        case "12":    
            index = 12;
            break;
        case "thirteenth":
        case "thirteen":
        case "13th":
        case "13":    
            index = 13;
            break;
        case "fourteenth":
        case "fourteen":
        case "14th":
        case "14":    
            index = 14;
            break;
        case "fifteenth":
        case "fifteen":
        case "15th":
        case "15":    
            index = 15;
            break;
        case "sixteenth":
        case "sixteen":
        case "16th":
        case "16":    
            index = 16;
            break;
        case "seventeenth":
        case "seventeen":
        case "17th":
        case "17":    
            index = 17;
            break;
        case "eighteenth":
        case "eighteen":
        case "18th":
        case "18":    
            index = 18;
            break;
        case "nineteenth":
        case "nineteen":
        case "19th":
        case "19":    
            index = 19;
            break;
        case "twentieth":
        case "twenty":
        case "20th":
        case "20":    
            index = 20;
            break;
        case "twenty-first":
        case "twentyfirst":
        case "twentyone":
        case "twenty one":
        case "twenty-one":    
        case "21st":
        case "21":    
            index = 21;
            break;
        case "twenty-second":
        case "twentysecond":
        case "twentytwo":
        case "twenty two":
        case "twenty-two":    
        case "22nd":
        case "22":    
            index = 22;
            break;
        case "twenty-third":
        case "twentythird":
        case "twentythree":
        case "twenty three":    
        case "twenty-three":
        case "23rd":
        case "23":    
            index = 23;
            break;
        case "twenty-fourth":
        case "twentyfourth":    
        case "twentyfour":
        case "twenty four":    
        case "twenty-four":    
        case "24th":
        case "24":    
            index = 24;
            break;
        case "twenty-fifth":
        case "twentyfifth":    
        case "twentyfive":
        case "twenty-five":
        case "twenty-five":    
        case "25th":
        case "25":    
            index = 25;
            break;
        default:
            index = 0;
            break;
    }
    return index;
}