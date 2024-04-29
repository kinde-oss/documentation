function removeHTMLTags(str: string) {
  return str.replace(/<[^>]*>/g, "");
}
export default removeHTMLTags;
