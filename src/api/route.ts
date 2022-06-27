import Request from "@/utils/axios.ts";

export function del(id: number) {
  return Request({
    url: `/base/sys-route/delete/${id}`,
    method: "post",
  });
}

export function modify(id: number, params: unknown) {
  return Request({
    url: `/base/sys-route/modify/${id}`,
    method: "post",
    data: params,
  });
}

export function create(params: unknown) {
  return Request({
    url: `/base/sys-route/create`,
    method: "post",
    data: params,
  });
}

export function info(id: number) {
  return Request({
    url: `/base/sys-route/info/${id}`,
    method: "get",
  });
}

export function page(params: unknown) {
  return Request({
    url: `/base/sys-route/page`,
    method: "post",
    data: params,
  });
}

export function newlist() {
  return Request({
    url: `/newlist`,
    method: "get",
  });
}
