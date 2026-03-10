import { ref } from 'vue';

export function useAsyncState<T>() {
  const loading = ref(false);
  const error = ref<string | null>(null);
  const success = ref(false);
  const data = ref<T | null>(null);

  async function run(fn: () => Promise<T>) {
    loading.value = true;
    error.value = null;
    success.value = false;
    try {
      data.value = await fn();
      success.value = true;
    } catch (e: any) {
      error.value = e?.message || 'Error inesperado';
    } finally {
      loading.value = false;
    }
  }

  return { loading, error, success, data, run };
}
