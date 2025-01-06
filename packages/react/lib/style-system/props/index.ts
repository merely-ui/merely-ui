import { Conditions } from './conditions/conditions.interface'
import { StyleProps } from './theme-props'

export type MerelyStyleProps = StyleProps & Partial<Conditions>

export type { MerelyComponentProps } from './component-props'

export type { CompositeComponentsNames } from './composite-components.types'
export { ConditionsQueries } from './conditions/conditions'
export type { ThemeProps } from './theme-props'

export { HTMLProps, MerelyHTMLProps } from './html-props'
