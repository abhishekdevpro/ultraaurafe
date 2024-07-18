import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="collect-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w, d) { w.CollectId = "659ff1c019aee0dd6428a0c5"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);`,
          }}
        />
      </body>
    </Html>
  )
}
