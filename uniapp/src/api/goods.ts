import request from '@/utils/request'

/**
 * @param { Object } params
 * @return { Promise }
 * @description 获取商品详情
 */
export const apiGoodsDetail = (params) => request.get({ url: '/goods/detail', data: params })

/**
 * @param { Object } params
 * @return { Promise }
 * @description 商品收藏
 */
export const apiGoodsCollection = (params) => request.post({ url: '/goods/collect', data: params })

/**
 * @return { Promise }
 * @description 获取预约时间
 */
export const apiAppointTime = () => request.get({ url: '/goods/appointTime' })

/**
 * @param { Object } params
 * @return { Promise }
 * @description 获取商品评价列表
 */
export const apiEvaluateGoodsLists = (params: any) =>
    request.get({ url: '/goods_comment/lists', data: params })

/**
 * @param { Object } params
 * @return { Promise }
 * @description 获取商品评价分类列表
 */
export const apiEvaluateGoodsCategory = (params: any) =>
    request.get({ url: '/goods_comment/commentCategory', data: params })
