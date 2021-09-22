import tinycolor from 'tinycolor2'
import { get } from '../../../theme/src/theme-tools'

const baseStyle = {
  height: 16,
  paddingY: 0,
  paddingX: 6,
  borderRadius: 'radii.1',
  fontSize: '11.5px',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

const appearances = {
  subtle: (theme, props) => {
    const scheme = get(theme, `fills.${props.color}`, {
      backgroundColor: props.color,
      color: tinycolor(props.color).isLight() ? 'colors.dark' : 'white'
    })

    return {
      color: scheme.color,
      backgroundColor: scheme.backgroundColor
    }
  }
}

const sizes = {
  small: {
    height: 16,
    paddingY: 0,
    paddingX: 6,
    borderRadius: 'radii.1',
    fontSize: '11.5px',
  },
  medium: {
    height: 24,
    paddingY: 0,
    paddingX: 8,
    lineHeight: '24px',
    borderRadius: 'radii.1',
    fontSize: '14px',
  }
}

export default {
  baseStyle,
  appearances,
  sizes
}
