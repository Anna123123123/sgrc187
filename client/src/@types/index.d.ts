import 'styled-components'
/*
 * import { ReactComponent } from './logo.svg';
 * import { ReactComponent as Logo } from './logo.svg';
 * import image from "./foo.svg"
 */

// можно в отдельные раскидать типы но не

// declare module '*.svg' {
//   import * as React from 'react'
//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >
//   const src: string
//   export default src
// }

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secondary: string

      background: string
      text: string
      form: string
      column: string
    }
  }
}

// declare module "\*.svg" {
//   import React = require("react");
//   export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}