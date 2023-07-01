import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from '../ui/';

type Props = {
  children: ReactNode,
  title?: string
  pokemonName?: string
}

export const Layout: FC<Props> = ({ children, title, pokemonName }) => {
  return (
    <>
      <Head>
        <title>{ title || 'PokemonApp' }</title>
        <meta name="author" content="Franco Sanchez" />
        { 
          pokemonName
            ? <meta name="description" content={`Informacion sobre el pokemon ${ pokemonName }`} />
            : <meta name="description" content='Informacion sobre el listado de pokemons' />
        }
        {
          pokemonName
            ? <meta name="keywords" content={`${ pokemonName }, pokemon, pokedex`} />
            : <meta name="keywords" content='pokedex' />
        }
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}
