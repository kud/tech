import { Children, isValidElement } from "react"
import hasChildren from "./has-children"

export const childToString = (child) => {
  if (
    typeof child === "undefined" ||
    child === null ||
    typeof child === "boolean"
  ) {
    return ""
  }
  if (JSON.stringify(child) === "{}") {
    return ""
  }
  return child.toString()
}

const onlyText = (children) => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children)
  }
  return Children.toArray(children).reduce((text, child) => {
    let newText = ""
    if (isValidElement(child) && hasChildren(child)) {
      newText = onlyText(child.props.children)
    } else if (isValidElement(child) && !hasChildren(child)) {
      newText = ""
    } else {
      newText = childToString(child)
    }
    return text.concat(newText)
  }, "")
}

export default onlyText
