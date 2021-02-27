import React from 'react';
import Checkbox from '../Checkbox';

export default function AppearanceSettings (props) {
  return (
    <div>
        <h2>Appearance</h2>
        <Checkbox name='animations' text={props.language.experimental.animations} betaFeature={true} />
        <Checkbox name='darkTheme' text={props.language.dark} />
        <Checkbox name='brightnessTime' text={props.language.experimental.night_mode} betaFeature={true} />
        <ul>
            <p>{props.language.custom_css} <span className='modalLink' onClick={() => this.resetItem()}>{props.language.reset}</span> <span className='newFeature'> NEW</span></p>
            <textarea id='customcss'></textarea>
        </ul>
        <h3>Accessibility</h3>
        <ul>
            <p>Zoom (100%) <span className='modalLink'>{props.language.reset}</span></p>
            <input className='range' type='range' min='50' max='200' value={100} />
        </ul>
        <ul>
            <p>Toast Duration (2500 milliseconds) <span className='modalLink'>{props.language.reset}</span></p>
            <input className='range' type='range' min='50' max='200' value={100} />
        </ul>
    </div>
  );
}