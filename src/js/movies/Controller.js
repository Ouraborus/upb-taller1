export default class Controller {
  static get (url, callback) {
          /* eslint-disable */
    fetch(url)
        /* eslint-enable */
    .then((response) => {
      return response.json()
    })
    .then(callback)
  }
}
