// http => Hyper Text Transfer Protocol
const http = require("http");
const { parse } = require("querystring");
let users = [];
const server = http.createServer((req, res) => {
  if (req.url == "/read" || req.url == "/store") {
    if (req.method == "POST" && req.url == "/store") {
      console.log("Incoming Request");
      console.log(req.method);
      console.log(req.url);

      let chuncks = [];
      req.on("data", (chunck) => {
        console.log(chunck);
        chuncks.push(chunck);
      });
      req.on("end", () => {
        console.log("Data received successfully");
        const data = Buffer.concat(chuncks);
        // let object = parse(data.toString());
        let object = {};
        const parsedData = new URLSearchParams(data.toString());
        for (let pair of parsedData.entries()) {
          console.log(pair);
          object[pair[0]] = pair[1];
        }
        console.log(object);
        console.log(`Name: ${object.name}`);
        console.log(`Email: ${object.email}`);

        if (object.name != undefined && object.email != undefined) {
          let user = { name: object.name, email: object.email };
          users.push(user);
          res.writeHead(201, {
            "Content-Type": "application/json",
          });
          res.write(
            JSON.stringify({
              status: true,
              message: "Success",
              data: user,
              users: users,
            })
          );
        } else {
          res.writeHead(400, {
            "content-type": "application/json",
          });
          res.write(
            JSON.stringify({
              status: false,
              message: "Enter required data",
            })
          );
        }
        res.end();
      });
    } else if (req.method == "GET" && req.url == "/read") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(
        JSON.stringify({ status: true, message: "Success", data: users })
      );
      res.end();
    } else {
      console.log("METHOD NOT ALLOWED");
      res.writeHead(405, {
        "Content-Type": "application/json",
      });
      res.write(JSON.stringify({ status: false }));
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({ statu: false, message: "requested uri is not defined" })
    );
    res.end();
  }

  //   console.log(req.headers);
  //   console.log(req.statusCode);
  //   console.log(req.statusMessage);
});
server.listen(5000);
