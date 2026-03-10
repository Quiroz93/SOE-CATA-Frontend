import { ref } from 'vue';

export function useApiError() {
  const error = ref<string | null>(null);
  const setError = (msg: string | null) => {
    error.value = msg;
  };
  return { error, setError };
}
