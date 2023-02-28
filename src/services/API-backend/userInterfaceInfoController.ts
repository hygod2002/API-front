// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addinterfaceinfo POST /api/useruserinterfaceInfo/add */
export async function addinterfaceinfoUsingPOST1(
  body: API.UserInterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/useruserinterfaceInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteinterfaceinfo POST /api/useruserinterfaceInfo/delete */
export async function deleteinterfaceinfoUsingPOST1(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/useruserinterfaceInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getinterfaceinfoById GET /api/useruserinterfaceInfo/get */
export async function getinterfaceinfoByIdUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getinterfaceinfoByIdUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo>('/api/useruserinterfaceInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listinterfaceinfo GET /api/useruserinterfaceInfo/list */
export async function listinterfaceinfoUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listinterfaceinfoUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInfo>('/api/useruserinterfaceInfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listinterfaceinfoByPage GET /api/useruserinterfaceInfo/list/page */
export async function listinterfaceinfoByPageUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listinterfaceinfoByPageUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfo>('/api/useruserinterfaceInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserInterfaceinfo POST /api/useruserinterfaceInfo/update */
export async function updateUserInterfaceinfoUsingPOST(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/useruserinterfaceInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
