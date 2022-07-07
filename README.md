# icar-wip_202207-obniz
[![pages-build-deployment](https://github.com/yosh1/icar-wip_202207-obniz/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/yosh1/icar-wip_202207-obniz/actions/workflows/pages/pages-build-deployment)

## How2run

### Package install

```
cd util/
yarn
```

### serve

```
cd util/
yarn dev
```

### frontend serve

```
python -m SimpleHTTPServer 8080
```

and open `localhost:8080/index.html` .

## If you want to run this code in your Obniz

Needs to be changed `OBNIZ_ID` in　 `code.js` and `util/*.js` .

e.g. 
```
var obniz = new Obniz("YOUR_OBNIZ_ID_HERE");
```

You will also need to change the array you get from the infrared module to that of air conditioner in your home.

