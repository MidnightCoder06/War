import { useRouter } from 'next/router'
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
  });

const GET_USER = gql`
    query {
      User(id: 2) {
          id
          name
          age
      }
    }
  `;

export default function Login() {

    const router = useRouter();
    const { loading, error, data } = useQuery(GET_USER);

    if(loading) return 'Loading...'
    if (error) return 'error...'

    const seeCommunity = async (id) => {
        
        // when you called this 'GET_USER' instead of query ... it threw an error
        const query = gql`
            query {
                User(id: ${id}) {
                    id
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
            <div> data from use query {data} </div>
            <div> Enter your login details here </div>
            <button aria-label='see-users' onClick={() => seeCommunity(1)}> See Existing Community </button>
            <button aria-label='home' onClick={() => router.push('/')}> Click me to go back to the homepage </button>
        </ApolloProvider>
    );
}