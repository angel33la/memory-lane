// Inserts a horizontal line as a divider before the first list inside .post-body
document.addEventListener("DOMContentLoaded", function () {
    const postBody = document.querySelector(".post-body");
    if (!postBody) return;
    const list = postBody.querySelector("ol, ul");
    if (!list) return;

    if (postBody.querySelector(".post-divider")) return;
    const hr = document.createElement("hr");
    hr.className = "post-divider";
    list.parentNode.insertBefore(hr, list);
});