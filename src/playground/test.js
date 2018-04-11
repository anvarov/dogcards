const init = {
  method: 'GET',
  headers: {
    origin: 'localhost'
  },
  redirect: 'follow'
};

let url = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=images&oldid=254862759';

fetch(url, init).then(response => console.log(response));

// let cheerio = require('cheerio');
// let $ = cheerio();

// $.ajax( {
//     url: 'https://en.wikipedia.org/w/api.php',
//     data: {
//         action: 'query',
//         meta: 'userinfo',
//         format: 'json',
//         origin: 'https://www.mediawiki.org'
//     },
//     xhrFields: {
//         withCredentials: true
//     },
//     dataType: 'json'
// } ).done( function ( data ) {
//     alert( 'Foreign user ' + data.query.userinfo.name +
//         ' (ID ' + data.query.userinfo.id + ')' );
// } );
