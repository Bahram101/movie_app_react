import React from 'react'

const TestComponent = (props) => {
    const { data, onClickButton = () => { }, onChangeInput = () => { } } = props
    console.log('data', data)
    return (
        <div>
            <div>{data.testData}</div>
            <button onClick={onClickButton}>Button</button>
            <input type="text" onChange={(e) => onChangeInput('firstInput',e.target.value)} value={data.inputData} />
            <input type="text" onChange={(e) => onChangeInput('secondInput',e.target.value)} value={data.second} />
        </div>
    )
}

export default TestComponent