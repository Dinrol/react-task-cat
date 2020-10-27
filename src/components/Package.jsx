import React, { useState, useEffect } from 'react'

export default function Package({ item }) {
   let [presentMice, setPresentMice] = useState()
   let [packageSelected, setPackageSelected] = useState(0)
   let [note, setNote] = useState('0')


   useEffect(() => {
      if (item.numberMice == null) {
         setPresentMice('мышь в подарок')
      } else if (item.numberMice > 1 | item.numberMice < 5) {
         setPresentMice('мыши в подарок')
      } if (item.numberMice >= 5) {
         setPresentMice('мышей в подарок заказчик доволен')
      }
   }, item.numberMice)
   let change_state = () => {
      setPackageSelected((packageSelected + 1) % 3)
   }
   let stateClass = '';
   switch (packageSelected) {
      case 1:
         stateClass = 'active'
         break
      case 2:
         stateClass = 'disabled'
         break

   }
   return (
      <div className="column-block">
         <div onClick={change_state} className={"column " + stateClass}>
            <div className="column__description">Сказочное заморское яство</div>
            <div className="column__title"><p>Нямушка</p>{item.title}</div>
            <div className="column__promo"><div><span>{item.number_servings}</span> порций</div>  <span>{item.numberMice}</span> {presentMice}</div>
            <div className="column__weight"><p>{item.weight}</p> кг</div>
         </div>
         <div className="column__note">
            Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
         </div>
      </div>
   )
}
