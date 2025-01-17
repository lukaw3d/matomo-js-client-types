/// <reference types="." />

window._paq.push(['requireConsent'])

// @ts-expect-error Should detect typos
window._paq.push(['rrequireConsentt'])


window._paq.push(['rememberConsentGiven', 3])

// @ts-expect-error Should detect incorrect types
window._paq.push(['rememberConsentGiven', '3'])


window._paq.push([function () {
  const a: boolean = this.hasRememberedConsent()

  // @ts-expect-error Should detect incorrect returns
  const b: string = this.hasRememberedConsent()
}])


window._paq.push(['trackPageView'])
window._paq.push(['trackPageView', 'Custom title'])
window._paq.push(['trackPageView', 'Custom title', {customData: 1}])
window._paq.push(['trackPageView', 'Custom title', {customData: 1}, () => {}])

// @ts-expect-error Should detect incorrect types
window._paq.push(['trackPageView', 1, 2, 3])
