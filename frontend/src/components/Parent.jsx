import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="tvc" age={20} isActive={true} food={["biriyani","dal rice","curd"]}
        contact={{mobile:9876543212
          ,email:"saccvenkatchetan@gmail.com"
        }}/>
        <Child name="vc" age={21} isActive={true} food={["biriyani","dal rice","curd"]}
        contact={{mobile:9876543210
          ,email:"venkatchetan@gmail.com"
        }}/>
    </div>
  )
}

export default Parent