import { Router } from 'vue-router'

export interface Options {
	router?: Router
	host?: string
	siteId?: number | string
	debug?: boolean
	disableCookies?: boolean,
	requireCookieConsent?: boolean,
	enableHeartBeatTimer?: boolean,
	enableLinkTracking?: boolean,
	heartBeatTimerInterval?: 15,
	requireConsent?: boolean,
	trackInitialView?: boolean,
	trackerFileName?: 'matomo',
	trackerUrl?: string,
	trackerScriptUrl?: string,
	userId?: string,
	cookieDomain?: string,
	domains?: string,
	preInitActions?: [string, string][]
}
