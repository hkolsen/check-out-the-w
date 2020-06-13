import { rgba } from 'polished';

export const colors = {
  DARK_GRAY: rgba(42, 44, 53, 1), //#2a2c35
  BASE: rgba(26, 28, 36, 1), //#1a1c24 
  WHITE: rgba(255, 255, 255, 1), // #FFFFFF hsla(0, 0, 100, 1)
  BORDER: rgba(206, 213, 223, 1), // #ced5df
  BRIGHT_BG: rgba(251, 255, 90, 1), // #fbff5a yellow
  ACCENT: rgba(62, 240, 228, 1), // #3ef0e4 seafoam
  ACTIVE: rgba(248, 105, 158, 1), // #f8699e pink
  LIGHT_BG: rgba(244, 244, 247, 1), // #f4f4f7 light grayish-blue
  HIGHLIGHT: rgba(249, 218, 135, 1), // #f9da87 yellow
} as const;
