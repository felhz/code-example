import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  const send = () => {
    chrome.runtime.sendMessage({ type: "get" }, (response) => {
      setData(response.data)
    })
  }
  const sendContent = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0]
      chrome.tabs.sendMessage(tab.id, { type: "get" }, (response) => {
        console.log(response)
        setData(response.data)
      })
    })
  }
  const openOptionsPage = () => {
    console.log(11)
    chrome.runtime.openOptionsPage()
  }
  useEffect(() => {
    // 保存数据
    // chrome.storage.
    chrome.storage.sync.set({ data }, function () {
      console.log("保存成功")
    })
  }, [data])

  return (
    <div
      style={{
        padding: 16
      }}>
      <button onClick={openOptionsPage}>打开option</button>
      <button onClick={send}>send background</button>
      <button onClick={sendContent}>send content</button>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexPopup
