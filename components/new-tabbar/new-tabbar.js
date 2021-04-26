// components/new-tabbar/new-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleColorChange(e) {
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex: currentIndex
      })
    }
  },
  lifetimes: {
    created(){
      console.log('被创建');
    },
    ready(){
      console.log('ready go');
    }
  }
})
