// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addinterfaceinfo POST /api/interfaceinfo/add */
export async function addinterfaceinfoUsingPOST(
  body: API.InterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/interfaceinfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteinterfaceinfo POST /api/interfaceinfo/delete */
export async function deleteinterfaceinfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/interfaceinfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getinterfaceinfoById GET /api/interfaceinfo/get */
export async function getinterfaceinfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getinterfaceinfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInterfaceInfo>('/api/interfaceinfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** invokeInterfaceInfo POST /api/interfaceinfo/invoke */
export async function invokeInterfaceInfoUsingPOST(
  body: API.InterfaceInfoInvokeRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseobject>('/api/interfaceinfo/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listinterfaceinfo GET /api/interfaceinfo/list */
export async function listinterfaceinfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listinterfaceinfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListInterfaceInfo>('/api/interfaceinfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listinterfaceinfoByPage GET /api/interfaceinfo/list/page */
export async function listinterfaceinfoByPageUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listinterfaceinfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageInterfaceInfo>('/api/interfaceinfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** offlineInterfaceInfo POST /api/interfaceinfo/offline */
export async function offlineInterfaceInfoUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/interfaceinfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** onlineInterfaceInfo POST /api/interfaceinfo/online */
export async function onlineInterfaceInfoUsingPOST(
  body: API.IdRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/interfaceinfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateinterfaceinfo POST /api/interfaceinfo/update */
export async function updateinterfaceinfoUsingPOST(
  body: API.InterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/interfaceinfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
