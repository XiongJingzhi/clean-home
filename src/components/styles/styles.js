import { blue, grey } from '@ant-design/colors'

const extendClick = () => {
  return `
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `
}

const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

const bgFull = () => {
  return `
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
  `
}

export const colors = {
  "theme-color": blue[5],
  "theme-color-shadow": "rgb(186, 231, 255, 0.5)", //略淡 blue[1]
  "font-color-light": grey[2],
  "font-color-light-shadow": "rgba(250, 250, 2520, 0.6)",//略淡 grey[1]
  "font-color-desc": grey[8],
  "font-color-desc-v2": grey[6], //略淡
  "border-color": grey[4],
  "border-color-v2": "rgba(228, 228, 228, 0.1)",
  "background-color": grey[1],
  "background-color-shadow": "rgba(0, 0, 0, 0.3)",
  "highlight-background-color": grey[0]
}

export const fontSize = {
  "font-size-ss": "10px",
  "font-size-s": "12px",
  "font-size-m": "14px",
  "font-size-l": "16px",
  "font-size-ll": "18px",
}

export default {
  ...colors,
  ...fontSize,
  extendClick,
  noWrap,
  bgFull
}
