import styles from "./LoadingIndicator.module.css";

export default function LoadingIndicator() {
  const { Indicator, Text, Container } = styles;
  return (
    <div className={Container}>
      <div className={Indicator} />
      <h1 className={Text}>Loading...</h1>
    </div>
  );
}
