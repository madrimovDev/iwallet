import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@configs'
import { Test } from '@components'

const app = (
	<BrowserRouter>
			<ChakraProvider theme={theme}>
				<Test />
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			</ChakraProvider>
	</BrowserRouter>
)

export default app
