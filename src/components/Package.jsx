import React, { useState, useEffect } from 'react'

export default function Package({ item }) {

   let [presentMice, setPresentMice] = useState()
   let [packageSelected, setPackageSelected] = useState(0)

   useEffect(() => {
      if (item.numberMice == null) {
         setPresentMice('мышь в подарок')
      } else if (item.numberMice > 1 | item.numberMice < 5) {
         setPresentMice('мыши в подарок')
      } if (item.numberMice >= 5) {
         setPresentMice('мышей в подарок заказчик доволен')
      }
   }, item.numberMice)

   let mouseLeaveFun = () => {
      if (document.querySelectorAll(".column.active")) {
         let x = document.querySelectorAll(".column.active")
         x.forEach(i => i.classList.add('activeHover'))
      }
   }
   let change_state = () => {
      setPackageSelected((packageSelected + 1) % 3)
   }

   let stateClass = ''
   let note = ''

   switch (packageSelected) {
      case 1:
         stateClass = 'active'
         note = item.noteSelected
         break
      case 2:
         stateClass = 'disabled'
         note = item.noteDisabled
         break
   }

   useEffect(() => {
      if (packageSelected == 1) {
         document.querySelectorAll(".column.active").forEach(i => i.addEventListener("mouseleave", mouseLeaveFun))
      }
   }, [packageSelected]);

   return (
      <div className="column-block">
         <div onClick={change_state} className={"column " + stateClass}>
            <div className="column__description">Сказочное заморское яство</div>
            <div className="column__title"><p>Нямушка</p>{item.title}</div>
            <div className="column__promo"><div><span>{item.number_servings}</span> порций</div>  <span>{item.numberMice}</span> {presentMice}</div>
            <div className="column__weight"><p>{item.weight}</p> кг</div>
         </div>
         <div style={{ display: packageSelected != 0 ? "none" : "block" }} className="column__note ">
            Чего сидишь? Порадуй котэ, <a onClick={change_state} href="#">купи.</a>
         </div>
         <div className={"column__note " + stateClass}>
            {note}
         </div>
      </div>
   )
}
