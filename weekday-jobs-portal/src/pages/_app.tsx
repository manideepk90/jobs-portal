import "@/styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import type { AppProps } from "next/app";
import theme from "@/utils/theme";
import { wrapper} from "@/utils/store/store";
import { FC } from "react";

const MyApp : FC<AppProps>= ({Component, ...rest}) =>
   {
  const { store, props} = wrapper.useWrappedStore(rest)
  return ( <AppCacheProvider {...rest.pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...rest.pageProps} />
      </ThemeProvider>
    </AppCacheProvider>);
}
 export default MyApp;