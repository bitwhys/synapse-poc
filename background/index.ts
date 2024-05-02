export {}

chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'open-modal') {
    // Send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(`Sending message to tab ${tabs[0].id} to open modal`)
      chrome.tabs.sendMessage(tabs[0].id, { action: 'openModal' })
    })
  }
})
