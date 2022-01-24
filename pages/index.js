import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter()

  return (
    <div>
      <h1> Hello World from Next!!! </h1>
      <button aria-label='login' onClick={() => router.push('/login')}> Click me to login into your account </button>
      <ul>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
