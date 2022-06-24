import i18next from '../i18next.js';
import "../jquery-1.11.3.min.js";
// i18next
//   //.use(i18nextXHRBackend)
//   .init({
//     //debug:true,
//     initImmediate: false, // set initImmediate false -> init method finished only when all resources/translation finish loading (async behaviour)
//     lng: "ro-RO",
//     //fallbackLng : "en-US",
//     // backend:{
//     //   loadPath: './locales/translation/{{lng}}.json'
//     // }
    
//     resources: {
//         "ro-RO": {
//             translation: {
//                 "Login": "Logare"
//             }
//         }
//     }
// });

// export default i18next;

var arrLang = {
    'en' : {
        'loginPage' : 'Login Page',
        'login' : 'Login'
    },
    'ro' : {
        'loginPage' : 'Pagina de autentificare',
        'login' : 'Autentificare'
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('lang');
        
        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});