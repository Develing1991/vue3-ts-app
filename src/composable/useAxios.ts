import { Axios } from '@/apis/axios';
import { useAxios as useVueAxios } from '@vueuse/integrations/useAxios';

export enum AxiosMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE'
}
export default function useAxios(
  url: string,
  method: AxiosMethod,
  params?: Record<string, any>,
  immediate = true
) {
  const result = useVueAxios(url, { method, params }, Axios.getInstance(), {
    immediate
  });
  return result;
}
