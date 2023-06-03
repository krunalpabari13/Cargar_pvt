import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
export default function Document() {
  return (
    <Html lang="en">
    <Head>
    <link rel="icon" type="image/x-icon" href="favicon.ico?v=2"  />

      <meta name="description" content='cargar is a charge as a service platform which provide on-demand ev-charging'></meta>
      <meta name="keywords" content='EV Charging,Ultra fast charging, smart and efficient charging, on-demand service, grid free charging'></meta>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</link>
<link href="./custom.css" rel="stylesheet"></link>
    </Head >
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>

  )
}
