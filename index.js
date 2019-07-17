exports.handler = function (event, context, callback) {
  var response = event.Records[0].cf.response
  var headers = response.headers

  headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=604800; includeSubDomains'
  }]

  headers['content-security-policy'] = [{
    key: 'Content-Security-Policy',
    value: 'default-src https://*.offen.dev'
  }]

  headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }]

  headers['x-xss-protection'] = [{
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }]

  headers['referrer-policy'] = [{
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }]

  callback(null, response)
}
