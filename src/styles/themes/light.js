import logoL from '../../assets/logoL.svg';

export default {
  title: 'light',
  logo: `${logoL}`,

  colors: {
    primary: 'linear-gradient(90deg, #EBEBEB, #ff9000, #EBEBEB 100%)',
    secundary: '#ff9000',

    header: {
      background: 'linear-gradient(-145deg, #ff9000) no-repeat center',
      box_shadow: 'rgb(244 123 0 / 20%)',
      text: '#ff9000',
      text_strong: '#EBEBEB',
    },

    hr: {
      primary: '#f47b00',
      secundary: '#ffc146',
    },

    li: {
      background: '#E5E5E5',
      border_color: '#ff9000',
      strong_true: '#7DDE92',
      strong_false: '#ff5240',
      span_true: '#058C42',
      span_false: '#020202',
    },

    color: '#f47b00',
    background: '#efefef',
    text: '#0d0d0d',
    inputColor: '#333',
    inputPlaceholder: '#ffff',
    strongSchedule: '#020202',
    appointmentBackground: '#ffff',
    dayPicker: '#fff',
    dayAvailableBackground: '#E5E5E5',
    dayAvailableBackgroundHover: '#efefef',
  },
};
