import { JSXElement } from 'solid-js';
import Header from '../components/Header/header';

interface LayoutProps {
  children: JSXElement
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main class="min-h-screen bg-gray-100">
        {props.children}
      </main>
    </>
  )
}

export default Layout

