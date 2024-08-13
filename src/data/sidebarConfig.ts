/*
This file reads `src/data/sidebarData.ts` and removes any non-compliant keys
consumed by Starlights `sidebar` https://starlight.astro.build/reference/configuration/#sidebar, returning the correct `shape`

Custom keys removed:
- `cardLink`
- `description`
- `icon`

These keys are used in `src/components/Topics.astro`
*/

import sidebarData from "./sidebarData";

const transformSidebarData = (data: any) => {
  return data.map((item: any) => {
    const {cardLink, description, icon, ...rest} = item;
    const transformedItem = {
      ...rest,
      items: item.items
        ? item.items.map((subItem: any) => {
            const {cardLink, description, icon, ...subRest} = subItem;
            return subRest;
          })
        : []
    };
    return transformedItem;
  });
};

const sidebarConfig = transformSidebarData(sidebarData);

export default sidebarConfig;
