import { useEffect } from "react"
import { useState } from "react"

const createDefaultSizes = (obj) => {
  const result = {}
  for (let key in obj) {
    result[key] = 0
  }
  return result
}

export const useSizes = (options) => {
  const [sizes, setHeight] = useState(createDefaultSizes(options))

  useEffect(() => {
    const newSizes = {}
    let changed = false
    
    for (let key in sizes) {
      const height = options[key].current?.clientHeight
      if (sizes[key] !== height) {
        newSizes[key] = height
        changed = true
      } else {
        newSizes[key] = sizes[key]
      }
    }
    if (changed) {
      setHeight(newSizes)
    }
  }, [options, sizes])

  return sizes
}