export const BASE_DIR_MEDIA = "static_assets"

export const getBaseUrlMedia = () => {
    return process.env.PUBLIC_URL + '/' + BASE_DIR_MEDIA
}

export const getFileUrlMedia = fileName => {
    return getBaseUrlMedia() + '/' + fileName
}
