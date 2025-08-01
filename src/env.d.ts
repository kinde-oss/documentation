/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../node_modules/@astrojs/starlight/virtual.d.ts"/>

// Hall Analytics types (if needed for future extensions)
declare namespace App {
  interface Locals {
    // Analytics data could be stored here if needed
    analytics?: {
      tracked: boolean;
      timestamp: number;
    };
  }
}
