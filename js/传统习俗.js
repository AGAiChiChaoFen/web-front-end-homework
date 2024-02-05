// 选择所有具有类名 "content_title" 下的 li 元素并将其存储在变量 titles 中
var titles = document.querySelectorAll(".content_title li");

// 选择所有具有类名 "content_main_word" 下的元素并将其存储在变量 contentWords 中
var contentWords = document.querySelectorAll(".content_main_word");

// 使用 forEach 方法迭代所有标题元素，并为每个标题添加点击事件监听器
titles.forEach(function(title, index) {
    title.addEventListener("click", function() {
        // 移除所有标题元素的 "pitch" 类
        titles.forEach(function(t) {
            t.classList.remove("pitch");
        });

        // 隐藏所有内容元素
        contentWords.forEach(function(content) {
            content.style.display = "none";
        });

        // 为当前被点击的标题元素添加 "pitch" 类，突出显示它
        this.classList.add("pitch");

        // 根据被点击标题的索引，显示相应的内容元素
        contentWords[index].style.display = "block";
    });
});
