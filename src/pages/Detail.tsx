import { Switch } from 'antd'

function onChange(checked: any) {
  console.log(`switch to ${checked}`)
}

const Detail = () => {
  return (
    <>
      <div>123</div>
      <Switch defaultChecked onChange={onChange} />
      123
    </>
  )
}

export default Detail
