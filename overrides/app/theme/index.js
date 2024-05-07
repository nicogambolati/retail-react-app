import themeBase from '@salesforce/retail-react-app/app/theme'
import {extendTheme} from '@chakra-ui/react'

import colors from './colors'

import Header from './components/project/header'
import Button from './components/base/button'

const overrides = {
    colors,
    components: {
        Header,
        Button
    }
}

const theme = extendTheme(overrides, themeBase)
export default theme
