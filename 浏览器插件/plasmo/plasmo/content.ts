import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*/*"],
  all_frames: true
}
console.log(window.location.href)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
  sendResponse({ data: "content" })
})
