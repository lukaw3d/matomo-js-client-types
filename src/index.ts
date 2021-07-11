import { App } from 'vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { Options } from './types/options'
import { getMatomo, getResolvedHref, loadScript } from './utils'

const defaultOptions = {
	debug: false,
	disableCookies: false,
	requireCookieConsent: false,
	enableHeartBeatTimer: false,
	enableLinkTracking: true,
	heartBeatTimerInterval: 15,
	requireConsent: false,
	trackInitialView: true,
	trackerFileName: 'matomo',
	//trackerUrl: undefined,
	//trackerScriptUrl: undefined,
	//userId: undefined,
	//cookieDomain: undefined,
	//domains: undefined,
	preInitActions: []
}

export const matomoKey = 'Matomo'

function trackMatomoPageView(options: Options, to: RouteLocationNormalizedLoaded, from?: RouteLocationNormalizedLoaded): void {
	const Matomo = getMatomo()

	let title: string | undefined

	if (options.router) {
		let url = getResolvedHref(options.router, to.fullPath)
		let referrerUrl = from && from.fullPath ? getResolvedHref(options.router, from.fullPath) : undefined

		if (referrerUrl) {
			Matomo.setReferrerUrl(referrerUrl)
		}

		if (to.meta.analyticsIgnore) {
			options.debug && console.debug('[vue-matomo] Ignoring ' + url)
			return
		}

		options.debug && console.debug('[vue-matomo] Tracking ' + url)
		title = String(to.meta.title) || url

		if (url) {
			Matomo.setCustomUrl(url)
		}
	}

	Matomo.trackPageView(title)
}

function initMatomo(Vue: App, options: Options): void {
	const Matomo = getMatomo()

	const version = Number(Vue.version.split('.')[0])

	if (version > 2) {
		// Vue.config.globalProperties.$piwik = Matomo
		Vue.config.globalProperties.$matomo = Matomo
		Vue.provide(matomoKey, Matomo)
	} else {
		// Vue.prototype.$piwik = Matomo
		Vue.config.globalProperties.$matomo = Matomo
	}

	if (options.trackInitialView && options.router) {
		// Vue 3 must use currentRoute.value
		const currentRoute = options.router.currentRoute.value
		//  ? options.router.currentRoute.value
		//  : options.router.currentRoute

		// Register first page view
		trackMatomoPageView(options, currentRoute)
	}

	// Track page navigation if router is specified
	if (options.router) {
		options.router.afterEach((to, from) => {
			trackMatomoPageView(options, to, from)

			if (options.enableLinkTracking) {
				Matomo.enableLinkTracking()
			}
		})
	}
}

function matomoExists(): Promise<void> {
	// In case of TMS,  we load a first container_XXX.js which triggers asynchronously the loading of the standard matomo.js
	// this will avoid the error thrown in initMatomo when window.Matomo is undefined
	// if window.Matomo is still undefined when counter reaches 3000ms we reject and go to error

	return new Promise((resolve) => {
		const checkInterval = 50
		const timeout = 3000
		const waitStart = Date.now()

		const interval = setInterval(() => {
			if (window.Matomo || window.Piwik) {
				clearInterval(interval)

				return resolve()
			}

			if (Date.now() >= waitStart + timeout) {
				clearInterval(interval)

				throw new Error(`[vue-matomo]: window.Matomo undefined after waiting for ${timeout}ms`)
			}
		}, checkInterval)
	})
}

export function install(Vue: App, setupOptions: Options = {}): void {
	const options = Object.assign({}, defaultOptions, setupOptions)

	const { host, trackerFileName, trackerUrl, trackerScriptUrl } = options
	const trackerScript = trackerScriptUrl || `${host}/${trackerFileName}.js`
	const trackerEndpoint = trackerUrl || `${host}/${trackerFileName}.php`

	window._paq = window._paq || []
	window._paq.push(['setTrackerUrl', trackerEndpoint])

	if (options.siteId) {
		window._paq.push(['setSiteId', options.siteId])
	}

	if (options.requireConsent) {
		window._paq.push(['requireConsent'])
	}

	if (options.userId) {
		window._paq.push(['setUserId', options.userId])
		window._paq.push(['ping'])
	}

	if (options.enableLinkTracking) {
		window._paq.push(['enableLinkTracking'])
	}

	if (options.disableCookies) {
		window._paq.push(['disableCookies'])
	}

	if (options.requireCookieConsent) {
		window._paq.push(['requireCookieConsent'])
	}

	if (options.enableHeartBeatTimer) {
		window._paq.push(['enableHeartBeatTimer', options.heartBeatTimerInterval])
	}

	if (options.cookieDomain) {
		window._paq.push(['setCookieDomain', options.cookieDomain])
	}

	if (options.domains) {
		window._paq.push(['setDomains', options.domains])
	}

	options.preInitActions.forEach((action) => window._paq.push(action))

	loadScript(trackerScript)
		.then(() => matomoExists())
		.then(() => initMatomo(Vue, options))
		.catch((error) => {
			if (error.target) {
				return console.error(
					`[vue-matomo] An error occurred trying to load ${error.target.src}. ` +
					'If the file exists you may have an ad- or tracking blocker enabled.'
				)
			}

			console.error(error)
		})
}
