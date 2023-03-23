export async function upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET)

    return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "POST",
        body: formData
    }).then((res) => res.json())
    .then(console.log(data));
}
