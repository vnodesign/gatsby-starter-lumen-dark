import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head itemScope itemType="https://schema.org/WebSite">
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} itemScope itemType="https://schema.org/WebPage">
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script dangerouslySetInnerHTML={{__html: `function td_adsense(){var t=document.createElement("script");t.async=!0,t.defer=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4183134625750063",document.body.appendChild(t)}window.addEventListener?window.addEventListener("load",td_adsense,!1):window.attachEvent?window.attachEvent("onload",td_adsense):window.onload=td_adsense;`,}} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
