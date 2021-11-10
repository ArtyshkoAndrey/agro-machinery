import store from '~/user/store'
import { loadMessages } from '~/user/plugins/i18n'

export default async (to, from, next) => {
  await loadMessages(store.getters['lang/locale'])

  next()
}
