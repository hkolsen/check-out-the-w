import React from 'react';
import IconBase from 'react-icon-base';

interface RadioIconProps {
  iconName: string;
  color: string;
}

export const RadioIcon: React.FC<RadioIconProps> = ({ color, iconName }) => (
  <IconBase
    viewBox="0 0 20 20"
    height="100%"
    width="100%"
    color={color}
    shapeRendering="geometricPrecision"
  >
    <title>{iconName}</title>
    <path
      d="M18.8 4.4l-.7-.8c-.2-.2-.5-.2-.8 0l-9.7 9.9c-.2.2-.5.2-.7 0L2.7 9.2c-.3-.2-.6-.2-.8 0l-.7.7c-.2.2-.2.6 0 .8l5.4 5.5c.4.4 1.1.4 1.5 0l10.8-11c.2-.2.2-.6-.1-.8"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </IconBase>
);