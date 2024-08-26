import {visit} from "unist-util-visit";

export const rehypeTable = () => {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName === "table") {
        let numberOfColumns;

        visit(node, "element", (childNode) => {
          if (childNode.tagName === "tr" && numberOfColumns === undefined) {
            numberOfColumns = childNode.children.filter(
              (grandChildNode) =>
                grandChildNode.type === "element" &&
                (grandChildNode.tagName === "td" || grandChildNode.tagName === "th")
            ).length;
          }
        });

        // Create a wrapper and insert the contents of the table
        const divNode = {
          type: "element",
          tagName: "div",
          properties: {
            className: "table-wrapper"
          },
          children: [node]
        };

        // Add class name to td and th elements based on the number of columns
        visit(node, "element", (childNode) => {
          if (childNode.tagName === "td" || childNode.tagName === "th") {
            if (!childNode.properties) {
              childNode.properties = {};
            }
            const existingClass = childNode.properties.className || "";
            childNode.properties.className =
              `${existingClass} table-${numberOfColumns}-cols`.trim();
          }
        });

        parent.children[index] = divNode;
      }
    });
  };
};
