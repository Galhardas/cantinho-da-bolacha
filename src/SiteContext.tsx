import { createContext, useContext } from 'react'
import type { SiteConfig } from './types'

const SiteContext = createContext<SiteConfig | null>(null)

export const SiteProvider = SiteContext.Provider

export function useSite(): SiteConfig {
  const ctx = useContext(SiteContext)
  if (!ctx) throw new Error('useSite tem de ser usado dentro de <SiteProvider>')
  return ctx
}
