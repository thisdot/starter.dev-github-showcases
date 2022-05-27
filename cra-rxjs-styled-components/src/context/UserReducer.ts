import React from 'react';

export default function UserReducer(user: string, action: any) {
  switch (action.type) {
    case 'UPDATE_USER':
      const username = action.payload;

      return username;
    default:
      return user;
  }
}
