const express = require('express');
const app = express();
const port = 6060;

app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

