const Obniz = require("obniz");
const obnizId = new Obniz("7577-0937");
obnizId.onconnect = async function () {
  const module = obnizId.wired('IRModule', { vcc: 0, send: 1, recv: 2, gnd: 3 });
  module.start(function (arr) {
    console.log(JSON.stringify(arr));
  })
}
