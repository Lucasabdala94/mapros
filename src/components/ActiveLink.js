
import { useRoute,Link } from "wouter";

function ActiveLink (props) {
    console.log(props)
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? "active" : ""}>{props.children}</a>
      </Link>
    );
};

export default ActiveLink;