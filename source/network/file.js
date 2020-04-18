export function uploadFile({ url, file }) {
    return new Promise((resolve, reject) => {


        var xmlhttp = new XMLHttpRequest();
        let baseURL = 'http://127.0.0.1:3000'
        xmlhttp.open('POST', baseURL + url, true);

        xmlhttp.setRequestHeader("Content-type", "multipart/form-data");
        xmlhttp.send(file);
        console.log(file)
        

        xmlhttp.onreadystatechange = function () {
            // console.log(xmlhttp.status)

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                // console.log(xmlhttp.readyState,xmlhttp.status);
                resolve()
            } else if (xmlhttp.status === 500) {
                reject({
                    errCode: 500,
                    msg: "服务端错误"
                })
            } else if (xmlhttp.status === 404) {
                reject(404)
            }
        }
    })
}