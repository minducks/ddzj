import request from '@/utils/request'

// H5渠道配置保存
export function setH5Config(params: any) {
    return request.post({ url: '/channel.h5_setting/setConfig', params })
}

// 获取H5设置
export function getH5Config() {
    return request.get({ url: '/channel.h5_setting/getConfig' })
}
