import isUrl from 'validator/lib/isURL';

const isNonEmpty = (str) => str.length > 0;

const isTitleValid = (str) => {
  return str.length > 4 && str.length < 16;
};

const urlErrorMsg = 'Невалидный URL';
const titleErrorMsg = 'Название должно быть от 5 до 15 символов';
const selectErrorMsg = 'Выберите одну из опций';

export default {
  config: {
    buttonText: 'Показать',
  },
  fields: [
    {
      name: 'title',
      label: 'Название баннера',
      placeholder: 'My banner',
      type: 'text',
      defaultValue: '',
      required: true,
      validatorFn: isTitleValid,
      errorMsg: titleErrorMsg,
    },
    {
      name: 'type',
      label: 'Тип баннера',
      placeholder: 'Выберите тип...',
      type: 'select',
      defaultValue: '',
      options: [
        { name: 'direct', label: 'Прямой' },
        { name: 'reverse', label: 'Обратный' },
      ],
      required: true,
      validatorFn: isNonEmpty,
      errorMsg: selectErrorMsg,
    },
    {
      name: 'verticalImgUrl',
      label: 'Изображение вертикальное',
      placeholder: 'https://vertical-img.png',
      type: 'url',
      defaultValue: '',
      required: true,
      validatorFn: isUrl,
      errorMsg: urlErrorMsg,
    },
    {
      name: 'horizontalImgUrl',
      label: 'Изображение горизонтальное',
      placeholder: 'https://horizontal-img.png',
      type: 'url',
      defaultValue: '',
      required: true,
      validatorFn: isUrl,
      errorMsg: urlErrorMsg,
    },
    {
      name: 'targetUrl',
      label: 'Целевая ссылка',
      placeholder: 'https://goto-url.com',
      type: 'url',
      defaultValue: '',
      required: true,
      validatorFn: isUrl,
      errorMsg: urlErrorMsg,
    },
  ],
};
