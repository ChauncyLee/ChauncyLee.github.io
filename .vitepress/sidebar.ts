import { getMds } from '../scripts'

export function sidebar() {
  return {
    '/src/fun/': [
      { text: '前端', collapsed: false, items: getMds('/fun/') },
    ],

  }
}
