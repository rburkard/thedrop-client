export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const MOBILE_BREAKPOINT_N = 1100
export const MOBILE_BREAKPOINT = `${MOBILE_BREAKPOINT_N}px`
export const MOBILE_STYLE = `@media (max-width: ${MOBILE_BREAKPOINT})`
export const DESKTOP_STYLE = `@media (min-width: ${MOBILE_BREAKPOINT})`

export const timestampWeekly = 1664467200000
