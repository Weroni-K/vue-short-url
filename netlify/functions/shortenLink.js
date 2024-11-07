const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  try {
    // Read the long URL from the request body
    const { long_url } = JSON.parse(event.body)

    // Ensure a valid long URL was provided
    if (!long_url) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No long URL provided' }),
      }
    }

    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      body: JSON.stringify({ long_url }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to shorten the link' }),
      }
    }

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ shortened_url: data.result_url }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
