import React, { useEffect, useState } from 'react'
import { getBoards } from '../api/api'
import { useParams } from 'react-router-dom'

const Task: React.FC = () => {
    const { id } = useParams();
    const [boards, setBoards] = useState([])

    console.log('id',id)
    useEffect(() => {
        onLoad()
    }, [id])

    const onLoad = async () => {
        setBoards([])
        let data = await getBoards()
        if (data)
            setBoards(data)
    }

    return <div className={'w-full h-full bg-blue-700'}>
        {boards?.length > 0 && boards?.map((e: any, index: number) => {
            return <a href={`/task?id=${e?.board_id}`} key={`bords-${index}`} className={'w-full p-2 font-bold'}>{e?.board_name || '-'}</a>
        })}
    </div>
}

export default Task
