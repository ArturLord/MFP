import React from 'react'

import styles from './ChangePassword.module.scss'

const ChangePassword = () => {
  return (
    <div className={styles.root}>
       <div className={styles.contentEdit}>
     <div className={styles.pass}>
     <div>
      <label>Старый пароль</label>
       <label>Новый пароль</label>
       <label>Подтвердите пароль</label>
      </div>
       <div>
       <input placeholder='Введите старый пароль'/>
                <input placeholder='Введите новый пароль'/>
               <input placeholder='Подтвердите пароль'/>
       </div>
     </div>
       <button className={styles.editPassBtn}>Сменить пароль</button>
       </div>
    </div>
  )
}

export default ChangePassword;