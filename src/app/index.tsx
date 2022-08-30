import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { theme } from '@configs'
import store from '@store'

const app = (
	<BrowserRouter>
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				Hello World
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			</ChakraProvider>
		</Provider>
	</BrowserRouter>
)

export default app
