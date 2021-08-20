import { ReactTestInstance } from "react-test-renderer"

/** Checks if a property in a prop exists and has the specified value */
export function hasProperty(component: ReactTestInstance, propName: string, property: string, value: any) {
  if (component?.props[propName]) {
    let props = component.props[propName]
    if (!Array.isArray(props))
      props = [props]

    for (const prop of props)
      if (prop[property] == value)
        return true
  }
  return false
}

/** Checks if a style property is present in a component style and if it is equal to a value */
export function hasStyle(component: ReactTestInstance, property: string, value: any) {
  return hasProperty(component, 'style', property, value)
}

/** Checks if a style property is present in a component contentContainerStyle and if it is equal to a value */
export function hasContentContainerStyle(component: ReactTestInstance, property: string, value: any) {
  return hasProperty(component, 'contentContainerStyle', property, value)
}
