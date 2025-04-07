import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li>
          <a 
            href="https://araucariageneticabovina.com.br/arquivos/servico/pdfServico_57952bf8ca7af_24-07-2016_17-58-32.pdf"
            target="_blank"
            >
            Texto
          </a>
        </li>

        <li>
          <a 
            href="https://legado.corenpr.gov.br/portal/images/stories/testepdf2.pdf"
            target="_blank"
            >
            Frente e Verso
          </a>
        </li>

        <li>
          <a 
            href="https://comoclube.com/wp-content/uploads/2022/08/Pagina-de-Teste-COMOCLUBE-2.pdf"
            target="_blank"
            >
            Cachorros Color
          </a>
        </li>

        <li>
          <a 
            href="https://testeimpressora.imagepng.org/download/pagina-para-impressao-na-cor-ciano-100/?wpdmdl=115&refresh=67f33bda1bb901743993818"
            target="_blank"
            >
            Cyan Full
          </a>
        </li>

        <li>
          <a 
            href="https://testeimpressora.imagepng.org/download/pagina-para-impressao-na-cor-magenta-100/?wpdmdl=104&refresh=67f33b6cb38a61743993708"
            target="_blank"
            >
            Magenta Full
          </a>
        </li>

        <li>
          <a 
            href="https://testeimpressora.imagepng.org/download/pagina-para-impressao-na-cor-ciano-100-2/?wpdmdl=122&refresh=67f33e2514fc21743994405"
            target="_blank"
            >
            Yellow Full
          </a>
        </li>

        <li>
          <a 
            href="https://testeimpressora.imagepng.org/download/pagina-para-impressao-na-cor-preta-100/?wpdmdl=144&refresh=67f3372fa025e1743992623"
            target="_blank"
            >
            Black Full
          </a>
        </li>

        <li>
          <a 
            href="https://testeimpressora.imagepng.org/download/pagina-de-teste-de-impressao-simples-cores-cmyk-02/?wpdmdl=159&refresh=67f33da6768021743994278"
            target="_blank"
            >
            C M Y K Full
          </a>
        </li>
      </ul>      
    </>
  )
}

export default App
