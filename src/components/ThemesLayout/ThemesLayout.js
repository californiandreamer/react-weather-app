import React, {useContext} from 'react'
import cls from './ThemesLayout.module.css'
import ThemeContext from '../../store/ThemeState/ThemeContext'
import classNames from 'classnames'

const ThemesLayout = () => {
    const {setCityTheme, setMainTheme, setCherryTheme, setVineTheme, setDarkTheme, setPurpleTheme, setMountainsTheme} = useContext(ThemeContext)

    const mainTheme = classNames({[cls.themes__button]: true, [cls.main]: true})
    const cherryTheme = classNames({[cls.themes__button]: true, [cls.cherry]: true})
    const cityTheme = classNames({[cls.themes__button]: true, [cls.city]: true})
    const vineTheme = classNames({[cls.themes__button]: true, [cls.vine]: true})
    const darkTheme = classNames({[cls.themes__button]: true, [cls.dark]: true})
    const purpleTheme = classNames({[cls.themes__button]: true, [cls.purple]: true})
    const mountainsTheme = classNames({[cls.themes__button]: true, [cls.mountains]: true})

    return(
        <div className={cls.themes__container}>
            <div className={cls.themes__description}>
                <div className={cls.themes__title}>Theme title</div>
                <div className={cls.themes__content}>We created for you beautyful different themes. You can choose one you like. Just click on that and it will be choosen. Your choise will be saved for the next session. Keep feeling beautiful!</div>
            </div>
            <div className={cls.themes__wrapper}>
                <div className={cls.themes__item}>
                    <button className={mountainsTheme} 
                    onClick={setMountainsTheme}
                    >
                        <p className={cls.button__title}>Mountains Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={cityTheme} 
                    onClick={setCityTheme}
                    >
                        <p className={cls.button__title}>City Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={mainTheme} 
                    onClick={setMainTheme}
                    >
                        <p className={cls.button__title}>Main Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={cherryTheme} 
                    onClick={setCherryTheme}
                    >
                        <p className={cls.button__title}>Cherry Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={vineTheme} 
                    onClick={setVineTheme}
                    >
                        <p className={cls.button__title}>Vine Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={darkTheme} 
                    onClick={setDarkTheme}
                    >
                        <p className={cls.button__title}>Dark Theme</p>
                    </button>
                </div>
                <div className={cls.themes__item}>
                    <button className={purpleTheme} 
                    onClick={setPurpleTheme}
                    >
                        <p className={cls.button__title}>Purple Theme</p>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default ThemesLayout