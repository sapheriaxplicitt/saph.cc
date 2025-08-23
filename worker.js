export default {
  async fetch(request, env) {
    // Отдаёт все файлы из папки app
    return env.ASSETS.fetch(request)
  }
}
