var translator = new Translator();

var config = {
    from: 'language-of-the-text',
    to: 'convert-into',
    api_key: 'AIzaSyBIep-iJVCDtL5QEylszJ7l7xJkI3UVB7Y', // use your own key
    callback: function (translatedText) {
        console.log('translated text', translatedText);
        
        // here you can use "speakTextUsingRobot"
        // see below sections
    }
};

translator.translateLanguage(textToConvert, config);

translator.getListOfLanguages(function(languages) {
    languages.forEach(function(language) {
        console.log(language.name, langauge.language);
    });
}, config);


