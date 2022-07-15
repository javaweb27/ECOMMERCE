import classes from "./timeleft-counter.module.scss"
import { useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { deleteAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const TimeleftCounter = () => {
  const dispatch = useAppDispatch()

  const loginData = useAppSelector(({ loginStatus }) => loginStatus.loginData)

  const refTimeleft = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (loginData === null) {
      deleteAuthToken()
      dispatch(updateLoginStatus())
      return
    }

    const idInterval = setInterval(() => {
      const timeleft = loginData.endDate - Math.trunc((new Date).getTime() / 1000)

      refTimeleft.current!.textContent = String(timeleft)

      if (timeleft < 0) {
        clearInterval(idInterval)
        deleteAuthToken()
        dispatch(updateLoginStatus())
      }
    }, 1000)

    return () => clearInterval(idInterval)
  }, [])

  return <div className={classes.container}>
    <span ref={refTimeleft} className={classes.number}>
      {loginData && loginData.endDate - Math.trunc((new Date).getTime() / 1000)}
    </span>
  </div>
}

export default TimeleftCounter