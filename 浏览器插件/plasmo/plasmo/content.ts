import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["*://*/*"],
  all_frames: true
}
console.log(window.location.href)
