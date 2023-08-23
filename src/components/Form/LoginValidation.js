function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^.{2,}$/; // 대소문자 숫자 구별 없이 2글자 이상

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 5 characters including uppercase, lowercase, and a digit.";
    } else {
        error.password = "";
    }

    if (error.email !== "" || error.password !== "") {
        alert("Please correct the following errors:\n\n" +
              (error.email !== "" ? "- " + error.email + "\n" : "") +
              (error.password !== "" ? "- " + error.password + "\n" : ""));
    }
    
    return error;
}

export default Validation;