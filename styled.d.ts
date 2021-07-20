// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text?: string;
      primary?: string;
      secondary?: string;
      background?: string;
      link?: string;
      component?: string;
    };
  }
}
