import {useState} from 'react'
import {Button, message} from 'antd'
import styled from 'styled-components'

const SpanCss = styled.span({
    color:'red'
})

const App = () => {
    const [count, setCount] = useState(0)

    const onClick = () => {
        message.success(count)
        setCount(count+1)
    }

    return (
        <Button onClick={onClick} type={'primary'}>
            <SpanCss count={count}>测试</SpanCss>
        </Button>
    )
}

export default App