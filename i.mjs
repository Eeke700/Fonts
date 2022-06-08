export const file =(f,fo = f ? f.split('+').join(' '):'')=> `<!DOCTYPE html>
<html id="html">
    <head>
<style id="style">
@import url('https://fonts.googleapis.com/css2?family=${f}&display=swap');
body{
display:flex;align-items:center;justify-content:center;height:100vh;width:100vw;font-size:3em;font-family:"${fo}";
}
</style>
</head>
<body>
${fo}
</body>
</html>
`
