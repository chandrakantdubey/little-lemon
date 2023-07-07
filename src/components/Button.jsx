import { Link } from "react-router-dom";

export default function Button({className, btnTxt, to}) {
  return (
    <Link className={className} to={`${to}`}>
        {btnTxt}
    </Link>
  )
}
