import {visit} from "unist-util-visit";

export const rehypeTable = () => {

    return (tree) => {
        visit(tree, "element", (node, index, parent) => {
            if (node.tagName === "table") {
                let numberOfColumns;

                visit(node, "element", (childNode) => {
                    if (childNode.tagName === "tr") {
                        numberOfColumns = childNode.children.filter(
                            (grandChildNode) =>
                                grandChildNode.type === "element" &&
                                (grandChildNode.tagName === "td" || grandChildNode.tagName === "th")
                        ).length;
                        return false; // Stop traversing when the first row is found
                    }
                });

                // Create a wrapper and insert the contents of the table
                const divNode = {
                    type: "element",
                    tagName: "div",
                    properties: {class: numberOfColumns < 6 ? `table-wrapper table-${numberOfColumns}-col` : `table-wrapper table-wrapper--full`},
                    children: [node]
                };

                parent.children[index] = divNode;
            }
        });
    };
};
