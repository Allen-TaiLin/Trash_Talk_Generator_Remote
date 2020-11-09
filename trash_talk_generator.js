// define randomSelect function to randomly return a item in an array
function randomSelect(collection) {
  const index = Math.floor(Math.random() * collection.length)
  return collection[index]
}

// define generatorTrashTalk function
function generatorTrashTalk(option) {
  // define things user might want

  const jobTitle = {
    engineer: '工程師，',
    designer: '設計師，',
    entrepreneur: '創業家，'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['，很簡單吧！」', '，很容易吧！」', '，很快吧！」', '，很正常吧！」']

  let output = '「身為一個'

  // return error notice if collection is empty
  if (option === '' || option === null || option === undefined) {
    return '您還沒有選擇對象喔!'
  }

  //組合字串
  output += jobTitle[option] + randomSelect(task[option]) + randomSelect(phrase)

  return output
}

// invoke generatorTrashTalk function
//generatorTrashTalk('engineer')

// export generatorTrashTalk function for other files to use
module.exports = generatorTrashTalk