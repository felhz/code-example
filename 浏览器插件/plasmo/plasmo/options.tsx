import { Tree } from "antd"
import { useEffect, useState } from "react"

function OptionsIndex() {
  const [bookmarks, setBookmarks] = useState([])
  useEffect(() => {
    chrome.storage.sync.get("data", function (result) {
      console.log(result)
    })
    chrome.bookmarks.getTree(function (result) {
      setBookmarks(result[0].children)
    })
  }, [])

  return (
    <div>
      <Tree treeData={bookmarks}></Tree>
    </div>
  )
}

export default OptionsIndex
