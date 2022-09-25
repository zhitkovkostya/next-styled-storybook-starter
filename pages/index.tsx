import Head from 'next/head';
import { Card } from 'components/card';
import { Code } from 'components/code';
import * as Styled from 'styles/home.styles';

export const Home = () => (
  <Styled.Container>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Styled.Main>
      <Styled.Heading>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Styled.Heading>

      <Styled.Description>
        Get started by editing <Code>pages/index.tsx</Code>
      </Styled.Description>

      <Styled.Grid>
        <Card url="https://nextjs.org/docs" title="Documentation">
          Find in-depth information about Next.js features and API.
        </Card>

        <Card url="https://nextjs.org/learn" title="Learn">
          Learn about Next.js in an interactive course with quizzes!
        </Card>

        <Card
          url="https://github.com/vercel/next.js/tree/master/examples"
          title="Examples"
        >
          Discover and deploy boilerplate example Next.js projects.
        </Card>

        <Card
          url="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          title="Deploy"
        >
          Instantly deploy your Next.js site to a public URL with Vercel.
        </Card>
      </Styled.Grid>
    </Styled.Main>

    <Styled.Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <Styled.Logo src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </Styled.Footer>
  </Styled.Container>
);

export default Home;
