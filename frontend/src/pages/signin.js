import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { signin } from "../services/user.service"

export const SigninPage = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignin = async () => {
        if (username.length === 0) {
            alert('set username')
        }
        else if (password.length === 0) {
            alert('set password')
        }
        else {
            const result = await signin(username, password)
            if (result.errors && result.error.length > 0) {
                const error = result.errors[0].message
                console.log('error')
            } else {
                if (result.data) {
                    const token = result.data.signin.token
                    //  console.log(`token= ${token}`)
                    sessionStorage[token] = token


                    navigate('/welcome')
                }
            }

        }

    }

    return (
        <div>
            <h3 className="header">SignIn</h3>
            <div className="form">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="email" class="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" class="form-control" aria-describedby="emailHelp" />

                </div>

                <div className="mb3">
                    <div>Don't have an account? <Link to="/signup"> SignUp</Link></div>
                    <button onClick={onSignin} className="btn btn-success">SignIn</button>
                </div>
            </div>
        </div>
    )
}
