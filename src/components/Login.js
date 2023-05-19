import styled from "@emotion/styled";
import { H1 } from "./About";

const LoginButton = styled.button`
    width: 100px;
    height: 2rem;
    grid-column: 2/2;
`
const Form = styled.form`
    width: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-right: 2px solid var(--green);

`
const Main = styled.main`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 15rem;
    grid-column: auto;
    height: auto;
    margin-bottom: 45rem;

`

export const LogoutButton = styled.button`
    width: 100px;
    height: 2rem;

`

const Login = ({ isLoggedIn, onLogin, username, onLogout, setEmail, setPassword, email, password }) =>
{

    const handleLogin = (e) =>
    {
        e.preventDefault();
        const username = email.split('@')[0]
        onLogin(username, password);
        setEmail('');
        setPassword('');
    };

    return (
        <>

            <H1>
                Hello, {isLoggedIn ? username.split('@')[0] : 'Guest'}
            </H1>

            <Main>
                {isLoggedIn ? (
                    <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                ) : (
                    <Form onSubmit={handleLogin}>
                        <label
                            htmlFor="email">Enter your email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Enter your password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <LoginButton onClick={onLogin}>Login</LoginButton>
                    </Form>
                )}

                <Form>
                    <h5 style={{ color: 'red' }}>Don't have an account yet? Fill in the form below to register!</h5> <br />
                    <label htmlFor="register-name">Full name

                    </label>
                    <input type="text" id="register-name" placeholder="Enter full name" />

                    <label htmlFor="register-email">Enter your email

                    </label>
                    <input type="email" id="register-email" placeholder="Enter your email..." />
                    <label htmlFor="register-password">Enter your password

                    </label>
                    <input type="password" id="register-password" placeholder="Enter your password" />
                    <LoginButton>Register</LoginButton>

                </Form>
            </Main>
        </>
    )
}


export default Login;