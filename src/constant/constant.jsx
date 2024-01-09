import { lazy } from "react"

const LoginForm = lazy(() => import("../component/Login/Login"))
const RegisterForm = lazy(() => import("../component/RegistrationForm/Registration"))
const ForgetPassword = lazy(() => import("../component/ForgetPassword/ForgetPassword"))
const NewPassword = lazy(() => import("../component/NewPassword/NewPassword"))
const OtpReceiver = lazy(() => import("../component/OtpReciver/Otpreceiver"))
const Home = lazy(() => import("../Pages/Home/Home"))
const User = lazy(() => import("../Pages/user/User"))
import { IoIosHome } from "react-icons/io";


export const PATH = {
    publicRoutes: {
        LOGIN: {
            path: '/login',
            element: <LoginForm />
        },
        REGISTER: {
            path: "/register",
            element: <RegisterForm />
        },
        FORGOT_PASSWORD: {
            path: "/forget-password",
            element: <ForgetPassword />,

        },
        OTP_RECIVER: {
            path: '/otp-recive',
            element: <OtpReceiver />
        },
        NEW_PASSWORD_GENERATE: {
            path: '/new-password-generate',
            element: <NewPassword />
        },
    },
    privateRoutes: {
        HOME: {
            path: "/home",
            element: <Home />,
            pageName: "Home",
            icon: <IoIosHome />,
            // sidebar: {
            //     show: true,
            // }
        },
        CRUD: {
            path: "/user-crud",
            element: <User />,
            pageName: "CRUD",
            icon: <IoIosHome />,
            sidebar: {
                show: true,
            }
        },
    },
}

