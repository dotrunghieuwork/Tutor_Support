const accountData = [
    {
        username: "khoi.nguyen13505",
        password: "123456",
        role: "student",
        fullname: "Nguyễn Đình Khôi"
    },
    {
        username: "khoa.le2907",
        password: "abcdef",
        role: "student",
        fullname: "Lê Minh Khoa"
    },
    {
        username: "tutor",
        password: "tutor",
        role: "tutor",
        fullname: "Mai Xuân Toàn"
    }
]

function checkLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-message");
    let account = accountData.find(p => p.username === user)
    if (account?.password === pass) {
        localStorage.setItem("user", JSON.stringify(account))
        window.location.href = "dashboard.html"; 
    } else {
        errorMsg.style.display = "flex";
    }
}

function deleteContent() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error-message").style.display = "none";
    document.getElementById("username").focus();
}