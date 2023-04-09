import { CoHero } from "../co-hero"
import { CoFeatures } from "../co-features"

export const CoBlock = ({ name, data }) => {
  if (name === "hero") return <CoHero {...data} />
  if (name === "features") return <CoFeatures {...data} />
  return null
}
