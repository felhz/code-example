import { useEffect, useState } from "react"

function OptionsIndex() {
  const [data, setData] = useState("")
  useEffect(() => {
    chrome.storage.sync.get("data", function (result) {
      console.log(result)
      setData(result.data)
    })
  }, [])

  return (
    <div>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default OptionsIndex
