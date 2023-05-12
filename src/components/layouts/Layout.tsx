import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { NavBar } from "../ui"

interface LayoutProps extends PropsWithChildren {
  title?: string
}

// const origin =  window?.location?.origin || ""
const isServerSide = (typeof window === undefined)

export const Layout: FC<LayoutProps> = ({ children, title = "Pokemon App" }) => {


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Luca Casasola" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${isServerSide ? "" : "http://localhost:3000"}/images/banner.png`} />
      </Head>

      <NavBar />

      <main style={{
        padding: "0 20px"
      }}>
        {children}
      </main>
    </>
  )
}
