import Link from 'next/link'
import { useRouter } from 'next/router'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

export default function Home() {

  const router = useRouter()

  const testGraphQl = async () => {
    
    const query = gql`
      query {
        allUsers {
          name
          age
        }
      }
    `;

    const sampleData = await client.query({ query });
    console.log(sampleData);
  }

  return (
    <ApolloProvider client={client}>
      <div>
      <h1> Hello World from Next!!! </h1>
      <div>
        <button aria-label='login' onClick={() => router.push('/login')}> click me to login into your account </button>
      </div>
      <div>
        <button aria-label='data-retrevial' onClick={() => testGraphQl()}> retrive data </button>
      </div>
      <ul>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
    </ApolloProvider>
  );
}
