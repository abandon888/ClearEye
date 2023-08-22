import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Select,
  Typography,
  Upload,
} from 'antd'
import PageUpload from '../component/upload'

export default function SlicePhoto() {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="病理切片来源"
          name="source"
          rules={[{ required: true }]}>
          <Select
            defaultValue="填入切片来源"
            style={{ width: 360 }}
            options={[
              {
                value: '南昌大学一附院病理中心',
                label: '南昌大学一附院病理中心',
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="病理切片图片"
          name="image"
          rules={[{ required: true }]}>
          <PageUpload />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            上传
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
