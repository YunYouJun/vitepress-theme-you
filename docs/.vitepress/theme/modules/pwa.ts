export const install = async () => {
  if (typeof window === 'undefined')
    return

  const { registerSW } = await import('virtual:pwa-register')
  registerSW({ immediate: true })
}
