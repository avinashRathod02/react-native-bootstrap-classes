import properties from './config-styled';
import {hasObjectLength, hasTextLength as hasValue} from './condition';

function getValue(property, value) {
  const isNegative = property.charAt(0) === '-';

  if (property.includes('font-weight')) {
    return `${value}`;
  }

  if (property.includes('aspect-ratio') && value === 'null') {
    return null;
  }

  let propertyValue: any = parseFloat(value);

  if (isNegative) {
    propertyValue = -propertyValue;
  }

  if (value.includes('%')) {
    propertyValue = `${propertyValue}%`;
  }

  return propertyValue;
}

function getProperty(property) {
  if (property.charAt(0) === '-') {
    return property.substring(1);
  }

  return property;
}

function isValid(property) {
  if (!property) return false;
  return true;
}

function splitPropertyAndValue(prop) {
  const split = prop.split('-');
  const property = split.slice(0, -1).join('-');
  const value = split[split.length - 1];

  return {property, value};
}

function getDynamicStyle(prop) {
  const {property, value} = splitPropertyAndValue(prop);
  const isAllow = isValid(property);

  if (!isAllow) return {};
  const propertyName = getProperty(property);
  const propertyValue = getValue(property, value);
  let style = properties?.[propertyName] ?? {};

  for (const key in style) style = {[key]: propertyValue};

  return style;
}

function bindStyle(props, property) {
  const key = property.substring(1);

  if (!props.hasOwnProperty(key)) {
    return {};
  }

  return {[key]: props?.[key]};
}

function getStyle(props, property) {
  if (property.charAt(0) === ':') {
    if (!props) {
      return {};
    }
    return bindStyle(props, property);
  }

  const isAllow = isValid(property);

  if (!isAllow) {
    return {};
  }

  const style = properties?.[getProperty(property)];

  if (!hasObjectLength(style)) {
    return getDynamicStyle(property);
  }

  return style;
}

export const getClass = (props, styleClass) => {
  if (!hasValue(styleClass)) {
    return {};
  }

  if (typeof styleClass !== 'string') {
    return {};
  }

  let styles = {};

  styleClass
    .replace('undefined', '')
    .trim()
    .split(' ')
    .map(key => {
      const style = getStyle(props, key);
      if (style) {
        styles = {...styles, ...style};
      }
    });

  return styles;
};
