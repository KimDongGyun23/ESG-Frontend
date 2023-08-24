function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^.{2,}$/; // 대소문자 숫자 구별 없이 2글자 이상

    // name 검증
    if (values.name === "") {
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }

    // email 검증
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email format is incorrect";
    } else {
        error.email = "";
    }

    // password 검증
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should be at least 2 characters long";
    } else {
        error.password = "";
    }

    if (error.name !== "" || error.email !== "" || error.password !== "") {
        alert("Please correct the following errors:\n\n" +
            (error.name !== "" ? "- " + error.name + "\n" : "") +
            (error.email !== "" ? "- " + error.email + "\n" : "") +
            (error.password !== "" ? "- " + error.password + "\n" : ""));
    }
    
    return error;
}

export default Validation;
    