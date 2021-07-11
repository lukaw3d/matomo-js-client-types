import { Matomo } from './matomo'

declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$matomo: Matomo.Client;
	}
}
