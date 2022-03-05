import { Select } from "antd"
import { useState } from "react"
import "../App.css"

const { Option } = Select

export default function InputForm() {
  // form data
  const sceneList = ["工业质检", "安防", "其他"]
  const taskList = ["目标检测", "语义分割"]

  // state
  const [scene, setScene] = useState()
  const [task, setTask] = useState()

  // handler

  return (
    <div className="pp-input-form">
      <div className="input-form_summary">
        模型选型工具凝聚了飞桨开发团队在产业实践中总结的规律，用户输入自己的场景和任务，选型工具自动为用户提供合适的模型和相应的硬件。
      </div>

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

              <Select
                placeholder={`请选择...`}
                style={{ width: 240 }}
                onChange={(value) => {
                  setScene(value)
                }}
              >
                <Option value="a1">{sceneList[0]}</Option>
                <Option value="a1">{sceneList[1]}</Option>
                <Option value="a3">{sceneList[2]}</Option>
              </Select>
            </div>

            {/* 下拉框 - 任务类别 */}
            <div className="blank-0-1">
              <div className="blank-description">
                请选择您的任务类别，
                <span className="blank-description_sm">如分类，检测等</span>
              </div>

              <Select
                placeholder={`请选择...`}
                style={{ width: 240 }}
                onChange={(value) => {
                  setTask(value)
                }}
              >
                <Option value="b1">{taskList[0]}</Option>
                <Option value="b2">{taskList[1]}</Option>
              </Select>
            </div>
          </div>
        </div>

        {/* 数据校验 */}
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

              <Select
                placeholder={`请选择...`}
                style={{ width: 240 }}
                onChange={(value) => {
                  setScene(value)
                }}
              >
                <Option value="a1">{sceneList[0]}</Option>
                <Option value="a1">{sceneList[1]}</Option>
                <Option value="a3">{sceneList[2]}</Option>
              </Select>
            </div>

            {/* 下拉框 - 任务类别 */}
            <div className="blank-0-1">
              <div className="blank-description">
                请选择您的任务类别，
                <span className="blank-description_sm">如分类，检测等</span>
              </div>

              <Select
                placeholder={`请选择...`}
                style={{ width: 240 }}
                onChange={(value) => {
                  setTask(value)
                }}
              >
                <Option value="b1">{taskList[0]}</Option>
                <Option value="b2">{taskList[1]}</Option>
              </Select>
            </div>
          </div>
        </div>

        {/* 模型运行要求 */}
        <div className="form-layout_blank">
          <div className="blank-2"></div>
        </div>
      </div>
    </div>
  )
}
