const { createProxyMiddleware } = require('http-proxy-middleware');
    
    module.exports = function(app) {
    
        app.use(
        '/products.json', //this is your api
        createProxyMiddleware({
          target:'https://@jkyoggiftshop.myshopify.com/admin/api/2023-01/products.json', //this is your whole endpoint link
          changeOrigin: true,
        })
      );


    // app.use(
    //     '/getproducts', //this is your api
    //     createProxyMiddleware({
    //       target:'http://10.0.0.20:9000/getproducts', //this is your whole endpoint link
    //       changeOrigin: true,
    //     })
    //   );
      
    };