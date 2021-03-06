import React from 'react';

export default class Dispatcher {
  callbacks = {};
  data = {};
  update = (namespace) => {
    (this.callbacks[namespace] || []).forEach(callback => {
      try {
        const data = this.data[namespace];
        callback(data);
      } catch (error) {
        callback(undefined);
      }
    });
  }
}