const express = require('express');
const os = require('os');
const app = express();


const port = 3000;

function getOSInfo() {
    return {
        userInfo: os.userInfo(),
        platform: os.platform(),
        arch: os.arch(),
        cpu: os.cpus(),
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        uptime: os.uptime(),
        hostname: os.hostname(),
        networkInterfaces: os.networkInterfaces(),
    };
}

app.get('/', (req, res) => {
    
    res.json("Hello i am Khan");
});

app.get('/api/osinfo', (req, res) => {
    const osInfo = getOSInfo();
    res.json(osInfo);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});




