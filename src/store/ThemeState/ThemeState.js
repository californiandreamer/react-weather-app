import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
    const [themeState, setTheme] = useState("main")
    
    const setMainTheme = () => {
        setTheme("main")
        localStorage.setItem('theme', 'main')
    }

    const setCherryTheme = () => {
        setTheme("cherry")
        localStorage.setItem('theme', 'cherry')
    }

    const setCityTheme = () => {
        setTheme("city")
        localStorage.setItem('theme', 'city')
    }

    const setVineTheme = () => {
        setTheme("vine")
        localStorage.setItem('theme', 'vine')
    }

    const setDarkTheme = () => {
        setTheme("dark")
        localStorage.setItem('theme', 'dark')
    }

    const setPurpleTheme = () => {
        setTheme("purple")
        localStorage.setItem('theme', 'purple')
    }

    const setMountainsTheme = () => {
        setTheme("mountains")
        localStorage.setItem('theme', 'mountains')
    }

    function localStorageHandler() {
        const getTheme = localStorage.getItem('theme')
        if(getTheme === null) {
            setMountainsTheme()
        } else {
            setTheme(getTheme)
        }
    }

    useEffect(() => {
        localStorageHandler()
    }, [])

    return{
        themeState, setMainTheme, setCherryTheme, setCityTheme,
        setVineTheme, setDarkTheme, setPurpleTheme, setMountainsTheme
    }
}