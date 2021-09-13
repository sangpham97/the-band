import axios from 'axios'
import { updateCate } from './categorySlice'

export const getOneCate = async (dispatch, slug) => {
  try {
    const res = await axios.get('/categories/' + slug)
    dispatch(updateCate(res.data))
  } catch (err) {
    console.log(err)
  }
  return
}
