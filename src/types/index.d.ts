import { Matomo } from './matomo'

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$matomo: Matomo.Client;
	}
}
