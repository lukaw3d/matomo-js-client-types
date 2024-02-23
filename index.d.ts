declare global {
	const Matomo: Matomo.Client

	interface Window {
		/**
		 * JavaScript Tracking Client
		 */
		Matomo: Matomo.Client

		/**
		 * JavaScript Tracking Client initialization method.
		 */
		matomoAsyncInit(): void

		/**
		 * Global array for Matomo configuration and tracking calls.
		 */
		_paq: Matomo.TrackerProxy

		/**
		 * @deprecated since 4.0.0 use `matomoAsyncInit()` instead
		 */
		piwikAsyncInit(): void

		/**
		 * @deprecated since 4.0.0 use `window.Matomo` instead.
		 */
		Piwik: Matomo.Client
	}
}

export namespace Matomo {
	type SiteID = number | string

	interface TrackingAPIMethodMap {
		'hasConsent': string
		'getVisitorId': string
		'getVisitorInfo': string
		'getAttributionInfo': string
		'getAttributionCampaignName': string
		'getAttributionCampaignKeyword': string
		'getAttributionReferrerTimestamp': string
		'getAttributionReferrerUrl': string
		'setTrackerUrl': string
		'getTrackerUrl': string
		'getMatomoUrl': string
		'getPiwikUrl': string
		'addTracker': string
		'getSiteId': string
		'setSiteId': string
		'resetUserId': string
		'setUserId': string
		'setVisitorId': string
		'getUserId': string
		'setCustomData': string
		'getCustomData': string
		'setCustomRequestProcessing': string
		'appendToTrackingUrl': string
		'getRequest': string
		'addPlugin': string
		'setCustomDimension': string
		'getCustomDimension': string
		'deleteCustomDimension': string
		'setCustomVariable': string
		'getCustomVariable': string
		'deleteCustomVariable': string
		'deleteCustomVariables': string
		'storeCustomVariablesInCookie': string
		'setLinkTrackingTimer': string
		'getLinkTrackingTimer': string
		'setDownloadExtensions': string
		'addDownloadExtensions': string
		'removeDownloadExtensions': string
		'setDomains': string
		'enableCrossDomainLinking': string
		'disableCrossDomainLinking': string
		'isCrossDomainLinkingEnabled': string
		'setCrossDomainLinkingTimeout': string
		'getCrossDomainLinkingUrlParameter': string
		'setIgnoreClasses': string
		'setRequestMethod': string
		'setRequestContentType': string
		'setGenerationTimeMs': string
		'setReferrerUrl': string
		'setCustomUrl': string
		'getCurrentUrl': string
		'setDocumentTitle': string
		'setPageViewId': string
		'setAPIUrl': string
		'setDownloadClasses': string
		'setLinkClasses': string
		'setCampaignNameKey': string
		'setCampaignKeywordKey': string
		'discardHashTag': string
		'setCookieNamePrefix': string
		'setCookieDomain': string
		'getCookieDomain': string
		'hasCookies': string
		'setSessionCookie': string
		'getCookie': string
		'setCookiePath': string
		'getCookiePath': string
		'setVisitorCookieTimeout': string
		'setSessionCookieTimeout': string
		'getSessionCookieTimeout': string
		'setReferralCookieTimeout': string
		'setSecureCookie': string
		'setCookieSameSite': string
		'disableCookies': string
		'areCookiesEnabled': string
		'setCookieConsentGiven': string
		'requireCookieConsent': string
		'getRememberedCookieConsent': string
		'forgetCookieConsentGiven': string
		'rememberCookieConsentGiven': string
		'deleteCookies': string
		'setDoNotTrack': string
		'alwaysUseSendBeacon': string
		'disableAlwaysUseSendBeacon': string
		'addListener': string
		'enableLinkTracking': string
		'enableJSErrorTracking': string
		'disablePerformanceTracking': string
		'enableHeartBeatTimer': string
		'disableHeartBeatTimer': string
		'killFrame': string
		'redirectFile': string
		'setCountPreRendered': string
		'trackGoal': string
		'trackLink': string
		'getNumTrackedPageViews': string
		'trackPageView': string
		'trackAllContentImpressions': string
		'trackVisibleContentImpressions': string
		'trackContentImpression': string
		'trackContentImpressionsWithinNode': string
		'trackContentInteraction': string
		'trackContentInteractionNode': string
		'logAllContentBlocksOnPage': string
		'trackEvent': string
		'trackSiteSearch': string
		'setEcommerceView': string
		'getEcommerceItems': string
		'addEcommerceItem': string
		'removeEcommerceItem': string
		'clearEcommerceCart': string
		'trackEcommerceOrder': string
		'trackEcommerceCartUpdate': string
		'trackRequest': string
		'ping': string
		'disableQueueRequest': string
		'queueRequest': string
		'isConsentRequired': string
		'getRememberedConsent': string
		'hasRememberedConsent': string
		'requireConsent': string
		'setConsentGiven': string
		'rememberConsentGiven': string
		'forgetConsentGiven': string
		'isUserOptedOut': string
		'optUserOut': string
		'forgetUserOptOut': string
	}

	interface TrackingAPIMethodArguments {
		'hasConsent': []
		'getVisitorId': []
		'getVisitorInfo': []
		'getAttributionInfo': []
		'getAttributionCampaignName': []
		'getAttributionCampaignKeyword': []
		'getAttributionReferrerTimestamp': []
		'getAttributionReferrerUrl': []
		'setTrackerUrl': [string]
		'getTrackerUrl': []
		'getMatomoUrl': []
		'getPiwikUrl': []
		'addTracker': [string, SiteID]
		'getSiteId': []
		'setSiteId': [SiteID]
		'resetUserId': []
		'setUserId': [string]
		'setVisitorId': [string]
		'getUserId': []
		'setCustomData': [any, any]
		'getCustomData': []
		'setCustomRequestProcessing': [any]
		'appendToTrackingUrl': [string]
		'getRequest': [any]
		'addPlugin': [any, any]
		'setCustomDimension': [any, any]
		'getCustomDimension': [any]
		'deleteCustomDimension': [any]
		'setCustomVariable': [any, any, any, any]
		'getCustomVariable': [any, any]
		'deleteCustomVariable': [any, any]
		'deleteCustomVariables': [string]
		'storeCustomVariablesInCookie': []
		'setLinkTrackingTimer': [number]
		'getLinkTrackingTimer': []
		'setDownloadExtensions': [string | string[]]
		'addDownloadExtensions': [string | string[]]
		'removeDownloadExtensions': [string | string[]]
		'setDomains': [string | string[]]
		'enableCrossDomainLinking': []
		'disableCrossDomainLinking': []
		'isCrossDomainLinkingEnabled': []
		'setCrossDomainLinkingTimeout': [number]
		'getCrossDomainLinkingUrlParameter': []
		'setIgnoreClasses': [string | string[]]
		'setRequestMethod': [any]
		'setRequestContentType': [any]
		'setGenerationTimeMs': [any]
		'setReferrerUrl': [any]
		'setCustomUrl': [any]
		'getCurrentUrl': []
		'setDocumentTitle': [any]
		'setPageViewId': [any]
		'setAPIUrl': [any]
		'setDownloadClasses': [any]
		'setLinkClasses': [any]
		'setCampaignNameKey': [string | string[]]
		'setCampaignKeywordKey': [string | string[]]
		'discardHashTag': [boolean]
		'setCookieNamePrefix': [string]
		'setCookieDomain': [string]
		'getCookieDomain': []
		'hasCookies': []
		'setSessionCookie': [any, any, any]
		'getCookie': [any]
		'setCookiePath': [any]
		'getCookiePath': [any]
		'setVisitorCookieTimeout': [any]
		'setSessionCookieTimeout': [any]
		'getSessionCookieTimeout': []
		'setReferralCookieTimeout': [any]
		'setSecureCookie': [boolean]
		'setCookieSameSite': [any]
		'disableCookies': []
		'areCookiesEnabled': []
		'setCookieConsentGiven': []
		'requireCookieConsent': []
		'getRememberedCookieConsent': []
		'forgetCookieConsentGiven': []
		'rememberCookieConsentGiven': [number]
		'deleteCookies': []
		'setDoNotTrack': [boolean]
		'alwaysUseSendBeacon': []
		'disableAlwaysUseSendBeacon': []
		'addListener': [Element, boolean]
		'enableLinkTracking': [boolean?]
		'enableJSErrorTracking': []
		'disablePerformanceTracking': []
		'enableHeartBeatTimer': [number]
		'disableHeartBeatTimer': []
		'killFrame': []
		'redirectFile': [string]
		'setCountPreRendered': [boolean]
		'trackGoal': [number | string, number, any, Function]
		'trackLink': [string, string, any, Function]
		'getNumTrackedPageViews': []
		'trackPageView': [string?, any?, Function?]
		'trackAllContentImpressions': []
		'trackVisibleContentImpressions': [boolean, number]
		'trackContentImpression': [string, string, string]
		'trackContentImpressionsWithinNode': [Element]
		'trackContentInteraction': [string, string, string, string]
		'trackContentInteractionNode': [Element, string]
		'logAllContentBlocksOnPage': []
		'trackEvent': [any, any, any, any, any, any]
		'trackSiteSearch': [any, any, any, any]
		'setEcommerceView': [any, any, any, any]
		'getEcommerceItems': []
		'addEcommerceItem': [any, any?, any?, any?, any?]
		'removeEcommerceItem': [any]
		'clearEcommerceCart': []
		'trackEcommerceOrder': [string | number, number, number?, number?, number?, number?]
		'trackEcommerceCartUpdate': [number]
		'trackRequest': [string, any, Function, any]
		'ping': []
		'disableQueueRequest': []
		'queueRequest': [string]
		'isConsentRequired': []
		'getRememberedConsent': []
		'hasRememberedConsent': []
		'requireConsent': []
		'setConsentGiven': [boolean]
		'rememberConsentGiven': [number]
		'forgetConsentGiven': []
		'isUserOptedOut': []
		'optUserOut': []
		'forgetUserOptOut': []
	}

	export interface Client {
		initialized: boolean

		/**
		 * To support IE7 and older, load a polyfill to `window.JSON`
		 */
		JSON: JSON

		/**
		 * DOM Document related methods
		 */
		DOM: {
			/**
			 * Adds an event listener to the given element.
			 * @param element
			 * @param eventType
			 * @param eventHandler
			 * @param useCapture  Optional
			 */
			addEventListener(element: HTMLElement, eventType: string, eventHandler: string, useCapture?: boolean): void

			/**
			 * Specify a function to execute when the DOM is fully loaded.
			 *
			 * If the DOM is already loaded, the function will be executed immediately.
			 *
			 * @param function callback
			 */
			onLoad: (callback: Function) => void

			/**
			 * Specify a function to execute when the DOM is ready.
			 *
			 * If the DOM is already ready, the function will be executed immediately.
			 *
			 * @param function callback
			 */
			onReady: (callback: Function) => void

			/**
			 * Detect whether a node is visible right now.
			 */
			isNodeVisible: (node: Node) => boolean

			/**
			 * Detect whether a node has been visible at some point
			 */
			isOrWasNodeVisible: (node: Node) => boolean
		}

		/**
		 * Listen to an event and invoke the handler when a the event is triggered.
		 *
		 * @param string event
		 * @param function handler
		 */
		on(event: string, handler: Function): void

		/**
		 * Remove a handler to no longer listen to the event. Must pass the same handler that was used when
		 * attaching the event via ".on".
		 * @param string event
		 * @param function handler
		 */
		off(event: string, handler: Function): void

		/**
		 * Triggers the given event and passes the parameters to all handlers.
		 *
		 * @param string event
		 * @param Array extraParameters
		 * @param Object context  If given the handler will be executed in this context
		 */
		trigger(event: string, extraParameters: Record<string, unknown>, context: any): void

		/**
		 * Add plugin
		 *
		 * @param string pluginName
		 * @param Object pluginObj
		 */
		addPlugin(pluginName: string, pluginObj: any): void

		/**
		 * Get Tracker (factory method)
		 *
		 * @param string matomoUrl
		 * @param int|string siteId
		 * @return Tracker
		 */
		getTracker(matomoUrl: string, siteId: SiteID): Matomo.Tracker

		/**
		 * Get all created async trackers
		 *
		 * @return Tracker[]
		 */
		getAsyncTrackers(): Matomo.Tracker[]

		/**
		 * Adds a new tracker. All sent requests will be also sent to the given siteId and matomoUrl.
		 * If matomoUrl is not set, current url will be used.
		 *
		 * @param null|string matomoUrl  If null, will reuse the same tracker URL of the current tracker instance
		 * @param int|string siteId
		 * @return Tracker
		 */
		addTracker(matomoUrl: null | string, siteId: SiteID): Tracker

		/**
		 * Get internal asynchronous tracker object.
		 *
		 * If no parameters are given, it returns the internal asynchronous tracker object. If a matomoUrl and idSite
		 * is given, it will try to find an optional
		 */
		getAsyncTracker(matomoUrl?: string, siteId?: SiteID): Tracker

		/**
		 * When calling plugin methods via `_paq.push(['...'])` and the plugin is loaded separately because
		 * matomo.js is not writable then there is a chance that first matomo.js is loaded and later the plugin.
		 * In this case we would have already executed all `_paq.push` methods and they would not have succeeded
		 * because the plugin will be loaded only later. In this case, once a plugin is loaded, it should call
		 * `Matomo.retryMissedPluginCalls()` so they will be executed after all.
		 */
		retryMissedPluginCalls(): void
	}

	export interface TrackerProxy {
		push<K extends keyof TrackingAPIMethodMap>(parameterArray: [ K, ...TrackingAPIMethodArguments[K] ] | [ (this: Tracker) => void, ...any ]): void
	}

	export interface Tracker {
		hasConsent: () => boolean

		/**
		 * @return Visitor ID (from first party cookie) in hexits (or empty string, if not yet known)
		 */
		getVisitorId: () => string

		/**
		 * @return visitor information (from first party cookie)
		 */
		getVisitorInfo: () => Array<unknown>

		/**
		 * Get the Attribution information, which is an array that contains
		 * the Referrer used to reach the site as well as the campaign name and keyword
		 * It is useful only when used in conjunction with Tracker API function `setAttributionInfo()`
		 * To access specific data point, you should use the other functions `getAttributionReferrer*` and `getAttributionCampaign*`
		 *
		 * @return Attribution array, Example use:
		 *   1) Call `windowAlias.JSON.stringify(matomoTracker.getAttributionInfo())`
		 *   2) Pass this json encoded string to the Tracking API (php or java client): `setAttributionInfo()`
		 */
		getAttributionInfo: () => Array<unknown>

		/**
		 * @return Get the Campaign name that was parsed from the landing page URL when the visitor
		 * landed on the site originally
		 */
		getAttributionCampaignName: () => string

		/**
		 * @return Get the Campaign keyword that was parsed from the landing page URL when the visitor
		 * landed on the site originally
		 */
		getAttributionCampaignKeyword: () => string

		/**
		 * Get the time at which the referrer (used for Goal Attribution) was detected
		 *
		 * @return Timestamp or 0 if no referrer currently set
		 */
		getAttributionReferrerTimestamp: () => number

		/**
		 * Get the full referrer URL that will be used for Goal Attribution
		 *
		 * @return Raw URL, or empty string '' if no referrer currently set
		 */
		getAttributionReferrerUrl: () => string

		/**
		 * Specify the Matomo tracking URL
		 */
		setTrackerUrl: (trackerUrl: string) => void

		/**
		 * @returns Matomo tracking URL
		 */
		getTrackerUrl: () => string

		/**
		 * @returns Matomo server URL
		 */
		getMatomoUrl: () => string

		/**
		 * @deprecated since 4.0.0 use `getMatomoUrl()` instead.
		 */
		getPiwikUrl: () => string

		/**
		 * Adds a new tracker. All sent requests will be also sent to the given siteId and matomoUrl.
		 *
		 * @param matomoUrl  The tracker URL of the current tracker instance
		 * @param siteId
		 */
		addTracker: (matomoUrl: string, siteId: SiteID) => Tracker

		/**
		 * @returns site ID
		 */
		getSiteId: () => number

		/**
		 * Specify the site ID
		 */
		setSiteId: (siteId: SiteID) => unknown

		/**
		 * Clears the User ID
		 */
		resetUserId: () => void

		/**
		 * Sets a User ID to this user (such as an email address or a username)
		 */
		setUserId: (userId: string) => void

		/**
		 * Sets a Visitor ID to this visitor. Should be a 16 digit hex string.
		 * The visitorId won't be persisted in a cookie or something similar and needs to be set every time.
		 */
		setVisitorId: (visitorId: string) => void

		/**
		 * @returns User ID if set.
		 */
		getUserId: () => string

		/**
		 * Pass custom data to the server
		 *
		 * Examples:
		 *   tracker.setCustomData(object);
		 *   tracker.setCustomData(key, value);
		 *
		 * @param {any} key_or_obj
		 * @param {any} opt_value
		 */
		setCustomData: (key_or_obj: any, opt_value: any) => unknown

		/**
		 * Get custom data
		 *
		 * @return mixed
		 */
		getCustomData: () => unknown

		/**
		 * Configure function with custom request content processing logic.
		 * It gets called after request content in form of query parameters string has been prepared and before request content gets sent.
		 *
		 * Examples:
		 *   tracker.setCustomRequestProcessing(function(request){
		 *     var pairs = request.split('&');
		 *     var result = {};
		 *     pairs.forEach(function(pair) => unknown	 *       pair = pair.split('=');
		 *       result[pair[0]] = decodeURIComponent(pair[1] || '');
		 *     });
		 *     return JSON.stringify(result);
		 *   });
		 *
		 * @param {Function} customRequestContentProcessingLogic
		 */
		setCustomRequestProcessing: (customRequestContentProcessingLogic: any) => unknown

		/**
		 * Appends the specified query string to the matomo.php?... Tracking API URL
		 *
		 * @param queryString eg. 'lat=140&long=100'
		 */
		appendToTrackingUrl: (queryString: string) => unknown

		/**
		 * Returns the query string for the current HTTP Tracking API request.
		 * Matomo would prepend the hostname and path to Matomo: http://example.org/matomo/matomo.php?
		 * prior to sending the request.
		 *
		 * @param request eg. "param=value&param2=value2"
		 */
		getRequest: (request: any) => unknown

		/**
		 * Add plugin defined by a name and a callback function.
		 * The callback function will be called whenever a tracking request is sent.
		 * This can be used to append data to the tracking request, or execute other custom logic.
		 *
		 * @param {string} pluginName
		 * @param Object pluginObj
		 */
		addPlugin: (pluginName: any, pluginObj: any) => unknown

		/**
		 * Set Custom Dimensions. Set Custom Dimensions will not be cleared after a tracked pageview and will
		 * be sent along all following tracking requests. It is possible to remove/clear a value via `deleteCustomDimension`.
		 *
		 * @param {number} index A Custom Dimension index
		 * @param {string} value
		 */
		setCustomDimension: (customDimensionId: any, value: any) => unknown

		/**
		 * Get a stored value for a specific Custom Dimension index.
		 *
		 * @param {number} index A Custom Dimension index
		 */
		getCustomDimension: (customDimensionId: any) => unknown

		/**
		 * Delete a custom dimension.
		 *
		 * @param {number} index Custom dimension Id
		 */
		deleteCustomDimension: (customDimensionId: any) => unknown

		/**
		 * Set custom variable within this visit
		 *
		 * @param {number} index Custom variable slot ID from 1-5
		 * @param {string} name
		 * @param {string} value
		 * @param {string} scope Scope of Custom Variable:
		 *                     - "visit" will store the name/value in the visit and will persist it in the cookie for the duration of the visit,
		 *                     - "page" will store the name/value in the next page view tracked.
		 *                     - "event" will store the name/value in the next event tracked.
		 */
		setCustomVariable: (index: any, name: any, value: any, scope: any) => unknown

		/**
		 * Get custom variable
		 *
		 * @param {number} index Custom variable slot ID from 1-5
		 * @param {string} scope Scope of Custom Variable: "visit" or "page" or "event"
		 */
		getCustomVariable: (index: any, scope: any) => unknown

		/**
		 * Delete custom variable
		 *
		 * @param {number} index Custom variable slot ID from 1-5
		 * @param {string} scope
		 */
		deleteCustomVariable: (index: any, scope: any) => unknown

		/**
		 * Deletes all custom variables for a certain scope.
		 *
		 */
		deleteCustomVariables: (scope: string) => unknown

		/**
		 * When called then the Custom Variables of scope "visit" will be stored (persisted) in a first party cookie
		 * for the duration of the visit. This is useful if you want to call getCustomVariable later in the visit.
		 *
		 * By default, Custom Variables of scope "visit" are not stored on the visitor's computer.
		 */
		storeCustomVariablesInCookie: () => void

		/**
		 * Set delay for link tracking (in milliseconds)
		 */
		setLinkTrackingTimer: (delay: number) => void

		/**
		 * Get delay for link tracking (in milliseconds)
		 */
		getLinkTrackingTimer: () => number

		/**
		 * Set list of file extensions to be recognized as downloads
		 *
		 * @param extensions
		 */
		setDownloadExtensions: (extensions: string | string[]) => unknown

		/**
		 * Specify additional file extensions to be recognized as downloads
		 *
		 * @param extensions  for example `'custom'` or `['custom1', 'custom2', 'custom3']`
		 */
		addDownloadExtensions: (extensions: string | string[]) => unknown

		/**
		 * Removes specified file extensions from the list of recognized downloads
		 *
		 * @param extensions  for example 'custom' or ['custom1','custom2','custom3']
		 */
		removeDownloadExtensions: (extensions: string | string[]) => unknown

		/**
		 * Set array of domains to be treated as local. Also supports path, eg '.matomo.org/subsite1'. In this
		 * case all links that don't go to '*.matomo.org/subsite1/ *' would be treated as outlinks.
		 * For example a link to 'matomo.org/' or 'matomo.org/subsite2' both would be treated as outlinks.
		 *
		 * Also supports page wildcard, eg 'matomo.org/index*'. In this case all links
		 * that don't go to matomo.org/index* would be treated as outlinks.
		 *
		 * The current domain will be added automatically if no given host alias contains a path and if no host
		 * alias is already given for the current host alias. Say you are on "example.org" and set
		 * "hostAlias = ['example.com', 'example.org/test']" then the current "example.org" domain will not be
		 * added as there is already a more restrictive hostAlias 'example.org/test' given. We also do not add
		 * it automatically if there was any other host specifying any path like
		 * "['example.com', 'example2.com/test']". In this case we would also not add the current
		 * domain "example.org" automatically as the "path" feature is used. As soon as someone uses the path
		 * feature, for Matomo JS Tracker to work correctly in all cases, one needs to specify all hosts
		 * manually.
		 *
		 * @param hostsAlias
		 */
		setDomains: (hostsAlias: string | string[]) => unknown

		/**
		 * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in
		 * the browser's first party cookies. This means the cookie can only be accessed by pages on the same domain.
		 * If you own multiple domains and would like to track all the actions and pageviews of a specific visitor
		 * into the same visit, you may enable cross domain linking. Whenever a user clicks on a link it will append
		 * a URL parameter pk_vid to the clicked URL which consists of these parts: 16 char visitorId, a 10 character
		 * current timestamp and the last 6 characters are an id based on the userAgent to identify the users device).
		 * This way the current visitorId is forwarded to the page of the different domain.
		 *
		 * On the different domain, the Matomo tracker will recognize the set visitorId from the URL parameter and
		 * reuse this parameter if the page was loaded within 45 seconds. If cross domain linking was not enabled,
		 * it would create a new visit on that page because we wouldn't be able to access the previously created
		 * cookie. By enabling cross domain linking you can track several different domains into one website and
		 * won't lose for example the original referrer.
		 *
		 * To make cross domain linking work you need to set which domains should be considered as your domains by
		 * calling the method "setDomains()" first. We will add the URL parameter to links that go to a
		 * different domain but only if the domain was previously set with "setDomains()" to make sure not to append
		 * the URL parameters when a link actually goes to a third-party URL.
		 */
		enableCrossDomainLinking: () => void

		/**
		 * Disable cross domain linking if it was previously enabled. See enableCrossDomainLinking();
		 */
		disableCrossDomainLinking: () => void

		/**
		 * Detect whether cross domain linking is enabled or not. See enableCrossDomainLinking();
		 */
		isCrossDomainLinkingEnabled: () => boolean

		/**
		 * By default, the two visits across domains will be linked together
		 * when the link is click and the page is loaded within 180 seconds.
		 * @param timeout in seconds
		 */
		setCrossDomainLinkingTimeout: (timeout: number) => void

		/**
		 * Returns the query parameter appended to link URLs so cross domain visits
		 * can be detected.
		 *
		 * If your application creates links dynamically, then you'll have to add this
		 * query parameter manually to those links (since the JavaScript tracker cannot
		 * detect when those links are added).
		 *
		 * Eg:
		 *
		 * var url = 'http://myotherdomain.com/?' + matomoTracker.getCrossDomainLinkingUrlParameter();
		 * $element.append('<a href="' + url + '"/>');
		 */
		getCrossDomainLinkingUrlParameter: () => string

		/**
		 * @param ignoreClasses array of classes to be ignored if present in link
		 */
		setIgnoreClasses: (ignoreClasses: string | string[]) => void

		/**
		 * Set request method. If you specify GET then it will automatically disable sendBeacon.
		 *
		 * @param {string} method GET or POST; default is GET
		 */
		setRequestMethod: (method: any) => unknown

		/**
		 * Set request Content-Type header value, applicable when POST request method is used for submitting tracking events.
		 * See XMLHttpRequest Level 2 spec, section 4.7.2 for invalid headers
		 * @link http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html
		 *
		 * @param {string} requestContentType; default is 'application/x-www-form-urlencoded; charset=UTF-8'
		 */
		setRequestContentType: (requestContentType: any) => unknown

		/**
		 * @deprecated since Matomo 4 the performance API is now used.
		 * @param generationTime
		 */
		setGenerationTimeMs: (generationTime: any) => unknown

		/**
		 * Override referrer
		 *
		 * @param {string} url
		 */
		setReferrerUrl: (url: any) => unknown

		/**
		 * Override url
		 *
		 * @param {string} url
		 */
		setCustomUrl: (url: any) => unknown

		/**
		 * Returns the current url of the page that is currently being visited. If a custom URL was set, the
		 * previously defined custom URL will be returned.
		 */
		getCurrentUrl: () => unknown

		/**
		 * Override document.title
		 *
		 * @param {string} title
		 */
		setDocumentTitle: (title: any) => unknown

		/**
		 * Override PageView id for every use of logPageView(). Do not use this if you call trackPageView() multiple times during tracking (if, for example, you are tracking a single page application).
		 *
		 * @param {string} pageView
		 */
		setPageViewId: (pageView: any) => unknown

		/**
		 * Set the URL of the Matomo API. It is used for Page Overlay.
		 * This method should only be called when the API URL differs from the tracker URL.
		 *
		 * @param {string} apiUrl
		 */
		setAPIUrl: (apiUrl: any) => unknown

		/**
		 * Set array of classes to be treated as downloads
		 *
		 * @param {string}|array downloadClasses
		 */
		setDownloadClasses: (downloadClasses: any) => unknown

		/**
		 * Set array of classes to be treated as outlinks
		 *
		 * @param {string}|array linkClasses
		 */
		setLinkClasses: (linkClasses: any) => unknown

		/**
		 * Set array of campaign name parameters
		 *
		 * @see https://matomo.org/faq/how-to/#faq_120
		 */
		setCampaignNameKey: (campaignNames: string | string[]) => void

		/**
		 * Set array of campaign keyword parameters
		 *
		 * @see https://matomo.org/faq/how-to/#faq_120
		 * @param {string}|array campaignKeywords
		 */
		setCampaignKeywordKey: (campaignKeywords: string | string[]) => void

		/**
		 * Strip hash tag (or anchor) from URL
		 * Note: this can be done in the Matomo>Settings>Websites on a per-website basis
		 *
		 * @deprecated
		 * @param enableFilter
		 */
		discardHashTag: (enableFilter: boolean) => void

		/**
		 * Set first-party cookie name prefix
		 */
		setCookieNamePrefix: (cookieNamePrefix: string) => void

		/**
		 * Set first-party cookie domain
		 */
		setCookieDomain: (domain: string) => void

		/**
		 * Get first-party cookie domain
		 */
		getCookieDomain: () => string

		/**
		 * Detect if cookies are enabled and supported by browser.
		 */
		hasCookies: () => boolean

		/**
		 * Set a first-party cookie for the duration of the session.
		 *
		 * @param {string} cookieName
		 * @param {string} cookieValue
		 * @param {number} msToExpire Defaults to session cookie timeout
		 */
		setSessionCookie: (cookieName: any, cookieValue: any, msToExpire: any) => unknown

		/**
		 * Get first-party cookie value.
		 *
		 * Returns null if cookies are disabled or if no cookie could be found for this name.
		 *
		 * @param {string} cookieName
		 */
		getCookie: (cookieName: any) => unknown

		/**
		 * Set first-party cookie path.
		 *
		 * @param {string} domain
		 */
		setCookiePath: (path: any) => unknown

		/**
		 * Get first-party cookie path.
		 *
		 * @param {string} domain
		 */
		getCookiePath: (path: any) => unknown

		/**
		 * Set visitor cookie timeout (in seconds) Defaults to 13 months (timeout=33955200)
		 * @param {number} timeout
		 */
		setVisitorCookieTimeout: (timeout: any) => unknown

		/**
		 * Set session cookie timeout (in seconds).
		 * Defaults to 30 minutes (timeout=1800)
		 * @param {number} timeout
		 */
		setSessionCookieTimeout: (timeout: any) => unknown

		/**
		 * Get session cookie timeout (in seconds).
		 */
		getSessionCookieTimeout: () => unknown

		/**
		 * Set referral cookie timeout (in seconds).
		 * Defaults to 6 months (15768000000)
		 * @param {number} timeout
		 */
		setReferralCookieTimeout: (timeout: any) => unknown

		/**
		 * Set conversion attribution to first referrer and campaign
		 *
		 * @param bool if true, use first referrer (and first campaign)             if false, use the last referrer (or campaign)/
		setConversionAttributionFirstReferrer: (enable) => unknown

		/**
		 * Enable the Secure cookie flag on all first party cookies.
		 * This should be used when your website is only available under HTTPS
		 * so that all tracking cookies are always sent over secure connection.
		 *
		 * Warning: If your site is available under http and https,
		 * setting this might lead to duplicate or incomplete visits.
		 *
		 * @param bool
		 */
		setSecureCookie: (enable: boolean) => unknown

		/**
		 * Set the SameSite attribute for cookies to a custom value.
		 * You might want to use this if your site is running in an iframe since
		 * then it will only be able to access the cookies if SameSite is set to 'None'.
		 *
		 *
		 * Warning:
		 * Sets CookieIsSecure to true on None, because None will only work with Secure; cookies
		 * If your site is available under http and https,
		 * using "None" might lead to duplicate or incomplete visits.
		 *
		 * @param {string} either Lax, None or Strict
		 */
		setCookieSameSite: (sameSite: any) => unknown

		/**
		 * Disables all cookies from being set
		 *
		 * Existing cookies will be deleted on the next call to track
		 */
		disableCookies: () => unknown

		/**
		 * Detects if cookies are enabled or not
		 */
		areCookiesEnabled: () => { boolean: any }

		/**
		 * Enables cookies if they were disabled previously.
		 */
		setCookieConsentGiven: () => unknown

		/**
		 * When called, no cookies will be set until you have called `setCookieConsentGiven()`
		 * unless consent was given previously AND you called {@link rememberCookieConsentGiven()} when the user
		 * gave consent.
		 *
		 * This may be useful when you want to implement for example a popup to ask for cookie consent.
		 * Once the user has given consent, you should call {@link setCookieConsentGiven()}
		 * or {@link rememberCookieConsentGiven()}.
		 *
		 * If you require tracking consent for example because you are tracking personal data and GDPR applies to you,
		 * then have a look at `_paq.push(['requireConsent'])` instead.
		 *
		 * If the user has already given consent in the past, you can either decide to not call `requireCookieConsent` at all
		 * or call `_paq.push(['setCookieConsentGiven'])` on each page view at any time after calling `requireCookieConsent`.
		 *
		 * When the user gives you the consent to set cookies, you can also call `_paq.push(['rememberCookieConsentGiven', optionalTimeoutInHours])`
		 * and for the duration while the cookie consent is remembered, any call to `requireCoookieConsent` will be automatically ignored
		 * until you call `forgetCookieConsentGiven`.
		 * `forgetCookieConsentGiven` needs to be called when the user removes consent for using cookies. This means if you call `rememberCookieConsentGiven` at the
		 * time the user gives you consent, you do not need to ever call `_paq.push(['setCookieConsentGiven'])` as the consent
		 * will be detected automatically through cookies.
		 */
		requireCookieConsent: () => unknown

		/**
		 * If the user has given cookie consent previously and this consent was remembered, it will return the number
		 * in milliseconds since 1970/01/01 which is the date when the user has given cookie consent. Please note that
		 * the returned time depends on the users local time which may not always be correct.
		 *
		 */
		getRememberedCookieConsent: () => number | string

		/**
		 * Calling this method will remove any previously given cookie consent and it disables cookies for subsequent
		 * page views. You may call this method if the user removes cookie consent manually, or if you
		 * want to re-ask for cookie consent after a specific time period.
		 */
		forgetCookieConsentGiven: () => unknown

		/**
		 * Calling this method will remember that the user has given cookie consent across multiple requests by setting
		 * a cookie named "mtm_cookie_consent". You can optionally define the lifetime of that cookie in hours
		 * using a parameter.
		 *
		 * When you call this method, we imply that the user has given cookie consent for this page view, and will also
		 * imply consent for all future page views unless the cookie expires or the user
		 * deletes all their cookies. Remembering cookie consent means even if you call {@link disableCookies()},
		 * then cookies will still be enabled and it won't disable cookies since the user has given consent for cookies.
		 *
		 * Please note that this feature requires you to set the `cookieDomain` and `cookiePath` correctly. Please
		 * also note that when you call this method, consent will be implied for all sites that match the configured
		 * cookieDomain and cookiePath. Depending on your website structure, you may need to restrict or widen the
		 * scope of the cookie domain/path to ensure the consent is applied to the sites you want.
		 *
		 * @param hoursToExpire After how many hours the cookie consent should expire. By default the consent is valid
		 *                      for 30 years unless cookies are deleted by the user or the browser prior to this
		 */
		rememberCookieConsentGiven: (hoursToExpire: number) => void

		/**
		 * One off cookies clearing. Useful to call this when you know for sure a new visitor is using the same browser,
		 * it maybe helps to "reset" tracking cookies to prevent data reuse for different users.
		 */
		deleteCookies: () => void

		/**
		 * Handle do-not-track requests
		 *
		 * @param enable If true, don't track if user agent sends 'do-not-track' header
		 */
		setDoNotTrack: (enable: boolean) => void

		/**
		 * Enables send beacon usage instead of regular XHR which reduces the link tracking time to a minimum
		 * of 100ms instead of 500ms (default). This means when a user clicks for example on an outlink, the
		 * navigation to this page will happen 400ms faster.
		 * In case you are setting a callback method when issuing a tracking request, the callback method will
		 *  be executed as soon as the tracking request was sent through "sendBeacon" and not after the tracking
		 *  request finished as it is not possible to find out when the request finished.
		 * Send beacon will only be used if the browser actually supports it.
		 */
		alwaysUseSendBeacon: () => void

		/**
		 * Disables send beacon usage instead and instead enables using regular XHR when possible. This makes
		 * callbacks work and also tracking requests will appear in the browser developer tools console.
		 */
		disableAlwaysUseSendBeacon: () => void

		/**
		 * Add click listener to a specific link element.
		 * When clicked, Matomo will log the click automatically.
		 *
		 * @param element
		 * @param enable If false, do not use pseudo click-handler (middle click + context menu)
		 */
		addListener: (element: Element, enable: boolean) => void

		/**
		 * Install link tracker.
		 *
		 * If you change the DOM of your website or web application Matomo will automatically detect links
		 * that were added newly.
		 *
		 * The default behaviour is to use actual click events. However, some browsers
		 * (e.g., Firefox, Opera, and Konqueror) don't generate click events for the middle mouse button.
		 *
		 * To capture more "clicks", the pseudo click-handler uses mousedown + mouseup events.
		 * This is not industry standard and is vulnerable to false positives (e.g., drag events).
		 *
		 * There is a Safari/Chrome/Webkit bug that prevents tracking requests from being sent
		 * by either click handler.  The workaround is to set a target attribute (which can't
		 * be "_self", "_top", or "_parent").
		 *
		 * @see https://bugs.webkit.org/show_bug.cgi?id=54783
		 *
		 * @param enable Defaults to true.
		 *               * If "true", use pseudo click-handler (treat middle click and open contextmenu as
		 *                 left click). A right click (or any click that opens the context menu) on a link
		 *                 will be tracked as clicked even if "Open in new tab" is not selected.
		 *               * If "false" (default), nothing will be tracked on open context menu or middle click.
		 *                 The context menu is usually opened to open a link / download in a new tab
		 *                 therefore you can get more accurate results by treat it as a click but it can lead
		 *                 to wrong click numbers.
		 */
		enableLinkTracking: (enable?: boolean) => void

		/**
		 * Enable tracking of uncaught JavaScript errors
		 *
		 * If enabled, uncaught JavaScript Errors will be tracked as an event by defining a
		 * window.onerror handler. If a window.onerror handler is already defined we will make
		 * sure to call this previously registered error handler after tracking the error.
		 *
		 * By default we return false in the window.onerror handler to make sure the error still
		 * appears in the browser's console etc. Note: Some older browsers might behave differently
		 * so it could happen that an actual JavaScript error will be suppressed.
		 * If a window.onerror handler was registered we will return the result of this handler.
		 *
		 * Make sure not to overwrite the window.onerror handler after enabling the JS error
		 * tracking as the error tracking won't work otherwise. To capture all JS errors we
		 * recommend to include the Matomo JavaScript tracker in the HTML as early as possible.
		 * If possible directly in <head></head> before loading any other JavaScript.
		 */
		enableJSErrorTracking: () => void

		/**
		 * Disable automatic performance tracking
		 */
		disablePerformanceTracking: () => void

		/**
		 * Set heartbeat (in seconds)
		 *
		 * @param heartBeatDelayInSeconds Defaults to 15s. Cannot be lower than 5.
		 */
		enableHeartBeatTimer: (heartBeatDelayInSeconds: number) => void

		/**
		 * Disable heartbeat if it was previously activated.
		 */
		disableHeartBeatTimer: () => void

		/**
		 * Frame buster
		 */
		killFrame: () => void

		/**
		 * Redirect if browsing offline (aka file: buster).
		 *
		 * @param url Redirect to this URL
		 */
		redirectFile: (url: string) => void

		/**
		 * Count sites in pre-rendered state
		 *
		 * @param enable If true, track when in pre-rendered state
		 */
		setCountPreRendered: (enable: boolean) => void

		/**
		 * Trigger a goal
		 */
		trackGoal: (idGoal: number | string, customRevenue: number, customData: any, callback: Function) => unknown

		/**
		 * Manually log a click from your own code
		 */
		trackLink: (sourceUrl: string, linkType: string, customData: any, callback: Function) => unknown

		/**
		 * Get the number of page views that have been tracked so far within the currently loaded page.
		 */
		getNumTrackedPageViews: () => number

		/**
		 * Log visit to this page
		 */
		trackPageView: (customTitle?: string, customData?: any, callback?: Function) => void

		/**
		 * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has
		 * been triggered.
		 *
		 * If you only want to track visible content impressions have a look at `trackVisibleContentImpressions()`.
		 * We do not track an impression of the same content block twice if you call this method multiple times
		 * unless `trackPageView()` is called meanwhile. This is useful for single page applications.
		 */
		trackAllContentImpressions: () => unknown

		/**
		 * Scans the entire DOM for all content blocks as soon as the page is loaded. It tracks an impression
		 * only if a content block is actually visible. Meaning it is not hidden and the content is or was at
		 * some point in the viewport.
		 *
		 * If you want to track all content blocks have a look at `trackAllContentImpressions()`.
		 * We do not track an impression of the same content block twice if you call this method multiple times
		 * unless `trackPageView()` is called meanwhile. This is useful for single page applications.
		 *
		 * Once you have called this method you can no longer change `checkOnScroll` or `timeIntervalInMs`.
		 *
		 * If you do want to only track visible content blocks but not want us to perform any automatic checks
		 * as they can slow down your frames per second you can call `trackVisibleContentImpressions()` or
		 * `trackContentImpressionsWithinNode()` manually at  any time to re-scan the entire DOM for newly
		 * visible content blocks.
		 * o Call `trackVisibleContentImpressions(false, 0)` to initially track only visible content impressions
		 * o Call `trackVisibleContentImpressions()` at any time again to re-scan the entire DOM for newly visible content blocks or
		 * o Call `trackContentImpressionsWithinNode(node)` at any time to re-scan only a part of the DOM for newly visible content blocks
		 *
		 * @param [checkOnScroll=true] Optional, you can disable re-scanning the entire DOM automatically
		 *                             after each scroll event by passing the value `false`. If enabled,
		 *                             we check whether a previously hidden content blocks became visible
		 *                             after a scroll and if so track the impression.
		 *                             Note: If a content block is placed within a scrollable element
		 *                             (`overflow: scroll`), we can currently not detect when this block
		 *                             becomes visible.
		 * @param [timeIntervalInMs=750] Optional, you can define an interval to re-scan the entire DOM
		 *                               for new impressions every X milliseconds by passing
		 *                               for instance `timeIntervalInMs=500` (re-scan DOM every 500ms).
		 *                               Re-scanning the entire DOM and detecting the visible state of content
		 *                               blocks can take a while depending on the browser and amount of content.
		 *                               In case your frames per second goes down you might want to increase
		 *                               this value or disable it by passing the value `0`.
		 */
		trackVisibleContentImpressions: (checkOnScroll: boolean, timeIntervalInMs: number) => void

		/**
		 * Tracks a content impression using the specified values. You should not call this method too often
		 * as each call causes an XHR tracking request and can slow down your site or your server.
		 *
		 * @param contentName  For instance "Ad Sale".
		 * @param [contentPiece='Unknown'] For instance a path to an image or the text of a text ad.
		 * @param [contentTarget] For instance the URL of a landing page.
		 */
		trackContentImpression: (contentName: string, contentPiece: string, contentTarget: string) => void

		/**
		 * Scans the given DOM node and its children for content blocks and tracks an impression for them if
		 * no impression was already tracked for it. If you have called `trackVisibleContentImpressions()`
		 * upfront only visible content blocks will be tracked. You can use this method if you, for instance,
		 * dynamically add an element using JavaScript to your DOM after we have tracked the initial impressions.		 */
		trackContentImpressionsWithinNode: (domNode: Element) => void

		/**
		 * Tracks a content interaction using the specified values. You should use this method only in conjunction
		 * with `trackContentImpression()`. The specified `contentName` and `contentPiece` has to be exactly the
		 * same as the ones that were used in `trackContentImpression()`. Otherwise the interaction will not count.
		 *
		 * @param contentInteraction The type of interaction that happened. For instance 'click' or 'submit'.
		 * @param contentName  The name of the content. For instance "Ad Sale".
		 * @param [contentPiece='Unknown'] The actual content. For instance a path to an image or the text of a text ad.
		 * @param [contentTarget] For instance the URL of a landing page.
		 */
		trackContentInteraction: (contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string) => void

		/**
		 * Tracks an interaction with the given DOM node / content block.
		 *
		 * By default we track interactions on click but sometimes you might want to track interactions yourself.
		 * For instance you might want to track an interaction manually on a double click or a form submit.
		 * Make sure to disable the automatic interaction tracking in this case by specifying either the CSS
		 * class `matomoContentIgnoreInteraction` or the attribute `data-content-ignoreinteraction`.
		 *
		 * @param domNode  This element itself or any of its parent elements has to be a content block
		 *                         element. Meaning one of those has to have a `matomoTrackContent` CSS class or
		 *                         a `data-track-content` attribute.
		 * @param [contentInteraction='Unknown] The name of the interaction that happened. For instance
		 *                                             'click', 'formSubmit', 'DblClick', ...
		 */
		trackContentInteractionNode: (domNode: Element, contentInteraction: string) => unknown

		/**
		 * Useful to debug content tracking. This method will log all detected content blocks to console
		 * (if the browser supports the console). It will list the detected name, piece, and target of each
		 * content block.
		 */
		logAllContentBlocksOnPage: () => unknown

		/**
		 * Records an event
		 *
		 * @param {string} category The Event Category (Videos, Music, Games...)
		 * @param {string} action The Event's Action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...)
		 * @param {string} name (optional) The Event's object Name (a particular Movie name, or Song name, or File name...)
		 * @param {float} value (optional) The Event's value
		 * @param {Function} callback
		 * @param {any} customData
		 */
		trackEvent: (category: any, action: any, name: any, value: any, customData: any, callback: any) => unknown

		/**
		 * Log special pageview: Internal search
		 *
		 * @param {string} keyword
		 * @param {string} category
		 * @param {number} resultsCount
		 * @param {any} customData
		 */
		trackSiteSearch: (keyword: any, category: any, resultsCount: any, customData: any) => unknown

		/**
		 * Used to record that the current page view is an item (product) page view, or a Ecommerce Category page view.
		 * This must be called before trackPageView() on the product/category page.
		 *
		 * On a category page, you can set the parameter category, and set the other parameters to empty string or false
		 *
		 * Tracking Product/Category page views will allow Matomo to report on Product & Categories
		 * conversion rates (Conversion rate = Ecommerce orders containing this product or category / Visits to the product or category)
		 * @param {string} sku Item's SKU code being viewed
		 * @param {string} name Item's Name being viewed
		 * @param {string} category Category page being viewed. On an Item's page, this is the item's category
		 * @param {float} price Item's display price, not use in standard Matomo reports, but output in API product reports.
		 */
		setEcommerceView: (sku: any, name: any, category: any, price: any) => unknown

		/**
		 * Returns the list of ecommerce items that will be sent when a cart update or order is tracked.
		 * The returned value is read-only, modifications will not change what will be tracked. Use
		 * addEcommerceItem/removeEcommerceItem/clearEcommerceCart to modify what items will be tracked.
		 *
		 * Note: the cart will be cleared after an order.
		 *
		 */
		getEcommerceItems: () => Array<unknown>

		/**
		 * Adds an item (product) that is in the current Cart or in the Ecommerce order.
		 * This function is called for every item (product) in the Cart or the Order.
		 * The only required parameter is sku.
		 * The items are deleted from this JavaScript object when the Ecommerce order is tracked via the method trackEcommerceOrder.
		 *
		 * If there is already a saved item for the given sku, it will be updated with the
		 * new information.
		 *
		 * @param {string} sku (required) Item's SKU Code. This is the unique identifier for the product.
		 * @param {string} name (optional) Item's name
		 * @param {string} name (optional) Item's category, or array of up to 5 categories
		 * @param {float} price (optional) Item's price. If not specified, will default to 0
		 * @param {float} quantity (optional) Item's quantity. If not specified, will default to 1
		 */
		addEcommerceItem: (sku: any, name?: any, category?: any, price?: any, quantity?: any) => unknown

		/**
		 * Removes a single ecommerce item by SKU from the current cart.
		 *
		 * @param {string} sku (required) Item's SKU Code. This is the unique identifier for the product.
		 */
		removeEcommerceItem: (sku: any) => void

		/**
		 * Clears the current cart, removing all saved ecommerce items. Call this method to manually clear
		 * the cart before sending an ecommerce order.
		 */
		clearEcommerceCart: () => void

		/**
		 * Tracks an Ecommerce order.
		 * If the Ecommerce order contains items (products), you must call first the addEcommerceItem() for each item in the order.
		 * All revenues (grandTotal, subTotal, tax, shipping, discount) will be individually summed and reported in Matomo reports.
		 * Parameters orderId and grandTotal are required. For others, you can set to false if you don't need to specify them.
		 * After calling this method, items added to the cart will be removed from this JavaScript object.
		 *
		 * @param orderId (required) Unique Order ID.
		 *                   This will be used to count this order only once in the event the order page is reloaded several times.
		 *                   orderId must be unique for each transaction, even on different days, or the transaction will not be recorded by Matomo.
		 * @param grandTotal (required) Grand Total revenue of the transaction (including tax, shipping, etc.)
		 * @param subTotal (optional) Sub total amount, typically the sum of items prices for all items in this order (before Tax and Shipping costs are applied)
		 * @param tax (optional) Tax amount for this order
		 * @param shipping (optional) Shipping amount for this order
		 * @param discount (optional) Discounted amount in this order
		 */
		trackEcommerceOrder: (orderId: string | number, grandTotal: number, subTotal?: number, tax?: number, shipping?: number, discount?: number) => unknown

		/**
		 * Tracks a Cart Update (add item, remove item, update item).
		 * On every Cart update, you must call addEcommerceItem() for each item (product) in the cart, including the items that haven't been updated since the last cart update.
		 * Then you can call this function with the Cart grandTotal (typically the sum of all items' prices) Calling this method does not remove from this JavaScript object the items that were added to the cart via addEcommerceItem
		 *
		 * @param grandTotal Items (products) amount in the Cart
		 */
		trackEcommerceCartUpdate: (grandTotal: number) => unknown

		/**
		 * Sends a tracking request with custom request parameters.
		 * Matomo will prepend the hostname and path to Matomo, as well as all other needed tracking request
		 * parameters prior to sending the request. Useful eg if you track custom dimensions via a plugin.
		 *
		 * @param request eg. "param=value&param2=value2"
		 * @param customData
		 * @param callback
		 * @param pluginMethod
		 */
		trackRequest: (request: string, customData: any, callback: Function, pluginMethod: any) => unknown

		/**
		 * Sends a ping request.
		 *
		 * Ping requests do not track new actions. If they are sent within the standard visit length, they will
		 * extend the existing visit and the current last action for the visit. If after the standard visit
		 * length, ping requests will create a new visit using the last action in the last known visit.
		 */
		ping: () => unknown

		/**
		 * Disables sending requests queued
		 */
		disableQueueRequest: () => unknown

		/**
		 * Won't send the tracking request directly but wait for a short time to possibly send this tracking request
		 * along with other tracking requests in one go. This can reduce the number of requests send to your server.
		 * If the page unloads (user navigates to another page or closes the browser), then all remaining queued
		 * requests will be sent immediately so that no tracking request gets lost.
		 * Note: Any queued request may not be possible to be replayed in case a POST request is sent. Only queue
		 * requests that don't have to be replayed.
		 *
		 * @param request eg. "param=value&param2=value2"
		 */
		queueRequest: (request: string) => unknown

		/**
		 * Returns whether consent is required or not.
		 *
		 */
		isConsentRequired: () => boolean

		/**
		 * If the user has given consent previously and this consent was remembered, it will return the number
		 * in milliseconds since 1970/01/01 which is the date when the user has given consent. Please note that
		 * the returned time depends on the users local time which may not always be correct.
		 *
		 */
		getRememberedConsent: () => number | string

		/**
		 * Detects whether the user has given consent previously.
		 *
		 */
		hasRememberedConsent: () => boolean

		/**
		 * When called, no tracking request will be sent to the Matomo server until you have called `setConsentGiven()`
		 * unless consent was given previously AND you called {@link rememberConsentGiven()} when the user gave their
		 * consent.
		 *
		 * This may be useful when you want to implement for example a popup to ask for consent before tracking the user.
		 * Once the user has given consent, you should call {@link setConsentGiven()} or {@link rememberConsentGiven()}.
		 *
		 * If you require consent for tracking personal data for example, you should first call
		 * `_paq.push(['requireConsent'])`.
		 *
		 * If the user has already given consent in the past, you can either decide to not call `requireConsent` at all
		 * or call `_paq.push(['setConsentGiven'])` on each page view at any time after calling `requireConsent`.
		 *
		 * When the user gives you the consent to track data, you can also call `_paq.push(['rememberConsentGiven', optionalTimeoutInHours])`
		 * and for the duration while the consent is remembered, any call to `requireConsent` will be automatically ignored until you call `forgetConsentGiven`.
		 * `forgetConsentGiven` needs to be called when the user removes consent for tracking. This means if you call `rememberConsentGiven` at the
		 * time the user gives you consent, you do not need to ever call `_paq.push(['setConsentGiven'])`.
		 */
		requireConsent: () => unknown

		/**
		 * Call this method once the user has given consent. This will cause all tracking requests from this
		 * page view to be sent. Please note that the given consent won't be remembered across page views. If you
		 * want to remember consent across page views, call {@link rememberConsentGiven()} instead.
		 *
		 * It will also automatically enable cookies if they were disabled previously.
		 *
		 * @param setCookieConsent [=true] Internal parameter. Defines whether cookies should be enabled or not.
		 */
		setConsentGiven: (setCookieConsent: boolean) => void

		/**
		 * Calling this method will remember that the user has given consent across multiple requests by setting
		 * a cookie. You can optionally define the lifetime of that cookie in hours using a parameter.
		 *
		 * When you call this method, we imply that the user has given consent for this page view, and will also
		 * imply consent for all future page views unless the cookie expires (if timeout defined) or the user
		 * deletes all their cookies. This means even if you call {@link requireConsent()}, then all requests
		 * will still be tracked.
		 *
		 * Please note that this feature requires you to set the `cookieDomain` and `cookiePath` correctly and requires
		 * that you do not disable cookies. Please also note that when you call this method, consent will be implied
		 * for all sites that match the configured cookieDomain and cookiePath. Depending on your website structure,
		 * you may need to restrict or widen the scope of the cookie domain/path to ensure the consent is applied
		 * to the sites you want.
		 *
		 * @param hoursToExpire After how many hours the consent should expire. By default the consent is valid
		 *                      for 30 years unless cookies are deleted by the user or the browser prior to this
		 */
		rememberConsentGiven: (hoursToExpire: number) => unknown

		/**
		 * Calling this method will remove any previously given consent and during this page view no request
		 * will be sent anymore ({@link requireConsent()}) will be called automatically to ensure the removed
		 * consent will be enforced. You may call this method if the user removes consent manually, or if you
		 * want to re-ask for consent after a specific time period.
		 */
		forgetConsentGiven: () => unknown

		/**
		 * Returns true if user is opted out, false if otherwise.
		 *
		 */
		isUserOptedOut: () => boolean

		/**
		 * Alias for forgetConsentGiven(). After calling this function, the user will no longer be tracked,
		 * (even if they come back to the site).
		 */
		optUserOut: () => void

		/**
		 * Alias for rememberConsentGiven(). After calling this function, the current user will be tracked.
		 */
		forgetUserOptOut: () => unknown
	}
}
