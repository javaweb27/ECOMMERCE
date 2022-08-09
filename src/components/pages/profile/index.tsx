import "./index.scss"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import useProfileTrans from "./useProfileTrans"
import useLoginRegisterTrans from "../login-register/useLoginRegisterTrans"
import NavMenuLink from "../../elements/nav-menu/NavMenuLink"
import ChangePasswordForm from "./ChangePasswordForm"
import BtnLogout from "./BtnLogout"
import BtnDeleteAccount from "./BtnDeleteAccount"
import { changeLanguage, T_SupportedLanguages } from "../../redux/reducers/languageSlice"

const Profile = () => {
  const { isLogged, loginData } = useAppSelector(({ loginStatus }) => loginStatus)
  const dispatch = useAppDispatch()

  const t = useProfileTrans()
  const tLoginRegister = useLoginRegisterTrans()

  const handleChangeLanguage = (lang: T_SupportedLanguages) =>
    dispatch(changeLanguage(lang))

  if (isLogged) {
    return (
      <section className="profile-container">
        <p className="par">{t["your-data"]}:</p>
        <ul className="list">
          <li className="item">
            {t.name}: {loginData?.name}
          </li>
          <li className="item">
            {t.email}: {loginData?.email}
          </li>
        </ul>

        <ChangePasswordForm email={loginData!.email} />

        <button
          className="btn-change-language"
          onClick={() => handleChangeLanguage("en")}
        >
          {t["btn-change-to-english"]}
        </button>

        <button
          className="btn-change-language"
          onClick={() => handleChangeLanguage("es")}
        >
          {t["btn-change-to-spanish"]}
        </button>

        <BtnLogout />
        <BtnDeleteAccount />
      </section>
    )
  }

  return (
    <section className="profile-container">
      <div className="link">
        <NavMenuLink to="/login">{tLoginRegister["login-btn"]}</NavMenuLink>
      </div>
      <br />
      <div className="link">
        <NavMenuLink to="/register">{tLoginRegister["register-btn"]}</NavMenuLink>
      </div>
    </section>
  )
}

export default Profile
