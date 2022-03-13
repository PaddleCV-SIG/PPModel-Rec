import { Form, Button, Select, Upload } from 'antd'
import '../App.css'

const { Option } = Select

export default function InputForm() {
  // form data
  const sceneList = ['工业质检', '安防', '其他']
  const taskList = ['目标检测', '语义分割']
  const sinalCountList = Array(9)
    .fill('e')
    .map((e, idx) => e + (idx + 1))
  const runtimeList = [
    { name: '20ms及其以下', code: 'f1' },
    { name: '20-40ms', code: 'f2' },
    { name: '40-60ms', code: 'f3' },
    { name: '60-80ms', code: 'f4' },
    { name: '100-200ms', code: 'f5' },
    { name: '200-500ms', code: 'f6' },
    { name: '500-1000ms', code: 'f7' },
    { name: '1000-2000ms', code: 'f8' },
    { name: '2000ms-3000ms', code: 'f9' },
  ]
  const systemList = [
    { name: 'windows10', code: 'j1' },
    { name: 'ubuntu', code: 'j2' },
  ]
  const hardwareList = [
    { name: '3090', code: 'i1' },
    { name: '2080ti', code: 'i2' },
    { name: '1080ti', code: 'i3' },
  ]

  // form instance
  const [form] = Form.useForm()

  // handler
  const formValuesChange = (changedValues, allValues) => {
    // console.log(changedValues, allValues)
  }

  const formSubmit = () => {
    form.submit()
  }

  const formFinish = (values) => {
    const url = 'http://127.0.0.1:3001/backend/koa'
    const fetchInit = {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }

    fetch(url, fetchInit)
      .then((res) => res.json())
      .then((res) => console.log(`res`, res))
      .catch((err) => console.log(err))
  }

  return (
    <Form
      form={form}
      onValuesChange={formValuesChange}
      onFinish={formFinish}
      scrollToFirstError
    >
      <div className="input-form_summary">
        模型选型工具凝聚了飞桨开发团队在产业实践中总结的规律，用户输入自己的场景和任务，选型工具自动为用户提供合适的模型和相应的硬件。
      </div>

      {/* 用户输入部分 */}
      <div className="input-form_layout">
        {/* 场景选择 */}
        <div className="form-layout_blank">
          {/* 1 - 场景选择 */}
          <div className="form-blank-title">
            <h1 className="blank-title asterisk">
              <span className="italic">1</span> &nbsp; 场景选择
            </h1>
          </div>

          <div className="form-blank-content">
            {/* 下拉框 - 场景选择 */}
            <div className="blank-0-0">
              <div className="blank-description">
                请选择您的场景，
                <span className="blank-description_sm">如质检，安防等</span>
              </div>

              <Form.Item
                name="scene"
                className="blank-component"
                rules={[{ required: true, message: '请选择您的使用场景' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  <Option value="a1">{sceneList[0]}</Option>
                  <Option value="a2">{sceneList[1]}</Option>
                  <Option value="a3">{sceneList[2]}</Option>
                </Select>
              </Form.Item>
            </div>

            {/* 下拉框 - 任务类别 */}
            <div className="blank-0-1">
              <div className="blank-description">
                请选择您的任务类别，
                <span className="blank-description_sm">如分类，检测等</span>
              </div>

              <Form.Item
                name="task"
                className="blank-component"
                rules={[{ required: true, message: '请选择您的任务类别' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  <Option value="b1">{taskList[0]}</Option>
                  <Option value="b2">{taskList[1]}</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>

        {/* 数据校验 */}
        <div className="form-layout_blank">
          {/* 2 - 数据校验 */}
          <div className="form-blank-title">
            <h1 className="blank-title">
              <span className="italic">2</span> &nbsp; 数据校验
            </h1>
          </div>

          <div className="form-blank-content">
            {/* 下拉框 - 场景选择 */}
            <div className="blank-1-0">
              <div className="blank-description">
                请选择您的标注文件。
                <span className="blank-description_sm">
                  <a href="https://baidu.com" className="link">
                    {/* 跳转到静态页面 */}
                    数据集格式说明
                  </a>
                  <a href="https://baidu.com" className="link">
                    标注软件推荐
                  </a>
                </span>
              </div>

              <div className="blank-component horizon">
                <Upload>
                  <Button className="button-0" style={{ width: 240 }}>
                    {/* 上传格式审查 */}
                    点击上传
                  </Button>
                </Upload>

                <Button
                  className="button-1"
                  style={{ marginLeft: 10, width: 120 }}
                >
                  数据分析
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 模型运行要求 */}
        <div className="form-layout_blank">
          {/* 3 - 模型运行要求 */}
          <div className="form-blank-title">
            <h1 className="blank-title">
              <span className="italic">3</span> &nbsp; 模型运行要求
            </h1>
          </div>

          <div className="form-blank-content">
            {/* 下拉框 - 信号数 */}
            <div className="blank-2 blank-2-0">
              <div className="blank-description asterisk">
                请选择您要输入的信号数
              </div>

              <Form.Item
                name="sinalCount"
                className="blank-component"
                rules={[{ required: true, message: '请选择您要输入的信号数' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  {sinalCountList.map((sinal, idx) => {
                    return (
                      <Option value={sinal} key={idx}>
                        {idx + 1}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </div>

            {/* 下拉框 - 运行时间 */}
            <div className="blank-2 blank-2-1">
              <div className="blank-description asterisk">
                请选择模型预期在硬件的运行时间
              </div>

              <Form.Item
                name="runtime"
                className="blank-component"
                rules={[{ required: true, message: '请选择您要输入的信号数' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  {runtimeList.map((runtime, idx) => {
                    return (
                      <Option value={runtime.code} key={idx}>
                        {runtime.name}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </div>

            {/* 下拉框 - 部署系统 */}
            <div className="blank-2 blank-2-1">
              <div className="blank-description asterisk">
                请选择您部署使用系统
              </div>

              <Form.Item
                name="system"
                className="blank-component"
                rules={[{ required: true, message: '请选择您部署使用系统' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  {systemList.map((system, idx) => {
                    return (
                      <Option value={system.code} key={idx}>
                        {system.name}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </div>

            {/* 下拉框 - 部署硬件 */}
            <div className="blank-2 blank-2-1">
              <div className="blank-description">请选择您部署的硬件</div>

              <Form.Item
                name="hardware"
                className="blank-component"
                rules={[{ required: true, message: '请选择您部署的硬件' }]}
              >
                <Select placeholder={`请选择...`} style={{ width: 240 }}>
                  {hardwareList.map((hardware, idx) => {
                    return (
                      <Option value={hardware.code} key={idx}>
                        {hardware.name}
                      </Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="form-layout_blank">
          <Button
            className="form-blank_submit"
            type="primary"
            size="large"
            onClick={formSubmit}
          >
            生成模型推荐
          </Button>
        </div>
      </div>
    </Form>
    // </div>
  )
}
