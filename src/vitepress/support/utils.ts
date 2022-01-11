import type { Route } from 'vitepress'
import { withBase } from 'vitepress'
import { ref } from 'vue'

export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function normalizeLink(url: string): string {
  if (isExternal(url))
    return url

  const { pathname, search, hash } = new URL(url, 'http://vuejs.org')
  return withBase(
    pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : `${pathname.replace(/(\.md)?$/, '.html')}${search}${hash}`,
  )
}

const inBrowser = typeof window !== 'undefined'
const hashRef = ref(inBrowser ? location.hash : '')
if (inBrowser) {
  window.addEventListener('hashchange', () => {
    hashRef.value = location.hash
  })
}

export function isActive(route: Route, path?: string): boolean {
  if (path === undefined)
    return false

  const routePath = normalize(`/${route.data.relativePath}`)
  const pagePath = normalize(path)

  return routePath === pagePath
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

// external

export function joinUrl(base: string, path: string): string {
  const baseEndsWithSlash = base.endsWith('/')
  const pathStartsWithSlash = path.startsWith('/')

  if (baseEndsWithSlash && pathStartsWithSlash)
    return base.slice(0, -1) + path

  if (!baseEndsWithSlash && !pathStartsWithSlash)
    return `${base}/${path}`

  return base + path
}

/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export function removeExtention(path: string): string {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/'
}
