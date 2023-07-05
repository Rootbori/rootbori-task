import { GET, POST } from './main'

export const addBoard = (data: any) => (POST('addBoards', data))
export const getBoards = () => (GET('searchBoards'))