import errorImage from "../../assets/error.svg";

import styles from "./Error.module.css";

export default function Error() {
  const { Container, Image, Text } = styles;
  return (
    <div className={Container}>
      <img className={Image} src={errorImage} alt="error" />
      <h3 className={Text}>Oops! Something went wrong.</h3>
    </div>
  );
}
