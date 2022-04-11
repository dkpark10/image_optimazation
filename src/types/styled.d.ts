import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mobile: string;
    minTablet: string;
    maxTablet: string;
    desktop: string;
  }
}