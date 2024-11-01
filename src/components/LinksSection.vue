<template>
  <div id="links-section">
    <div class="shorten-link-box">
      <div class="input-box">
        <input
          v-model="longLink"
          id="link-input"
          :class="{ 'input-error': errorMessage }"
          placeholder="Shorten a link here..."
        />
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success-message">
          {{ successMessage }}
        </p>
      </div>
      <button id="shorten-it-button" @click="shortenLink">Shorten It!</button>
    </div>

    <!-- <div class="shortened-links-box">
      <p class="long-link">
        <a :href="shortenedUrl" target="_blank">https://cleanuri.com/</a>
      </p>
      <div class="shortened-link">
        <p>
          <a :href="shortenedUrl" target="_blank">https://cleanuri.com/</a>
        </p>
      </div>
      <button
        id="copy-button"
        @click="copyToClipboard"
        :class="{ copied: isCopied }"
      >
        {{ isCopied ? 'Copied!' : 'Copy' }}
      </button>
    </div> -->

    <div class="shortened-links-box" v-if="longLink && shortenedUrl">
      <p class="long-link">
        <a :href="shortenedUrl" target="_blank">{{ longLink }}</a>
      </p>
      <p>
        <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a>
      </p>
      <button
        id="copy-button"
        @click="copyToClipboard"
        :class="{ copied: isCopied }"
      >
        {{ isCopied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const longLink = ref('')
const shortenedUrl = ref('')
const isCopied = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

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
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: longLink.value.trim() }),
    })

    if (!response.ok) {
      throw new Error('Error shortening the URL')
    }

    const result = await response.json()

    if (result.result_url) {
      shortenedUrl.value = result.result_url
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

function copyToClipboard() {
  navigator.clipboard.writeText(shortenedUrl.value).then(() => {
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 4000)
  })
}
</script>

<style scoped>
#links-section {
  max-width: 1080px;
  margin: 4rem auto;
  background-color: var(--color-neutral-white);
}

.shorten-link-box {
  background: var(--color-primary-violet)
    url(./../assets/icons/bg-shorten-desktop.svg) no-repeat center / cover;
  max-width: 1080px;
  height: 144px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
  margin-bottom: 16px;
}

.input-box {
  width: 100%;
  margin-left: 2.5rem;
}

#link-input {
  width: 100%;
  height: 52px;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 16px;
  color: var(--color-neutral-blue);
  border: none;
  outline: none;
  padding-left: 20px;
  &::placeholder {
    color: var(--color-neutral-grey-violet);
  }
  &.input-error {
    border: 2px solid var(--color-secondary-red);
    color: var(--color-secondary-red);
    &::placeholder {
      color: hsl(0, 70%, 78%);
    }
  }
}

.error-message {
  color: var(--color-secondary-red);
}

.success-message {
  color: var(--color-primary-cyan);
}

.error-message,
.success-message {
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: -24px;
  text-align: left;
  font-style: italic;
}

#shorten-it-button {
  margin-right: 2.5rem;
  border-radius: 8px;
  padding: 14px 28px;
  height: 52px;
  width: 12rem;
}

.shortened-links-box {
  max-width: 1080px;
  height: 60px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 1.5rem;
}

.long-link {
  margin-right: auto;
  a {
    color: var(--color-neutral-blue);
  }
}

.shortened-link {
  a {
    color: var(--color-primary-cyan);
  }
}

#copy-button {
  border-radius: 4px;
  width: 6rem;
  padding: 8px;
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &.copied {
    background-color: var(--color-primary-violet);
  }
}
</style>
