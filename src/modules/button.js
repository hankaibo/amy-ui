// 按钮默认配置
const defaults = {
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  href: undefined,
  htmlType: 'button',
  icon: undefined,
  loading: false,
  shape: 'default',
  size: 'middle',
  target: undefined,
  type: 'default',
  onClick: undefined,
};

class Button {
  constructor(selector, options) {
    let el = selector;
    if (typeof selector === 'string') {
      el = document.querySelector(selector);
    }
    if (!el) {
      throw new Error('请选择正确的元素。');
    }
    this.el = el;
    this.config(options);
  }

  config(options) {
    const cloneOptions = {
      ...defaults,
      ...options,
    };
    this.init();
    this.setBlock(cloneOptions.block);

    return cloneOptions;
  }

  init() {
    if (!this.el.classList) {
      this.el.className = '';
    }
    this.el.classList.add('button');
  }

  setBlock(isBlock) {
    if (isBlock) {
      this.el.classList.add('block');
    } else {
      this.el.classList.remove('block');
    }
  }
}

export default Button;
