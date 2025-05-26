import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import { lightTheme, darkTheme } from './styles/themes'
import { useState } from 'react'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro),
  },


  return (
    <ThemeProvider theme={temaEscuro ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
