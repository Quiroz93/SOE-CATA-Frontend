// Ejemplo de store institucional base
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => ({
		loading: false,
		error: null as string | null,
	}),
	actions: {
		setLoading(val: boolean) {
			this.loading = val;
		},
		setError(msg: string | null) {
			this.error = msg;
		},
	},
});
import { createPinia } from 'pinia';

const pinia = createPinia();

export default pinia;
