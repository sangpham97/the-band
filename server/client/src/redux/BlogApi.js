import { axiosIstance } from '../config'
import { getBlog } from './blogSlice'

export const getOneBlog = async (dispatch, id) => {
  try {
    const res = await axiosIstance.get('/posts/' + id)
    dispatch(getBlog(res.data))
  } catch (err) {
    console.log(err)
  }
  return
}
