<template>
  <div id="mobileRichTextPage" v-if="loadCompleted">

  </div>
</template>
<script>

/**
   * @since 2019年4月13日15:10:19
   * 新增控制页面元素显示功能：
   * 使用方法为：
   * 1.页面URL中包含visible参数，参数组成规则如下:
   * 参数长度为三位，第一位控制标题是否显示，第二位控制作者是否显示，第三位控制更新时间是否显示。默认均不显示。每一位由0和1两位组成，0表示不显示，1表示显示。如:111则表示全部显示，000则表示不显示。
   * 解析过程见： pageSectionVisible 方法
   */
export default {
  name: 'RichTextPageHome',
  data () {
    return {
      richTextContent: {},
      loadCompleted: false,
      dynamicStyle: {
        margin: '4px auto'
      },
      imageInfo: {
        width: 1,
        height: 1
      },
      visible: {
        title: false,
        author: false,
        updateTime: false
      }
    }
  },
  beforeCreate () {
  },
  created () {

  },
  methods: {
  }
}
</script>

<style scoped>
  html, body {
    width: 100%;
  }

  #mobileRichTextPage {
    width: 100%;
    overflow: hidden;
  }

  .rich-text-title {
    font-size: 18px;
    color: #333;
    font-weight: 400;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 14px;
  }

  .invalidate-rich-text {
    text-align: center;
  }
</style>
