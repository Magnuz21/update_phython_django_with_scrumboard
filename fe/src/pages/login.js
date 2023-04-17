import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


//This is for the number 5 exercise//

export default function Login() {
    const router = useRouter();
    const [cred, setCred] = useState(userModel);
    const { user, updateData } = userData();
    const [err, setErr] = useState({
        color: 'bg-red-700',
        errMsg: '',
        isErr: false
    })

    useEffect(() => {
        const isLogged = user.some((obj, i) => {
            if (obj.isLoggedIn) {
                return true;
            }
        })

        if (isLogged) {
            router.push("/");
        }
    }, []);

    const handleCreds = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const login = () => {
        if (cred.email === '' || cred.password === '') {
            setErr({ ...err, errMsg: 'Some field/s are empty!', isErr: true, color: 'bg-red-700' });
        } else {
            setErr({ ...err, errMsg: '', isErr: false });
            const isTrue = user.some((obj, i) => {
                if (obj.email === cred.email && obj.password === cred.password) {
                    updateData(i, { ...obj, isLoggedIn: true });
                    return true;
                }
            })

            if (isTrue) {
                setErr({ ...err, errMsg: "Login", isErr: true, color: "bg-green-700" });
                setCred(userModel);
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            } else {
                setErr({ ...err, errMsg: "Incorrect Credentials", isErr: true, color: "bg-red-700" });                
            }
        }


    }
    const register = () => {
        console.log(user);
        router.push("/signup")
    }

    const msgClose =()=>{
        setErr({ ...err,isErr: false});
    }

    const autoCloseMsg =()=>{
        setTimeout(() => {
            setErr({ ...err,isErr: false});
        }, 1500);
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
            <div>
                <div className="flex justify-center items-center pb-10">
                <h1 className="font-mono font-bold text-4xl text-gray-100">Scrum Board</h1>
                </div>
                <div className="relative w-[380px] h-[420px] bg-gray-800 rounded-lg z-10 p-5 overflow-hidden">
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-lime-500 via-lime-500 
               to-transparent-top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-lime-500 via-lime-500
               to-transparent-top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"> </div>
                    <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
                    <form>
                    <h2 className="text-2xl font-bold font-mono text-gray-100 text-center mt-3 mb-5">Log in</h2>
                       
                            <div className="text-center font-sans mb-10 bg-gray-800 ">
                            </div>
                            <div className="relative flex flex-col mb-2">
                                <div className={`text-lg text-center ${err.color} rounded-md text-white`}>{err.isErr ? err.errMsg : ''}<span className=" float-right mx-5 font-bold cursor-pointer" onClick={msgClose}>&#10799;</span></div>
                                <div className="mt-3">
                                    <span className=" font-medium text-gray-100">Email</span> <input name="email" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-lime-500 leading-tight focus:outline-none focus:shadow-outline" type="email" value={cred.email} onChange={handleCreds} placeholder="Enter your email" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-gray-100">Password</span><input name="password" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-lime-500 leading-tight focus:outline-none focus:shadow-outline" type="password" value={cred.password} onChange={handleCreds} placeholder="Enter your password" required />
                                </div>

                                <div className="mt-5">
                                    <button className="mt-3 shadow bg-lime-500 hover:bg-lime-600 focus:shadow-outline 
                                focus:outline-none text-white font-bold py-2 px-3 rounded w-full" type="button" onClick={login}>
                                        Login
                                    </button>
                                    <div className="mt-5 content-center text-center">
                                        <h3 className="text-center font-medium text-sm text-gray-100">Don't have an account? <span className="text-lime-500 cursor-pointer" onClick={register}>Sign Up</span></h3>
                                    </div>
                                </div>
                            </div>
                        
                        <ul>
                        </ul>
                    </form>
                     </div>
                </div>
            </div>
        </div>
    );
}