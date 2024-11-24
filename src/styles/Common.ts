import { theme } from "./Theme"

type FontPropsType = {
  fontFamily?: string
  fontWeight?: number 
  color?: string
  lineHeight?: number
  Fmax?: number
  Fmin?: number
}

export const font = ({fontFamily, fontWeight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
font-family: ${fontFamily || 'Poppins'};
font-weight: ${fontWeight || 400};
color: ${color || theme.colors.font};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`