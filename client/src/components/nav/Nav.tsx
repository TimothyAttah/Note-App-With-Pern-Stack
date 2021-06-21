import React from 'react';
import {navMenu} from '../helpers'

export const Nav = () => {
  return (
    <div>
      {navMenu.nav.map(item => {
        return (
          <ul>
            <li>{item.name}</li>
          </ul>
        )
      })}
    </div>
  )
}
