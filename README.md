# image-search
API to search the Imgur API for images based on query string or retrieve prior search requests

## Image Search Abstraction Layer
==============================

This microservice accepts requests to two endpoints:
<https://www.image-sal.glitch.me/search/keywords> and <https://www.image-sal.glitch.me/latest>.

### Example usage:
#### https://www.image-sal.glitch.me/search/funny%20cats

### Returns:
The first page of results based on the keywords, in this case `funny cats` entered in JSON format. You can page through results by adding the `?offset=2`. The offset must be a positive integer.

### Example usage:
#### <https://www.image-sal.glitch.me/latest>

### Returns:
The most recent search requests the API has received.

[GitHub Repo](https://www.github.com/whackdev/image-search)