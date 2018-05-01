import { is } from 'immutable';

function getId() {
  var i, random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }

  return uuid;
}

exports.getId = getId;


shouldComponentUpdate(nextProps = {}, nextState = {}) {
  const props = this.props || {}, state = this.state || {};

  if (Object.keys(props).length !== Object.keys(nextProps).length ||
      Object.keys(state).length !== Object.keys(nextState).length) {
    return true;
  }

  for (const key in nextProps) {
    if (!is(props[key], nextProps[key])) {
      return true;
    }
  }

  for (const key in nextState) {
    if (state[key] !== nextState[key] || !is(state[key], nextState[key])) {
      return true;
    }
  }
  return false;
}

export.shouldComponentUpdate = shouldComponentUpdate;