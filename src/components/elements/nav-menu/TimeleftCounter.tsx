import classes from "./timeleft-counter.module.scss"
import jwt_decode from "jwt-decode"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteAuthToken, getAuthToken } from "../../../functions/localStorageHandlers"
import { updateLoginStatus } from "../../redux/reducers/loginStatusSlice"

const TimeleftCounter = () => {
  const dispatch = useDispatch()

  const refTimeleft = useRef<HTMLElement | null>(null)

  let decoded: { userData: { endDate: number } } | null

  try {
    decoded = jwt_decode(getAuthToken()!)
  } catch {
    decoded = null
  }

  useEffect(() => {
    if (decoded === null) {
      deleteAuthToken()
      dispatch(updateLoginStatus())
      return
    }

    const idInterval = setInterval(() => {
      const timeleft = decoded!.userData.endDate - Math.trunc((new Date).getTime() / 1000)

      refTimeleft.current!.textContent = String(timeleft)

      if (timeleft < 1) {
        clearInterval(idInterval)
        deleteAuthToken()
        dispatch(updateLoginStatus())
      }
    }, 1000)

    return () => clearInterval(idInterval)
  }, [])

  return <div className={classes.container}>
    <span ref={refTimeleft} className={classes.number}></span>
  </div>
}

export default TimeleftCounter