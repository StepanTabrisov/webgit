import fs from "fs";

export const config = {
    api: {
        bodyParser: true
    }
};

const get = async (req, res) => {
    fs.readFile("D:\React lab\Lab3\l3\public\info.json", {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            res.statusCode = 200
            res.end(JSON.stringify(data));
        } else {
            res.end(JSON.stringify([]))
        }
    });

    return res
};

export const doGetFetch = async (link) => {
    const response = await fetch(link, {
        method: "GET",
    })
    return response.text().then(v => v)
};

export default (req, res) => {
    if (req.method === "GET") get(req, res)
    else res.status(200).send("Invalid method, use POST")
};