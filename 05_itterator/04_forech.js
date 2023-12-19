const language = ["javascript", "css", "java", "python"];
language.forEach((val) => {
    //console.log(val);
})

// we pass a function  inside a foreach loop mehtod 

function print(item) {
    //console.log(item);
}

language.forEach(print)



language.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})




const codinglang = [
    {
        LanguageName: "javascript",
        LangaugeFileName: "js"
    },
    {
        LanguageName: "java",
        LangaugeFileName: "java"
    },
    {
        LanguageName: "python",
        LangaugeFileName: "py"
    },
];
codinglang.forEach((item) => {
    console.log(item.LanguageName);
})
