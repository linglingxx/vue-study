const path = require('path')
// 启用热更新的 第二步
const webpack = require('webpack')
// 导入 在内存中生成的 HTML 页面的插件 html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')

// 这个配置文件是一个JS文件,通过 Node 中的模块操作向外暴露了一个 配置对象
module.exports = {
    // 在配置文件中, 指定 入口 和 出口
    entry: './src/main.js',  //entry 是指定打包文件的入口,可以用相对路径
    output: {  // output 是输出的目录, 只能用绝对路径
        path: path.join(__dirname, './dist'), //指定 打包好的文件, 输出到哪个目录中去
        filename: 'bundle.js'  // 指定 输出的文件的名称
    },
    devServer: { // 配置 dev-server 命令参数的第二种形式,要麻烦一些
        //  --open --port 3000 --contentBase ./src --hot
        open: true, // 自动打开浏览器
        port: 3000, // 设置启动时的运行端口号
        // contentBase: './src', // 指定托管的根目录
        hot: true // 启用热更新HMR的 第一步
    },
    plugins: [ // 配置插件的节点
        // 装了插件表示当前项目有资格开启HMR, 启用热更新第三步
        new webpack.HotModuleReplacementPlugin(),  
        new htmlWebpackPlugin({  // 创建一个 在内存中 生成 HTML 页面的插件
            // 如果不传入任何配置, 默认会创建一个 index.html托管在服务器根目录, 只不过这个HTML是空的
            template: path.join(__dirname, './src/index.html'),  // 指定模板页面,将来根据指定的页面路径,去生成内存中的页面
            filename: 'index.html'  // 指定生成的页面的名称
        })
    ],
    module: { // 症结点配置所有的 第三方模块 加载器
        rules: [  // 所有第三方模块的 匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=8900&name=[hash:3]-[name].[ext]' },
            // limit 给定的值是图片大小,单位 byte, 如果引用的图片大于等于给定的limit值,就不会被转为base64格式字符串,如果引用的图片小于limit值,则会被转为 base64 的字符串
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader' }

        ]
    }
    // mode: 'development'
}