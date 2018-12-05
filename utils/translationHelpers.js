/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import 'isomorphic-unfetch'

const getTranslation = async (lang, files, baseUrl) => {
    const translation = {}
    for (const file of files) {
        const response = await fetch(`${baseUrl}${lang}/${file}.json`)
        translation[file] = await response.json()
        console.log()
    }
    return { [lang]: translation }
}

export default getTranslation
