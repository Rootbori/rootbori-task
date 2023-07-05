import axios, { AxiosResponse, AxiosError } from 'axios'

export const API = 'http://localhost:3001/task'
// http://localhost:3001/task/searchBoards
export const GET = (URL: string): Promise<any> => {
    return axios({
        method: 'GET',
        url: `${API}/${URL}`,
        headers: {
            // 'Content-Type': 'application/json'
        },
    })
        .then((result: AxiosResponse) => {
            return result.data;
        })
        .catch((error: AxiosError) => {
            if (error.message === 'Network Error') {
                throw new Error('There was a network error. Please check your internet connection.');
            }
            throw error;
        });
};

export const POST = (URL: string, data: any): Promise<any> => {
    return axios({
        method: 'POST',
        url: `${API}/${URL}`,
        data: data,
        headers: { 'Content-Type': 'application/json' },
    })
        .then((result: AxiosResponse) => {
            return result.data
        })
        .catch((err: AxiosError) => {
            return { error: err }
        })
}

export const PUT = (URL: string, data: any): Promise<any> => {
    return axios({
        method: 'PUT',
        url: `${API}/${URL}`,
        data: data,
        headers: { 'Content-Type': 'application/json' },
    })
        .then((result: AxiosResponse) => {
            return result.data
        })
        .catch((err: AxiosError) => {
            return { error: err }
        })
}

export const DELETE = (URL: string): Promise<any> => {
    return axios({
        method: 'DELETE',
        url: `${API}/${URL}`,
        headers: { 'Content-Type': 'application/json' },
    })
        .then((result: AxiosResponse) => {
            return result.data
        })
        .catch((err: AxiosError) => {
            return { error: err }
        })
}