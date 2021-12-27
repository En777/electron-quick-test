const path = require('path')
const fs = require('fs')
const pkgPath = path.resolve(__dirname, '../package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

// 修改 package.json
// 为了实现：多版本共存，1台机器上安装多个 electron 版本，方便多个版本快速测试
function modifyPackageJSON () {
  let electronVersion = pkg.devDependencies.electron
  pkg.version = electronVersion
  // 'electron' => 'electron5.0.8'
  pkg.name = pkg.name.replace('electron', 'electron'+ electronVersion)
  // 'Electron' => 'Electron@5.0.8'
  pkg.build.productName = pkg.build.productName.replace('Electron', 'Electron'+ electronVersion)
  pkg.build.appId = pkg.build.appId + '.' + electronVersion

  const string = JSON.stringify(pkg, null, '  ') + '\n'

  fs.writeFileSync(pkgPath, string)
  console.log('modifyPackageJSON ok')
}

modifyPackageJSON()
