// webpack.config.js
module.exports = {
    // các thiết lập khác...
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
  
        // Thêm middleware tùy chỉnh ở đây
        // Ví dụ: devServer.app.use(...)
        
        return middlewares;
      },
    },
  };
s  