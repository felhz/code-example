// 获取tabid
export const getTabId = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  console.log(tab.id)

  return tab.id
}

console.log("tabid", getTabId())
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
})
