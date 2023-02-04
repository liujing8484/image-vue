import {request} from "@/utils/request";

// export function get_point_towers() {
//     return request({
//         url: 'point/get_point_towers/', methods: 'get'
//     })
// }

export const get_point_towers = () => request({url: 'point/get_point_towers/', methods: 'get'})
export const get_point_across = () => request({url: 'point/get_point_across/', methods: 'get'})
export const get_point_curve = () => request({url: 'point/get_point_curve/', methods: 'get'})
export const get_min_max_xy = () => request({url: 'point/get_min_max_xy/', methods: 'get'})
