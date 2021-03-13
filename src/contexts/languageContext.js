import React from 'react'

const LanguageContext = React.createContext({
    language: "Bulagrian",
    changeLang: () => {}
    
})

export default LanguageContext