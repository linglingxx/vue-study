// main.js 是项目的入口文件

// 导入 Jquery
// import *** from *** 是ES6中导入模块的方式; ES6代码太高级浏览器无法解析
import $ from 'jquery'

// 使用 import 语法, 导入 css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// webpack 默认只能打包处理 JS 类型的文件, 无法处理其他的非 JS 类型的文件,必须手动安装合适的第三方 loader 加载器
import 'bootstrap/dist/css/bootstrap.css'

$(function () {  
    // $('li:odd').css('backgroundColor', 'pink')
    // $('li:even').css('backgroundColor', function(){
    //     return '#' + '666'
    // })
})

// webpack 能够处理 JS 文件的相互依赖关系
// webpack 能够处理 JS 的兼容问题, 把 高级的,浏览器无法识别的语法转为低级的,浏览器能识别的语法
// 运行的命令格式: webpack  要打包的文件的路径  -o  打包好的输出文件的路径
// webpack-dev-server 把打包好的文件,以虚拟的形式托管到了项目的根目录中,虽然看不到,但是可以认为和 dist src node_modules 平级,有一个看不到的文件叫 bundle.js