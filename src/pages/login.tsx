import React from 'react'
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login'

interface FacebookResponse {
    id: string;
    name: string;
    email: string;
    picture: {
        data: {
            url: string;
        };
    };
}

const Login: React.FC = () => {
    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        const { id, name, email, picture }: FacebookResponse = response as FacebookResponse;
        console.log(response);
        console.log(id);
        console.log(name);
        console.log(email);
        console.log(picture);
        // ทำสิ่งที่คุณต้องการเมื่อผู้ใช้เข้าสู่ระบบด้วย Facebook ที่นี่
        // ตัวอย่างเช่น ส่งค่าไปยังเซิร์ฟเวอร์เพื่อยืนยันตัวตนผู้ใช้งานหรือทำการบันทึกข้อมูลผู้ใช้งานลงในฐานข้อมูล
    };

    return <div className="h-full w-full flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 py-6">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign In
                    </button>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                    >
                        Forgot Password?
                    </a>

                    <FacebookLogin
                        appId="1397669190782319"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon={<i className="fa fa-facebook" />}
                    />
                </div>
            </form>
        </div>
    </div>
}

export default Login
