// import { shell } from 'electron'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const electronVersion = 'Electron Version: v' + process.versions.electron
console.log(electronVersion)

const nodejsVersion = 'Nodejs Version: ' + process.version
console.log(nodejsVersion)

const chromeVersion = 'Chrome Version: v' + process.versions.chrome
console.log(chromeVersion)

document.body.innerHTML += `
<pre>
quick test at electron app environment.

press ctrl+shift+i open devtools, you can run js at Console and do more things.

${electronVersion}
${nodejsVersion}
${chromeVersion}
</pre>

<br>
<a href="https://github.com/En777/electron-quick-test">github source</a>, you can star or fork it.
`
