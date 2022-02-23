import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import styles from './styles/tailwind.css';

type DocumentProps = {
  children: React.ReactNode,
  title?: string
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: 'GitHub Demo App' };
};

// Global ErrorBoundary
// TODO: Put in proper/approved error wording/formatting/styling
export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <Document>
      <h1>Error</h1>
      <p>{error.message}</p>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
        <ScrollRestoration />
        <Scripts />
    </Document>
  );
}


export function Document( { children, title}: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'GitHub Demo App'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
