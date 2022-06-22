import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof document !== 'undefined') document.documentElement.classList.add('dark')

  return (
    <div className="h-full">
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" crossOrigin='true' />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
