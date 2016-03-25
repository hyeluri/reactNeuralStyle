export default function template(html){
  return `
    <html>
      <head>
        <title>
          React Browserify Hot Boilerplate
        </title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/scripts/bundle.js"></script>
      </body>
    </html>
  `;
}

export const num = 1;