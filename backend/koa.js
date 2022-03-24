const Koa = require('koa')
const cors = require('koa2-cors')
const fs = require('fs')
const xlsx = require('node-xlsx')

const app = new Koa()

let resIndex = []
const compare = (arr1, arr2, idx) => {
  
  if (arr1.length !== arr2.length) return false
  return arr1.sort().join(' ') === arr2.sort().join(' ') && resIndex.push(idx)
}

app.use(
  cors({
    // 任何地址都可以访问
    origin: '*',
    // 指定地址才可以访问
    // origin: 'http://localhost:8080',
    maxAge: 2592000,
    // 必要配置
    credentials: true,
  })
)

app.use(async (ctx) => {
  // 解析
  const sheetList = xlsx.parse('backend/excel.xlsx')
  const targetData = sheetList.find(
    (item) => item.name === '检测结果推荐G&H'
  ).data
  const targetRow = targetData
    .map((item, idx) => {
      return [].concat(
        item[0],
        item[1],
        item[3],
        item[7],
        item[9],
        item[11],
        item[14]
      )
    })
    .slice(3)

  // 输入
  let params = ''
  ctx.req.on('data', async (chunk) => {
    params += chunk

    const req = JSON.parse(params)

    const res = targetRow.find((row, idx) =>
      compare(row.slice(1), Object.values(req), idx)
    )

    const resRows = resIndex.map((idx) => targetData[idx + 3])
    // const resRow = targetData[resIndex + 3]

    // 不存在返回空数组 []
    ctx.body = resRows
    resIndex = []
  })
})

app.listen(3001, () => {
  console.log('start listening...')
})
