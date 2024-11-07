import { useState } from 'react';
import Button from './Button';
import Input from './input';

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
        const isEmailValid = enteredEmail && enteredEmail.includes('@');
        const isPasswordValid = enteredPassword && enteredPassword.length >= 6;

        if (isEmailValid && isPasswordValid) {
            setShowModal(true); // Exibe o modal de sucesso
            clearFields(); // Limpa os campos de entrada
        }
    }

    function clearFields() {
        setEnteredEmail('');
        setEnteredPassword('');
        setSubmitted(false);
    }

    function closeModal() {
        setShowModal(false); // Fecha o modal quando o usuário clicar para fechar
    }

    const emailNotValid = submitted && (!enteredEmail || !enteredEmail.includes('@'));
    const passwordNotValid = submitted && (!enteredPassword || enteredPassword.length < 6);

    return (
<div className="w-full max-w-sm p-8 mx-auto shadow-md bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg">
<div className="flex flex-col mb-8">
                <Input
                    label="Email"
                    type="email"
                    isInvalid={emailNotValid}
                    value={enteredEmail}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                />
                <Input
                    label="Password"
                    type="password"
                    isInvalid={passwordNotValid}
                    value={enteredPassword}
                    onChange={(event) => handleInputChange('password', event.target.value)}
                />
            </div>
            <div className="flex gap-4 justify-end">
            <Button variant="text">Create a New Account</Button>
<Button variant="primary" onClick={handleLogin}>Sign In</Button>

            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-green-600 text-lg font-semibold">Login successful!</h2>
                        <p className="mt-2">Welcome! Your login was successful.</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
