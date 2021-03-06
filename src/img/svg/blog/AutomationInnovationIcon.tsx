import React from 'react';
import IconBase from 'react-icon-base';

export interface AutomationInnovationIconProps {
  blogTitle: string;
  color: string;
}

export const AutomationInnovationIcon: React.FunctionComponent<AutomationInnovationIconProps> = ({
  color,
  blogTitle,
}) => (
  <IconBase
    viewBox="0 0 200 200"
    height="100%"
    width="100%"
    color={color}
    shapeRendering="geometricPrecision"
  >
    <title>{blogTitle}</title>
    <path fill={color} d="M12.3 187.7h172.5c1.6 0 3-1.3 3-3v-17.8c0-1.6-1.3-3-3-3h-8.9V155c0-1.6-1.3-3-3-3H155c-1.6 0-3 1.3-3 3v8.9h-29.7V152h-5.9v11.9h-14.9v-17.8h-5.9v17.8H77.7v-17.8h-5.9v17.8H56.9V155H51v8.9H39.3l1.3-15.7.5-6 .7-8H48v-5.9H12.3v5.9h6.2l2.5 29.7h-8.7c-1.6 0-3 1.3-3 3v17.8c0 1.7 1.3 3 3 3zM158 158h11.9v5.9H158V158zM25.5 147.2l9.3-1.7-.5 5.9L26 153l-.5-5.8zm10.3-13l-.4 5.2-10.4 1.9-.6-7.1h11.4zm-9.3 24.7l7.4-1.3-.5 6.3H27l-.5-5zm-11.3 11H181.7v11.9H15.2v-11.9z"/>
    <path fill={color} d="M22.8 86.5L54.3 118l5.7 14.3c.3.8 1 1.4 1.8 1.7l17.8 5.9c.3.1.6.2.9.2.8 0 1.5-.3 2.1-.9l8.9-8.9c.9-.9 1.1-2.3.6-3.4l-8.9-17.8c-.4-.8-1.2-1.4-2.1-1.6l-14-2.8-28.7-28.9c.4-1.3.6-2.7.6-4.1 0-3.3-1.1-6.4-3-8.8V12.3c0-1.6-1.3-3-3-3H15.2c-1.6 0-3 1.3-3 3v50.6c-1.8 2.5-3 5.5-3 8.8.1 7.8 6 14.1 13.6 14.8zm-7.6-14.8c0-2.2.9-4.2 2.2-5.8 3.5-4 9.9-4 13.4 0 1.4 1.6 2.2 3.6 2.2 5.8 0 1.3-.3 2.5-.8 3.6-.3.7-.7 1.3-1.1 1.8-.1.2-.3.4-.4.5l-.6.6c-.2.2-.4.3-.6.5-.2.1-.4.3-.6.4-.4.2-.8.5-1.2.7-.2.1-.4.1-.5.2-.3.1-.7.2-1 .3-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-4.9.1-8.9-3.9-8.9-8.9zm20.3 9.6l28.2 28.2c.4.4.9.7 1.5.8l13.4 2.7 7.3 14.6-6.1 6.1-14.8-4.9-5.4-13.6c-.1-.4-.4-.7-.7-1L30.1 85.4c.7-.3 1.4-.7 2-1.1.2-.1.4-.3.6-.4.6-.4 1.2-.9 1.7-1.4.2-.2.3-.4.5-.5.2-.3.4-.5.6-.7zm-5.4-66.1v42.9c-1.8-.8-3.8-1.3-5.9-1.3s-4.1.5-5.9 1.3V15.2h11.8zM187.7 71.7c0-3.3-1.1-6.4-3-8.8V12.3c0-1.6-1.3-3-3-3h-17.8c-1.6 0-3 1.3-3 3v50.6c-1.6 2.1-2.6 4.7-2.8 7.5l-21.9 21.9-10.2-2.6c-.9-.2-1.9 0-2.6.6l-14.9 11.9c-.7.6-1.1 1.4-1.1 2.3v20.8c0 1.2.7 2.3 1.8 2.8s2.4.2 3.2-.7l16.1-16.3 3.1 1.6 1.7 3.3-13.6 16.3c-.7.9-.9 2.1-.4 3.2.5 1 1.5 1.7 2.7 1.7h17.8c.9 0 1.8-.4 2.3-1.1l11.9-14.9c.6-.7.8-1.7.6-2.6l-2.5-10.1 22.1-22.1c7.5-.6 13.5-6.9 13.5-14.7zm-14.9 9c-4.9 0-8.9-4-8.9-8.9 0-2.2.9-4.2 2.2-5.8 3.5-4 9.9-4 13.4 0 1.4 1.6 2.2 3.6 2.2 5.8.1 4.9-4 8.9-8.9 8.9zm6-65.5v42.9c-1.8-.8-3.8-1.3-5.9-1.3s-4.1.5-5.9 1.3V15.2h11.8zm-40.4 116h-10.1l10.8-13c.8-.9.9-2.2.4-3.2l-3-5.9c-.3-.6-.8-1-1.3-1.3l-5.9-3c-1.2-.6-2.5-.3-3.4.6L113.4 118v-12.1L126 95.8l9.4 2.4 10.7 10.7 2.4 9.7-10.1 12.6zm10.6-28l-7.7-7.7 17.8-17.8c.2.6.6 1.1.9 1.6.2.3.3.6.4.8 1.1 1.6 2.4 2.9 4 4 .3.2.5.3.8.4.5.3 1 .6 1.6.9L149 103.2z"/>
    <path fill={color} d="M86.6 9.3H68.8c-1.6 0-3 1.3-3 3V48c-1.8 2.5-3 5.5-3 8.8 0 4 1.6 7.6 4.1 10.2l4.9 29c.2 1.4 1.5 2.5 2.9 2.5h5.9c1.5 0 2.7-1.1 2.9-2.5l4.8-28.9c2.6-2.7 4.1-6.3 4.1-10.2 0-3.3-1.1-6.4-3-8.8V12.3c.2-1.7-1.2-3-2.8-3zm-3 54.2c-3.3 3-8.6 3-11.9 0-1.8-1.6-2.9-4-2.9-6.6 0-2.2.9-4.2 2.2-5.8 3.5-4 9.9-4 13.4 0 1.4 1.6 2.2 3.6 2.2 5.8 0 2.6-1.1 4.9-3 6.6.1-.1 0-.1 0 0zm0-48.3v28c-1.8-.8-3.8-1.3-5.9-1.3s-4.1.5-5.9 1.3v-28h11.8zm-5.5 77.3h-.9l-3.6-21.4c.2.1.4.1.6.1.3.1.6.1.9.2.8.1 1.6.2 2.3.2h.4c.8 0 1.6-.1 2.3-.2.3-.1.6-.1.9-.2.2 0 .4-.1.6-.1l-3.5 21.4zM104 91.2l12.3-19.7c1 .2 2 .3 3 .3 8.2 0 14.9-6.7 14.9-14.9 0-3.3-1.1-6.4-3-8.8V12.3c0-1.6-1.3-3-3-3h-17.8c-1.6 0-3 1.3-3 3V48c-1.8 2.5-3 5.5-3 8.8 0 5 2.5 9.5 6.4 12.2L98.9 88l5.1 3.2zm21.3-76v28c-1.8-.8-3.8-1.3-5.9-1.3s-4.1.5-5.9 1.3v-28h11.8zm-12.7 35.9c0-.1 0-.1 0 0 3.5-4 9.9-4 13.4 0 1.4 1.6 2.2 3.6 2.2 5.8 0 4.9-4 8.9-8.9 8.9s-8.9-4-8.9-8.9c0-2.3.8-4.3 2.2-5.8z"/> 
  </IconBase>
);