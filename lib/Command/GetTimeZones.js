'use strict';

/**
 * Get time zones command
 *
 * Get a list of supported time zones
 */
class GetTimeZones {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: `api/${client.username}/info/timezones`,
      raw: true
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return result;
      });
  }
}

module.exports = GetTimeZones;