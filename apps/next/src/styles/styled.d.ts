/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import type { AppTheme } from "./index";

declare module "styled-components" {
  // This makes theme in styled-components equal to AppTheme
  export interface DefaultTheme extends AppTheme {}
}
