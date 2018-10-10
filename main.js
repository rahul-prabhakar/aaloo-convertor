const { app, BrowserWindow } = require('electron')
const splash = require('@trodi/electron-splashscreen')
const path = require('path')
const url = require('url')
const ConvertorService = require('@aaloo/services/convertor/convertor');
let conv
let win


function createWindow() {

    conv = new ConvertorService(`${__dirname}/aalooDb.json`);

    const config = {
        windowOpts: { width: 1366, height: 768, resizable: false, darkTheme: true, maximizable: false, center: true },
        templateUrl: `${__dirname}/splash.html`,
        splashScreenOpts: { width: 425, height: 325 }
    };
    win = splash.initSplashScreen(config);

    // load the dist folder from Angular
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools optionally:
    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createSplashWindow()
        createWindow()
    }
})


const ipcMain = require('electron').ipcMain;
ipcMain.on('convert', (e, txt, src, dest) => {
    e.returnValue = conv.convert('ਹੁਸ਼ਿਆਰਪੁਰ,   (ਘੁੰਮਣ)-  ਲੇਬਰ ਪਾਰਟੀ ਭਾਰਤ ਵੱਲੋਂ ਘਰੇਲੂ ਰਸੋਈ ਗੈਸ ਸਿਲੰਡਰ ਦੀ  ਕੀਮਤ ’ਚ ਵਾਧੇ ਵਿਰੁੱਧ ਰੋਸ ਮੁਜ਼ਾਹਰਾ ਕੀਤਾ ਗਿਆ। ਇਸ ਮੌਕੇ ਲੇਬਰ ਪਾਰਟੀ ਭਾਰਤ ਦੇ ਪ੍ਰਧਾਨ ਜੈ ਗੋਪਾਲ ਅਤੇ ਮਹਿਲਾ ਵਿੰਗ ਦੀ ਆਗੂ ਮਨਦੀਪ ਕੌਰ ਨੇ ਕਿਹਾ ਕਿ 14 ਕਿਲੋ 200 ਗ੍ਰਾਮ ਵਾਲੇ ਘਰੇਲੂ ਗੈਸ ਸਿਲੰਡਰ ਦੀ  ਕੀਮਤ ਇਸ ਸਾਲ 1 ਜੂਨ ਨੂੰ 727 ਰੁਪਏ ਸੀ, ਜੋ  ਵਧਾ  ਕੇ 910 ਰੁਪਏ 34 ਪੈਸੇ ਕਰ ਦਿੱਤੀ ਗਈ ਹੈ। 5 ਕਿਲੋ ਵਾਲੇ ਗੈਸ ਸਿਲੰਡਰ ’ਤੇ ਕੇਂਦਰ ਸਰਕਾਰ ਨੇ ਸਬਸਿਡੀ ਖਤਮ ਕਰ ਦਿੱਤੀ ਹੈ ਅਤੇ ਬਾਜ਼ਾਰ ਵਿਚ ਇਹ 459 ਰੁਪਏ ’ਚ ਵੇਚਿਆ ਜਾ ਰਿਹਾ ਹੈ। ਉਨ੍ਹਾਂ ਦੱਸਿਆ ਕਿ ਗੈਸ ਸਿਲੰਡਰ ਦੀ ਬੇਸਿਕ ਕੀਮਤ 867 ਰੁਪਏ 14 ਪੈਸੇ ਹੈ, ਇਸ’ ਤੇ 21 ਰੁਪਏ 60 ਪੈਸੇ ਕੇਂਦਰ ਸਰਕਾਰ ਅਤੇ ਇੰਨਾ ਹੀ ਸੂਬਾ ਸਰਕਾਰ ਟੈਕਸ ਲਾ ਰਹੀ ਹੈ। ਇਸੇ ਤਰ੍ਹਾਂ ਕਮਰਸ਼ੀਅਲ ਰਸੋਈ ਗੈਸ ਸਿਲੰਡਰ ਦੀ ਕੀਮਤ ਵਿਚ ਵੀ ਭਾਰੀ ਵਾਧਾ ਕੀਤਾ ਗਿਆ ਹੈ। ਉਨ੍ਹਾਂ ਦੋਸ਼ ਲਾਇਆ ਕਿ ਕੇਂਦਰ ਦੀ ਭਾਜਪਾ ਦੀ ਅਗਵਾਈ ਵਾਲੀ ਐੱਨ.ਡੀ.ਏ.ਸਰਕਾਰ ਲੋਕਾਂ ਦਾ ਸ਼ੋਸ਼ਣ ਕਰਨ’ ਚ ਕੋਈ ਕਸਰ ਬਾਕੀ ਨਹੀਂ ਛੱਡ ਰਹੀ। ਇਸ ਮੌਕੇ ਪਰਮਿੰਦਰ ਕੌਰ, ਸੋਨੀਆ, ਸੁਖਜੀਤ ਕੌਰ, ਜਸਵਿੰਦਰ ਧੀਮਾਨ, ਕੁਲਵਿੰਦਰ, ਸੁਖਜਿੰਦਰ ਕੌਰ, ਜਸਵਿੰਦਰ, ਪਰਮਿੰਦਰ ਕੌਰ ਆਦਿ ਵੀ ਮੌਜੂਦ ਸਨ।', "Raavi", "GurmukhiLys 020");
})