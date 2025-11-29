const accountData = JSON.parse(localStorage.getItem("user"));

if (!accountData) window.location.href = "index.html";

const navbarData = [
    {
        content: "Trang chủ",
        icon: "fa-solid fa-house",
        redirect: "",
    },
    {
        content: "Biên bản",
        icon: "fa-regular fa-folder",
        redirect: "",
        role: "tutor"
    },
    {
        content: "Quản lý buổi hỗ trợ",
        icon: "fa-regular fa-calendar",
        redirect: "managesession.html",
        role: "tutor"
    },
    {
        content: "Tìm kiếm Tutor",
        icon: "fa-regular fa-calendar",
        redirect: "",
        role: "student"
    },
    {
        content: "Đăng ký buổi hỗ trợ",
        icon: "fa-regular fa-calendar",
        redirect: "",
    },
    {
        content: "Đánh giá",
        icon: "fa-regular fa-comment-dots",
        redirect: "",
        role: "student"
    },
    {
        content: "Tài liệu",
        icon: "fa-solid fa-book-open",
        redirect: "",
    },
    {
        content: "Thông tin cá nhân",
        icon: "fa-regular fa-user",
        redirect: "",
    },
];

const navbarRender = () => {
    const navbarWrapper = document.querySelector(".nav-menu")

    navbarWrapper.innerHTML = navbarData.map((val, index) => 
        !val?.role || accountData.role === val?.role ? `<li class="nav-item active">
            <a href="${val.redirect || "#"}" class="nav-link">
                <i class="${val.icon}"></i>
                ${val.content}
            </a>
        </li>` : ""
    ).join("")
};

navbarRender();

const welcomeMessageRender = () => {
    document.querySelector(".user-welcome h1").innerText = accountData.fullname
    document.querySelector(".user-avatar").src = `assets/images/${accountData.role}_avt.jpg`
}

welcomeMessageRender()
