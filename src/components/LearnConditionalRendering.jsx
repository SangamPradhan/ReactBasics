import { useState } from "react"

export const LearnConditionalRendering = () => {
    const status = false
    const [isLogin, setIsLogin] = useState(false)
    return (
        <>
            {isLogin ?
                (<>
                    <h1>Dashboard Page</h1>
                    <button onClick={() => setIsLogin(false)}>Logout</button>
                </>) :
                (<>
                    <h1>Login Page</h1>
                    <button onClick={() => setIsLogin(true)}>Login</button>
                </>)}
        </>
    )
}

export default LearnConditionalRendering;