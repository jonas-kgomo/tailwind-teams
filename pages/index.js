import Head from 'next/head'
import '../styles/main.css'

const Home = () => (
  <div className="container">
    <Head>
      <title>Narwhal Team</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <h class="font-bold text-lg">Holy smokes!</h>
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
  <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Github</span>
    <span class="font-hairline mr-2 text-left flex-auto">Repository can be found here</span>
    <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
</div>

      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit on Github <a href="/zeit.svg" alt="ZEIT Logo"></a>
             </a>
    </footer>


  </div>
)

export default Home
