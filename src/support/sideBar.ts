import type { YouTheme } from '../config'
import { ensureStartingSlash, isArray, removeExtention } from '../utils'

export function isSideBarConfig(
  sidebar: YouTheme.SideBarConfig | YouTheme.MultiSideBarConfig,
): sidebar is YouTheme.SideBarConfig {
  return sidebar === false || sidebar === 'auto' || isArray(sidebar)
}

export function isSideBarGroup(
  item: YouTheme.SideBarItem,
): item is YouTheme.SideBarGroup {
  return (item as YouTheme.SideBarGroup).children !== undefined
}

export function isSideBarEmpty(sidebar?: YouTheme.SideBarConfig): boolean {
  return isArray(sidebar) ? sidebar.length === 0 : !sidebar
}

/**
 * Get the `SideBarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return `auto` as a fallback.
 */
export function getSideBarConfig(
  sidebar: YouTheme.SideBarConfig | YouTheme.MultiSideBarConfig,
  path: string,
): YouTheme.SideBarConfig {
  if (isSideBarConfig(sidebar))
    return sidebar

  path = ensureStartingSlash(path)

  // eslint-disable-next-line no-restricted-syntax
  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(dir)))
      return sidebar[dir]
  }

  return 'auto'
}

/**
 * Get flat sidebar links from the sidebar items. This method is useful for
 * creating the "next and prev link" feature. It will ignore any items that
 * don't have `link` property and removes `.md` or `.html` extension if a
 * link contains it.
 */
export function getFlatSideBarLinks(
  sidebar: YouTheme.SideBarItem[],
): YouTheme.SideBarLink[] {
  return sidebar.reduce<YouTheme.SideBarLink[]>((links, item) => {
    if (item.link)
      links.push({ text: item.text, link: removeExtention(item.link) })

    if (isSideBarGroup(item))
      links = [...links, ...getFlatSideBarLinks(item.children)]

    return links
  }, [])
}
