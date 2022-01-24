import Link from 'next/link'

export default function About() {
    return (
        <div>
            This is the about page 
            <ul>
                <li>
                    <Link href="/">
                        Navigate back to the home page
                    </Link>
                </li>
            </ul>
        </div>
    );
}