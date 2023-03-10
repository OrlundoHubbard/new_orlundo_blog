import { blogPosts } from '@/lib/data';
import Head from 'next/head'

export default function BlogPage({title, date, content}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <h1>{title}</h1>
       <div>{content}</div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  console.log(context);
  const {params} = context;
  return {
    
    props: blogPosts.find((item) => item.slug === params.slug), // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      }
    })),
    fallback: false,
  }
}
