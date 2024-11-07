async function shortenLink() {
  errorMessage.value = ''

  if (!longLink.value) {
    errorMessage.value = 'Please add a link'
    setTimeout(() => {
      errorMessage.value = ''
    }, 4000)
    return
  }

  const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i
  if (!urlPattern.test(longLink.value)) {
    errorMessage.value = 'Please add a valid link'
    setTimeout(() => {
      errorMessage.value = ''
    }, 4000)
    return
  }

  try {
    const response = await fetch('/.netlify/functions/shortenLink', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ long_url: longLink.value.trim() }),
    })

    if (!response.ok) {
      throw new Error('Error shortening the URL')
    }

    const result = await response.json()

    if (result.shortened_url) {
      shortenedUrl.value = result.shortened_url
      successMessage.value = 'Link shortened successfully!'
      longLink.value = ''
      setTimeout(() => {
        successMessage.value = ''
      }, 4000)
    } else {
      errorMessage.value =
        result.error || 'An error occurred while shortening the URL'
      setTimeout(() => {
        errorMessage.value = ''
      }, 4000)
    }
  } catch (error) {
    console.error('Failed to call backend:', error)
    errorMessage.value = 'Failed to shorten the URL. Please try again later.'
    setTimeout(() => {
      errorMessage.value = ''
    }, 4000)
  }
}
