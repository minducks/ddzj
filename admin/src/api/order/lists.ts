import request from '@/utils/request'

// 订单列表
export function apiOrderLists(params: any) {
    return request.get({ url: '/order.order/lists', params })
}

// 订单详情
export function apiOrderDetail(params: any) {
    return request.get({ url: '/order.order/detail', params })
}

// 订单取消
export function apiOrderCancel(params: any) {
    return request.post({ url: '/order.order/cancel', params })
}

// 订单商家备注
export function apiOrderRemark(params: any) {
    return request.post({ url: '/order.order/remark', params })
}

// 订单商家备注详情
export function apiOrderRemarkDetail(params: any) {
    return request.get({ url: '/order.order/remarkDetail', params })
}

// 订单删除
export function apiOrderDel(params: any) {
    return request.post({ url: '/order.order/del', params })
}

// 订单核销
export function apiOrderVerification(params: any) {
    return request.post({ url: '/order.order/verification', params })
}

// 师傅列表
export function apiMasterLists(params: any) {
    return request.get({ url: '/order.order/staffLists', params })
}

// 指派师傅
export function apiDispatchStaff(params: any) {
    return request.post({ url: '/order.order/dispatchStaff', params })
}
