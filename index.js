const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Replace this with your ngrok URL
const ngrokUrl = 'https://a80d-2402-3a80-4229-d96c-c99f-3cdf-e463-e664.ngrok-free.app/webhook';

// Set up the proxy middleware
app.use('*', createProxyMiddleware({
    target: ngrokUrl,
    changeOrigin: true,
    pathRewrite: {
        '^/': '/', // Rewrite URL path if needed
    },
    logLevel: 'debug' // Optional: set the logging level
}));

// Start the server
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
