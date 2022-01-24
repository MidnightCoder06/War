import { useRouter } from 'next/router'

export default function Login() {

    const router = useRouter();

    return (
        <>
            <div> Enter your login details here </div>
            <button aria-label='home' onClick={() => router.push('/')}> Click me to go back to the homepage </button>
        </>
    );
}