const axios = require('axios')

exports.handler = async (event, context) => {
  const timeout = 5000

  try {
    const { longUrl } = JSON.parse(event.body)

    const response = await Promise.race([
      axios.post(
        'https://cleanuri.com/api/v1/shorten',
        { url: longUrl },
        { timeout },
      ),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout),
      ),
    ])

    return {
      statusCode: 200,
      body: JSON.stringify({ shortenedUrl: response.data.result_url }),
    }
  } catch (error) {
    console.error('Error:', error.message)

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: error.message,
      }),
    }
  }
}
