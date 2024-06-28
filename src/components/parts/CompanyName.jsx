import styles from './CompanyName.module.scss';

export default function CompanyName() {

  return (
    <dl className={styles.CompanyName}>
      <dt>従業員数</dt>
      <dd>
        <input type="text" />
      </dd>
    </dl>
  )
}
