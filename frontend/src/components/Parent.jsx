import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
      <button onClick={()=>message("Message from Parent")}>send message</button>
        <Child name="tvc" age={20} isActive={true} food={["biriyani","dal rice","curd"]}
        contact={{mobile:9876543212
          ,email:"saccvenkatchetan@gmail.com"
        }}
        sendMessage={message}
        />
        <Child name="vc" age={21} isActive={true} food={["biriyani","dal rice","curd"]}
        contact={{mobile:9876543210
          ,email:"venkatchetan@gmail.com"
        }}sendMessage={message}/>
    </div>
  )
}

export default Parent