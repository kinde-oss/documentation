import {visit} from "unist-util-visit";

export const rehypeExternalLinks = () => {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName === "a") {
                if (
                  !node.properties.class?.includes("rehype-anchor-link") &&
                  !node.properties.href?.includes("kinde.com") &&
                  !node.properties.href?.startsWith("/")
                ) {
                  node.properties.target = "_blank";
                  node.properties.rel = "noopener noreferrer";
                }
            }
        });
    };
};
