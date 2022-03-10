import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export default extendTheme({
  config,
  styles:{
    global:{
      "html, body": {
        fontFamily: "'Nunito Sans', sans-serif",
        color:"white"
      }
    }
  },
  colors:{
    darkElements: "hsl(207, 26%, 17%)",
    lightElements: "hsl(0, 0%, 98%)",
    darkText: "#fff",
    lightText: "hsl(200, 15%, 8%)",

  },
  components:{
    Text:{
      baseStyle:{
        display: 'flex',
      },
      variants:{
        'data':{
          color:"gray.400",
          marginLeft:'5px'
        }
      }
    }
  }
})