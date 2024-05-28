export const rowsPerPage = [
  {
    text: '5',
    value: 5,
  },
  {
    text: '10',
    value: 10,
  },
  {
    text: '30',
    value: 15,
  },
  {
    text: '50',
    value: 50,
  },
  {
    text: '100',
    value: 100,
  }
];

export const defaultParams = {
  page: 1,
  size: 10,
};

export const toolbar = {
  options: [
    'inline',
    'blockType',
    'list',
    'textAlign',
    'image'
  ],
  inline: {
    inDropdown: false,
    options: [
      'underline',
      'bold',
      'italic'
    ]
  },
  blockType: {
    inDropdown: false,
    options: [
      'H1'
    ]
  },
  list: {
    options: [
      'unordered',
      'ordered'
    ]
  },
  image: {
    // icon: image,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: undefined,
    previewImage: false,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    alt: { present: true, mandatory: true },
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
  },
};
