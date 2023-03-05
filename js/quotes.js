const quotes = [
    {
        quote: "좋은 시란 어린이에게는 노래가 되고 청년에게는 철학이 되고 노인에게는 인생이 되는 시다.",
        author: "괴테"
    },
    {
        quote: "시란 아름다움의 음악적 창조다.",
        author: "에드거 앨런 포"
    },
    {
        quote: "시는 운율적 언어에 의한 모방이다.",
        author: "아리스토 텔레스"
    },
    {
        quote: "그 속에 한 조각의 애처로움도 없는 시는 씌어지지 않는 편이 낫다.",
        author: "오스카 와일드"
    },
    {
        quote: "산문은 저녁과 밤을 그릴 수 있지만, 시는 새벽을 노래하는 데 필요하다.",
        author: "메레디스"
    },
    {
        quote: " 시는 가장 행복하고 가장 선한 마음의, 가장 선하고 가장 행복한 순간의 기록이다.",
        author: "셸리"
    },
    {
        quote: "시는 역사보다 더 철학적이고 근엄하며 더 중요한 무엇이다. 역사가 말해 주는 것은 독특한 것들이지만, 시가 말해 주는 것은 보편적인 성격을 띠고 있기 때문이다.",
        author: "아리스토 텔레스"
    },
    {
        quote: "시인들은 모든 감각을 한없이 오랫동안 신중하게 교란시킴으로써 자신을 환상가로 만든다.",
        author: "랭보"
    },
    {
        quote: "시인은 인간성의 옹호자이며 보존자이다.",
        author: "워즈워드"
    },
    {
        quote: "알려진 우주에는 한 사람의 완전한 연인이 있으니, 그는 가장 위대한 시인이다.",
        author: "휘트먼"
    },
];

const quote = document.querySelector("#quote > span:first-child");
const author = document.querySelector("#quote > span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
