import { Table } from "antd"
import "../App.css"

export default function OutputForm() {
  const modelRecDataSource = [
    {
      key: "1",
      dataIndex: "1",
      modalSelect: "YOLO",
      optimization: "+数据增强",
      config: "XXX.yml",
      resize: "608*608",
      hardware: "1080Ti*3",
      demo: "下载地址",
    },
    {
      key: "2",
      dataIndex: "2",
      modalSelect: "picodet",
      optimization: "+fpn",
      config: "XXX.yml",
      resize: "608*608",
      hardware: "2080Ti*3",
      demo: "下载地址",
    },
    {
      key: "3",
      dataIndex: "3",
      modalSelect: "...",
      optimization: "...",
      config: "....",
      resize: "...",
      hardware: "...",
      demo: "...",
    },
  ]
  const modelRecColumns = [
    {
      title: "",
      dataIndex: "dataIndex",
      key: "dataIndex",
    },
    {
      title: "基础模型选择",
      dataIndex: "modalSelect",
      key: "modalSelect",
    },
    {
      title: "模型优化点",
      dataIndex: "optimization",
      key: "optimization",
    },
    {
      title: "模型配置文件",
      dataIndex: "config",
      key: "config",
      render: (text) => (
        <a href="https://baidu.com" target="_blank" rel="noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Resize尺寸",
      dataIndex: "resize",
      key: "resize",
    },
    {
      title: "硬件推荐",
      dataIndex: "hardware",
      key: "hardware",
    },
    {
      title: "部署Demo示例",
      dataIndex: "demo",
      key: "demo",
      render: (text) => (
        <a href="https://baidu.com" target="_blank" rel="noreferrer">
          {text}
        </a>
      ),
    },
  ]
  const dataCharacteristicSoruce = [
    {
      key: "0",
      characteristic: "是/否",
      smallSample: "是",
      equalDistribution: "否",
      intensive: "是",
      smallTarget: "否",
    },
  ]
  const dataCharacteristicColums = [
    {
      title: "数据特点",
      dataIndex: "characteristic",
      key: "characteristic",
    },
    {
      title: "小样本",
      dataIndex: "smallSample",
      key: "smallSample",
    },
    {
      title: "样本分布不均衡",
      dataIndex: "equalDistribution",
      key: "equalDistribution",
    },
    {
      title: "密集型",
      dataIndex: "intensive",
      key: "intensive",
    },
    {
      title: "小目标",
      dataIndex: "smallTarget",
      key: "smallTarget",
    },
  ]

  return (
    <>
      {/* 页面输出部分 */}
      <div className="output-form_layout">
        <div className="form-layout_blank">
          {/* 4 - 模型选型推荐 */}
          <div className="form-blank-title">
            <h1 className="blank-title asterisk">
              <span className="italic">4</span> &nbsp; 模型选型推荐
            </h1>
          </div>

          <div className="form-blank-content">
            {/* 表格 - 模型推荐 */}
            <div className="blank-0-0">
              <div className="blank-description">
                以下为根据您的数据和运行要求生产的推荐
              </div>

              <div className="blank-component">
                <Table
                  dataSource={modelRecDataSource}
                  columns={modelRecColumns}
                  pagination={false}
                />
              </div>
            </div>

            <div className="blank-0-1" style={{ marginLeft: 100 }}>
              <div className="blank-description">
                如下为当前您数据的特点，
                <span className="blank-description_sm">
                  <a href="https://baidu.com" className="link">
                    详细分析报告，请下载
                  </a>
                </span>
              </div>

              <div className="blank-component">
                <Table
                  dataSource={dataCharacteristicSoruce}
                  columns={dataCharacteristicColums}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
