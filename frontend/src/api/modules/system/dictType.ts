import { http } from '@/api';
import { IgetListAPI, ILimitAPI, IsuccessTypeAPI, addType, IgetTypeAPI, IgetOptionselecAPI } from '@/type';

// 查询字典类型列表
export const getListAPI = (data: ILimitAPI) => http<IgetListAPI>('GET', '/system/dictType/list', data);

// 删除字典类型
export function delTypeAPI(ids: string) {
  return http<IsuccessTypeAPI>('DELETE', `/system/dictType/${ids}`);
}

// 新增字典类型
export const addTypeAPI = (data: addType) => http<IsuccessTypeAPI>('POST', '/system/dictType', data);

// 获取字典类型详细数据
export const getTypeAPI = (id: number) => http<IgetTypeAPI>('GET', `/system/dictType/${id}`);

// 修改字典类型
export const putTypeAPI = (data: addType) => http<IsuccessTypeAPI>('PUT', '/system/dictType', data);

// 查询字典类型列表
export const getOptionselectAPI = () => http<IgetOptionselecAPI>('GET', '/system/dictType/optionselect');
