import { useEffect, useState } from "react";
import { InputSign } from "../../components/Input";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom"
import styles from "./Login.module.scss"


export const LoginPage = () => {
    const [state, setState] = useState({
        login: "", password: ""
    })
    const [isValid, setIsValid] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const { signIn } = useAuth()

    const from = location.state?.from || '/'

    useEffect(() => {
        const arr = []
        Object.keys(state).map((el) => {
            if (state[el].length > 0) {
                arr.push(el)
            }
        })
        if (arr.length === Object.keys(state).length) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
    }, [state])


    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(state, () => {
            navigate(from, {
                replace: true,
            })
        })
    }

    const handleChange = (target) => {
        setState(prevState => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    return (
        <div className={styles["formDiv"]}>
            <h1 className={styles["formDiv-title"]}>Вход</h1>
            <form onSubmit={handleSubmit}>
                <InputSign
                    label="Login"
                    type="login"
                    name="login"
                    value={state.login}
                    onChange={handleChange}
                    placeholder="Ваш login"
                    required={true}
                />
                <InputSign
                    label="Пароль"
                    type="password"
                    name="password"
                    value={state.password}
                    placeholder="Ваш пароль"
                    onChange={handleChange}
                    required={true}
                />
                <button type="submit" disabled={!isValid} className={styles["btn"]}>Отправить</button>
            </form>
        </div>
    );
};