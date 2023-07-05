import React, { useEffect, useState } from 'react'
import { getBoards } from '../api/api'

const Boards: React.FC = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        onLoad()
    }, [])

    const onLoad = async () => {
        setBoards([])
        let data = await getBoards()
        if (data)
            setBoards(data)
    }

    console.log('data', boards)

    return <div className={'w-full h-full bg-blue-700'}>
        dsfdsdsf
    </div>
}

export default Boards
