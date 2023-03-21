import fs from "fs";

export const config = {
    api: {
        bodyParser: true
    }
};

const post = async (req, res) => {
    await saveFile(req.body)
    res.statusCode = 200
    res.end(JSON.stringify(req.body))
    return res
};

const saveFile = async (body) => {
    if (fs.existsSync("D:\React lab\Lab3\l3\public\info.json")) {
        fs.readFile("D:\React lab\Lab3\l3\public\info.json", {encoding: 'utf-8'}, function (err, data) {
            let d = JSON.parse(data);
            d.push(body)
            fs.writeFile("D:\React lab\Lab3\l3\public\info.json", JSON.stringify(d), function (err) {
                if (err) throw err;
                console.log("It's saved!");
                console.log(d);
            });
        });
    } else {
        fs.writeFile("D:\React lab\Lab3\l3\public\info.json", JSON.stringify([body]), {flag: 'w'}, function (err) {
            if (err) throw err;
            console.log("It's saved!");
        });
    }
};

export const doPostFetch = async (link, body, headers) => {
    const response = await fetch(link, {
        method: "POST",
        body,
        headers
    })
    return response.text().then(v => v)
};

export default (req, res) => {
    if (req.method === "POST") post(req, res)
    else res.status(200).send("Invalid method, use POST")
};
