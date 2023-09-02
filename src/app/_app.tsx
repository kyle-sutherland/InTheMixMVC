// pages/_app.tsx
import withAuth from './components/withAuth';

function App({ Component, pageProps }: AppProps) {
  const AuthComponent = withAuth(Component);
  return <AuthComponent {...pageProps} />;
}

export default App;

