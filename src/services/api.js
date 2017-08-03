const request = require('request');

exports.getImages = function(search, page = 1) {

  return new Promise((resolve, reject) => {

    let api = {
      url: `${process.env.URL}/${page}?q=${search}`,
      headers: { Authorization: `Client-ID ${process.env.CLIENT_ID}` },
      json: true,
		};
		
    function processImages(err, response, body) {
      if (!err && response.statusCode == 200) {
        body = body.data.filter(image => {
          if (!image.is_album) {
            return image;
          }
        }).map(image => {
          return {
            url: image.link,
            snippet: image.title,
            context: `https://imgur.com/${image.id}`
          };
        });
        resolve(body)
      }
    }
    request(api, processImages);
  });
};

