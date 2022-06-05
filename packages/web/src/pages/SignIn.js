import React from 'react';

export default function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password}),
        })
        .then(response => response.json())
        .then((data)=>{
            console.log('success! ', data);
        })
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <form action="/authenticate" method="POST" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email">E-mail</label>
                <input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    inputMode="email" 
                    autoComplete="username"/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    autoComplete="current-password"/>
            </fieldset>
            <button type="submit">Login</button>
        </form>
    );
}