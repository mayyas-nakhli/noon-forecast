import { COLORS_AND_STYLES } from "../data/colors-and-styles"

export function uvIndexColor(index: number):string{
  if (index < 3) {
    return COLORS_AND_STYLES.green_400; 
  } else if (index < 6) {
    return COLORS_AND_STYLES.yellow_400; 
  } else if (index < 8) {
    return  COLORS_AND_STYLES.orange_400;
  } else if (index < 11 ) {
    return COLORS_AND_STYLES.red_400; 
  } else {
    return COLORS_AND_STYLES.violet_400; 
  }
}
