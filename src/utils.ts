import VueRouter from 'vue-router'

export function getMatomo() {
  return window.Matomo.getAsyncTracker()
}

export function loadScript(trackerScript: string): Promise<Event> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = trackerScript
    
    document.head.appendChild(script)

    script.onload = resolve
    script.onerror = reject
  })
}

export function getResolvedHref(router: VueRouter, path: string): string {
  return router.resolve(path).href
}
