import { Router } from 'vue-router'
import { Matomo } from './matomo'

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$matomo: Matomo.Client;
	}
}

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