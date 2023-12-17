const $qNo = document.querySelector('#q-no')
const $question = document.querySelector('#question')
const $btnYes = document.querySelector('#btn-yes')
const $btnNo = document.querySelector('#btn-no')

const questions = [
    {
    text: "주로 사람들과 함께 시간을 보내는 것이 힘이 난다.",
    yes: "I",
    no: "E"
  },
  {
    text: "새로운 사람들과의 소셜 이벤트에 참가하는 것은 나에게 흥미로운 일이다.",
    yes: "E",
    no: "I"
  },
  {
    text: "내 주변에 있는 것들을 꼼꼼하게 관찰하며 느끼는 편이다.",
    yes: "S",
    no: "N"
  },
  {
    text: "나는 세부적인 계획보다는 유연한 계획을 선호한다.",
    yes: "P",
    no: "J"
  },
  {
    text: "결정을 내릴 때 주로 감정보다는 논리를 더 따르는 편이다.",
    yes: "T",
    no: "F"
  },
  {
    text: "남들에게 말하기 전에 내 생각을 깊이 생각하는 편이다.",
    yes: "I",
    no: "E"
  },
  {
    text: "나는 새로운 경험보다는 익숙한 경험을 선호한다.",
    yes: "S",
    no: "N"
  },
  {
    text: "여행 계획을 세울 때 미리 구체적인 일정을 만드는 편이다.",
    yes: "J",
    no: "P"
  },
  {
    text: "나의 감정을 솔직하게 표현하는 것이 어렵다.",
    yes: "T",
    no: "F"
  },
  {
    text: "평소에 나는 사람들과의 대화보다는 혼자 있는 것을 선호한다.",
    yes: "I",
    no: "E"
  },
  {
    text: "나는 상상보다는 현실적인 것을 중시한다.",
    yes: "S",
    no: "N"
  },
  {
    text: "나의 진로나 계획은 상대적으로 변화하는 편이다.",
    yes: "P",
    no: "J"
  }
]

let qNo = 0
let stat = {
    "E": 0,
    "I": 0,
    "N": 0,
    "S": 0,
    "T": 0,
    "F": 0,
    "P": 0,
    "J": 0
}

function next() {
    if (qNo === questions.length) {
        let query = '/result.html?'
        for (let k in stat) {
            query += `${k}=${stat[k]}&`
        }
        location.href = query
        return
    }
    $qNo.innerText = `No. ${qNo + 1}`
    $question.innerText = questions[qNo].text
    $btnYes.onclick = () => {
        stat[questions[qNo].yes]++
        qNo++
        next()
    }
    $btnNo.onclick = () => {
        stat[questions[qNo].no]++
        qNo++
        next()
    }
}

next()
