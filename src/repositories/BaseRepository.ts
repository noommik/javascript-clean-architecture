type BaseRepository = {
  fetchItem?: (params: any) => Promise<any>
  saveItem?: (params: any) => void
  getItem?: () => any
}

export default BaseRepository
