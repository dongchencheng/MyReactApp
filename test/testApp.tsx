import React from 'react'
import CatDefault, { CatComponent, Cat, Cat2, Cat2 as Test, TestFunction } from './test';
// 这里为什么必须要加括号？加括号和不加括号的区别是什么？这是ES6的语法
// export default导出的可以直接引入
// export导出的则需要花括号

const MyApp = () => {
    return (
        <>
            <Test name='test'></Test>
            <Cat name="test" tex="1"></Cat>
            <CatDefault name="test"></CatDefault>
            <Cat2 name="test"></Cat2>
            <CatComponent name="12"></CatComponent>
        </>
        // 这里return后加()括号的原因是：jsx在转换为js时，js会在每行自动添加';'，如果return后面换行了，就会报错
        // 所以其实return <Text>hello, cat</Text>也是可以运行的
    );
}
