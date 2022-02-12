import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { Component } from 'react';
import PropTypes from 'prop-types'

const Cat = (props: any) => {
    return (
        <View>
            <Text>Hello,{props.tex} I am...{props.name}</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Name me!"
            />
        </View>
    );
}

// defaultProps 用于设置默认props
Cat.defaultProps = {
    name: 'default name'
}

// propType用于限制props的类型。有此限制时，必须在此添加对应类型，才可以使用对应的props
Cat.propTypes = {
    name: PropTypes.string,
    tex: PropTypes.string
}

interface Props {
    name: string,
    number?: number,// ?表示可选
}

class CatComponent extends Component<Props> {
    // 默认值设置方法：
    static defaultProps = {
        name: 'stranger'
    }
    // 此时不支持直接通过类访问 defaultProps 来赋值以设置默认属性，因为 React.Component 类型上并没有该属性。
    // CatComponent.defaultProps = {}不行
    // https://blog.csdn.net/sinat_17775997/article/details/102514747
    constructor(props: Props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            success: false,
            keyword: "",
            total: 0,
            current: 1,
        }
    }

    render(): React.ReactNode {
        return <Text>Cat Component..{this.props.name}</Text>
    }
}



export default Cat;
export { Cat };
export { Cat as Cat2 };
export function TestFunction() {

};
export { CatComponent };

